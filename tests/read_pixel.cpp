#include <p6/p6.h>
#include <iostream>
#include <string>

int main()
{
    auto ctx = p6::Context{{1280, 720, "Read Pixel"}};
    ctx.main_canvas_mode(p6::CanvasSizeMode_FixedAspectRatio{1.f});

    ctx.update = [&]() {
        ctx.background(ctx.shift() ? p6::Color{1, 0, 0} : p6::Color{0, 0, 1});
        ctx.circle(p6::Center{-0.5, -0.5f},
                   p6::Radius{0.2f});
    };
    ctx.imgui = [&]() {
        ImGui::Begin("Window");
        const auto color = ctx.read_pixel(ctx.mouse());
        auto       vec4  = color.as_straight_vec4();
        ImGui::ColorEdit4("Color", (float*)&vec4);
        ImGui::End();
    };
    ctx.start();
}