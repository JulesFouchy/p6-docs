#include <exe_path/exe_path.h>
#include <p6/p6.h>
#include <filesystem>
#include <iostream>

int main()
{
    auto ctx  = p6::Context{{1280, 720, "Triangle"}};
    ctx.imgui = [&]() {
        ImGui::Begin("Window");
        ImGui::SliderFloat("Stroke Weight", &ctx.stroke_weight, 0.f, 0.5f);
        ImGui::End();
    };
    ctx.stroke_weight = 0.1f;
    ctx.update        = [&]() {
        ctx.background(p6::NamedColor::PinkPearl);
        ctx.fill       = p6::Color{1.f, 0.f, 0.f, 0.5f};
        ctx.stroke     = p6::Color{0.f, 0.f, 1.f, 0.5f};
        ctx.use_fill   = true;
        ctx.use_stroke = true;
        ctx.triangle({0.1f, 0.1f}, {0.1f, 0.9f}, {0.9f, 0.1f});
        ctx.use_stroke = false;
        ctx.triangle({-0.1f, 0.1f}, {-0.1f, 0.9f}, {-0.9f, 0.1f});
        ctx.use_fill = false;
        ctx.triangle({-0.1f, -0.1f}, {-0.1f, -0.9f}, {-0.9f, -0.1f});
        ctx.use_stroke = true;
        ctx.triangle({0.1f, -0.1f}, {0.1f, -0.9f}, {0.9f, -0.1f});
    };
    ctx.start();
}