#include <p6/p6.h>

int main()
{
    auto        ctx           = p6::Context{{1280, 720, "Dear ImGui"}};
    auto        square_radius = 0.5f;
    std::string text          = "Hello";
    ctx.imgui                 = [&]() {
        // Show a simple window
        ImGui::Begin("Test");
        ImGui::SliderFloat("Square size", &square_radius, 0.f, 1.f);
        ImGui::InputText("Text", &text);
        ImGui::End();
        // Show the official ImGui demo window
        // It is very useful to discover all the widgets available in ImGui
        ImGui::ShowDemoWindow();
    };
    ctx.update = [&]() {
        ctx.use_stroke = false;
        ctx.fill       = {1, 1, 0, 0.1f};
        ctx.rectangle(p6::FullScreen{});
        ctx.use_stroke = true;
        ctx.fill       = p6::NamedColor::BlueGreen;
        ctx.square(p6::Center{}, p6::Radius{square_radius});
        ctx.circle(p6::Center{ctx.mouse()}, p6::Radius{0.3f});
    };
    ctx.start();
}