#include <p6/p6.h>

int main()
{
    auto ctx    = p6::Context{{1280, 720, "Save Image"}};
    auto canvas = p6::Canvas({2 * ctx.framebuffer_height(),
                              2 * ctx.framebuffer_height()});

    ctx.framebuffer_resized = [&]() {
        canvas.resize({2 * ctx.framebuffer_height(),
                       2 * ctx.framebuffer_height()});
    };

    ctx.background({0.f, 0.f, 0.f, 0.f});
    std::string output_path = "out/save_test.png";

    ctx.update = [&]() {
        // Do some drawing so that we can distinguish our saved files
        // The circle is partly transparent; it would be interesting to make sure that alpha is exported properly
        if (ctx.shift() || ctx.ctrl() || ctx.alt())
        {
            ctx.render_to_canvas(canvas);
            ctx.circle(ctx.mouse(), p6::Radius{0.3f});
            ctx.render_to_screen();
        }
        ctx.background(p6::NamedColor::LightBlue);
        ctx.image(canvas, p6::FitY{});
    };

    ctx.imgui = [&]() {
        ImGui::InputText("Path", &output_path);
        if (ImGui::Button("Save Image from Window"))
        {
            ctx.save_image(output_path);
        }
        if (ImGui::Button("Save Image from Canvas"))
        {
            p6::save_image(canvas, output_path);
        }
    };

    ctx.start();
}