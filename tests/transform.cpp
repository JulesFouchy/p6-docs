#include <p6/p6.h>
#include "glm/gtc/type_ptr.hpp"
#include "imgui.h"

int main()
{
    auto ctx = p6::Context{{1280, 720, "Transform"}};

    bool      translation_first{true};
    glm::vec2 translation{};
    float     rotation{};
    glm::vec2 scale{1.f};

    ctx.update = [&]() {
        ctx.background(p6::NamedColor::BlueGray);
        ctx.push_transform();
        if (translation_first)
        {
            ctx.translate(translation);
            ctx.rotate(p6::Angle{p6::Radians{rotation}});
        }
        else
        {
            ctx.rotate(p6::Angle{p6::Radians{rotation}});
            ctx.translate(translation);
        }
        ctx.scale(scale);
        ctx.square(p6::Center{0.f, 0.f}, p6::Radius{0.3f});
        ctx.equilateral_triangle(p6::Center{0.f, 0.f}, p6::Radius{0.3f});
        ctx.text(u"Hello", p6::Center{0.f, 0.f});
        ctx.pop_transform();
    };

    ctx.imgui = [&]() {
        ImGui::Begin("Window");
        ImGui::SliderFloat2("Translation", glm::value_ptr(translation), -1.f, 1.f);
        ImGui::SliderAngle("Rotation", &rotation);
        ImGui::Checkbox("Translation First", &translation_first);
        ImGui::SliderFloat2("Scale", glm::value_ptr(scale), 0.5f, 2.f);
        ImGui::End();
    };

    ctx.start();
}