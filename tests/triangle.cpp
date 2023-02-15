#include <exe_path/exe_path.h>
#include <p6/p6.h>
#include <filesystem>
#include <iostream>
#include "glm/gtc/type_ptr.hpp"
#include "imgui.h"

int main()
{
    auto ctx  = p6::Context{{1280, 720, "Triangle"}};
    float     angle_in_radians{0.f};
    glm::vec2 position{0.f};
    glm::vec2 scale{1.f};
    ctx.imgui = [&]() {
        ImGui::Begin("Window");
        ImGui::SliderFloat("Stroke Weight", &ctx.stroke_weight, 0.f, 0.5f);
        ImGui::DragFloat2("Position", glm::value_ptr(position), 0.02f);
        ImGui::DragFloat2("Scale", glm::value_ptr(scale), 0.02f);
        ImGui::SliderAngle("Angle", &angle_in_radians);
        ImGui::End();
    };
    ctx.stroke_weight = 0.1f;
    ctx.update        = [&]() {
        ctx.background(p6::NamedColor::PinkPearl);
        ctx.fill       = p6::Color{1.f, 0.f, 0.f, 0.5f};
        ctx.stroke     = p6::Color{0.f, 0.f, 1.f, 0.5f};
        ctx.use_fill   = true;
        ctx.use_stroke = true;
        ctx.triangle({0.1f, 0.1f}, {0.1f, 0.9f}, {0.9f, 0.1f},
                     p6::Transform2D{
                         .position = position,
                         .scale    = scale,
                         .rotation = p6::Rotation{p6::Radians{angle_in_radians}},
                     });
        ctx.use_stroke = false;
        ctx.triangle({-0.1f, 0.1f}, {-0.1f, 0.9f}, {-0.9f, 0.1f});
        ctx.use_fill = false;
        ctx.triangle({-0.1f, -0.1f}, {-0.1f, -0.9f}, {-0.9f, -0.1f});
        ctx.use_stroke = true;
        ctx.triangle({0.1f, -0.1f}, {0.1f, -0.9f}, {0.9f, -0.1f});
        ctx.use_fill = true;

        ctx.equilateral_triangle(p6::Center{ctx.mouse()}, p6::Radius{0.3f}, p6::Rotation{p6::Radians{angle_in_radians}});
    };
    ctx.start();
}