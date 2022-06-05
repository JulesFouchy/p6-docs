#include <p6/p6.h>

int main()
{
    auto ctx = p6::Context{{1280, 720, "Save Image"}};
    ctx.background({0.f, 0.f, 0.f, 0.f});
    std::string output_path = "out/save_test.png";

    ctx.update = [&]() {
        // Do some drawing so that we can distinguish our saved files
        // The circle is partly transparent; it would be interesting to make sure that alpha is exported properly
        if (ctx.shift() || ctx.ctrl() || ctx.alt())
        {
            ctx.circle(ctx.mouse(), p6::Radius{0.3f});
        }
    };

    ctx.imgui = [&]() {
        ImGui::InputText("Path", &output_path);
        if (ImGui::Button("Save Image"))
        {
            ctx.save_image(output_path);
        }
    };

    ctx.start();
}