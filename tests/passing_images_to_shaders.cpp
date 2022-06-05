#include <p6/p6.h>

int main()
{
    auto ctx                = p6::Context{{1280, 720, "Passing Images to Shaders"}};
    auto canvas1            = p6::Canvas{ctx.main_canvas_size()};
    auto canvas2            = p6::Canvas{ctx.main_canvas_size()};
    ctx.main_canvas_resized = [&]() {
        canvas1.resize(ctx.main_canvas_size());
        canvas2.resize(ctx.main_canvas_size());
    };
    const auto shader = p6::load_shader("res/shader_applied_to_image.frag");

    int choice = 0;
    ctx.imgui  = [&]() {
        ImGui::Begin("Window");
        ImGui::RadioButton("Apply Shader", &choice, 0);
        ImGui::RadioButton("Show Image 1", &choice, 1);
        ImGui::RadioButton("Show Image 2", &choice, 2);
        ImGui::End();
    };

    ctx.update = [&]() {
        ctx.render_to_canvas(canvas1);
        {
            ctx.background({0.1f, 0.1f, 0.1f, 1.f});
            ctx.fill = p6::NamedColor::White;
            ctx.circle();
        }
        ctx.render_to_canvas(canvas2);
        {
            ctx.background({0.9f, 0.1f, 0.1f, 1.f});
            ctx.fill = p6::NamedColor::Blue;
            ctx.circle(p6::Center{}, p6::Radius{0.5f});
        }
        ctx.render_to_main_canvas();

        if (choice == 0)
        {
            shader.set("_image1", canvas1);
            shader.set("_image2", canvas2);
            ctx.rectangle_with_shader(shader, p6::FullScreen{});
        }
        else if (choice == 1)
        {
            ctx.image(canvas1);
        }
        else
        {
            ctx.image(canvas2);
        }
    };
    ctx.start();
}