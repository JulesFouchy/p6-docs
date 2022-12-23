#include <p6/p6.h>
#include "glm/gtc/type_ptr.hpp"
#include "imgui.h"

int main()
{
    auto       ctx    = p6::Context{{1280, 720, "Random"}};
    auto const canvas = p6::Canvas({100, 200});

    float min{-1.f};
    float max{2.f};
    glm::vec2 point_min{-1.f, 3.f};
    glm::vec2 point_max{2.f, 4.f};
    float     aspect_ratio{2.f};

    float number{};
    float number_max{};
    float number_min_max{};
    glm::vec2 point_context{};
    glm::vec2 point_canvas{};
    glm::vec2 point{};
    glm::vec2 point_min_max{};
    glm::vec2 point_aspect_ratio{};
    glm::vec2 direction{};
    p6::Angle angle{};

    const auto reroll = [&]() {
        number         = p6::random::number();
        number_max     = p6::random::number(max);
        number_min_max = p6::random::number(min, max);

        point_context      = p6::random::point(ctx);
        point_canvas       = p6::random::point(canvas);
        point              = p6::random::point();
        point_min_max      = p6::random::point(point_min, point_max);
        point_aspect_ratio = p6::random::point(aspect_ratio);

        direction = p6::random::direction();
        angle     = p6::random::angle();
    };

    reroll();

    ctx.imgui = [&]() {
        ImGui::Begin("Random");

        if (ImGui::Button("Reroll"))
            reroll();

        ImGui::DragFloat("min", &min);
        ImGui::DragFloat("max", &max);
        ImGui::DragFloat2("point_min", glm::value_ptr(point_min));
        ImGui::DragFloat2("point_max", glm::value_ptr(point_max));
        ImGui::DragFloat("aspect_ratio", &aspect_ratio);

        ImGui::NewLine();

        ImGui::Text("p6::random::number(): %.3f", number);
        ImGui::Text("p6::random::number(max): %.3f", number_max);
        ImGui::Text("p6::random::number(min, max): %.3f", number_min_max);
        ImGui::Text("p6::random::point(ctx): %.3f %.3f", point_context.x, point_context.y);
        ImGui::Text("p6::random::point(p6::Canvas{100, 200}): %.3f %.3f", point_canvas.x, point_canvas.y);
        ImGui::Text("p6::random::point(): %.3f %.3f", point.x, point.y);
        ImGui::Text("p6::random::point(point_min, point_max): %.3f %.3f", point_min_max.x, point_min_max.y);
        ImGui::Text("p6::random::point(aspect_ratio): %.3f %.3f", point_aspect_ratio.x, point_aspect_ratio.y);
        ImGui::Text("p6::random::direction(): %.3f %.3f (length %.3f)", direction.x, direction.y, glm::length(direction));
        ImGui::Text("p6::random::angle(): %.3f radians, %.3f turns", angle.as_radians(), angle.as_turns());

        ImGui::End();
    };

    ctx.start();
}