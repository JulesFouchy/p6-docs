#include <p6/p6.h>
#include "glm/gtc/type_ptr.hpp"
#include "imgui.h"

int main()
{
    auto       ctx    = p6::Context{{1280, 720, "Random"}};
    auto const canvas = p6::Canvas({100, 200});

    float min{-1.f};
    float max{2.f};
    int       min_int{0};
    int       max_int{3};
    glm::vec2 point_min{-1.f, 3.f};
    glm::vec2 point_max{2.f, 4.f};
    float     aspect_ratio{2.f};
    int       number_of_random_points_on_canvas{3};

    float number{};
    float number_max{};
    float number_min_max{};
    int   integer_max{};
    int   integer_min_max{};
    int   among{};

    glm::vec2 point_context{};
    glm::vec2 point_canvas{};
    glm::vec2 point{};
    glm::vec2 point_min_max{};
    glm::vec2 point_aspect_ratio{};
    glm::vec2 direction{};
    p6::Angle angle{};
    std::vector<glm::vec2> random_points_on_canvas{};

    const auto reroll = [&]() {
        number         = p6::random::number();
        number_max     = p6::random::number(max);
        number_min_max = p6::random::number(min, max);

        integer_max     = p6::random::integer(max_int);
        integer_min_max = p6::random::integer(min_int, max_int);

        among = p6::random::among<int>({1, 3, 7});

        point_context      = p6::random::point(ctx);
        point_canvas       = p6::random::point(canvas);
        point              = p6::random::point();
        point_min_max      = p6::random::point(point_min, point_max);
        point_aspect_ratio = p6::random::point(aspect_ratio);

        direction = p6::random::direction();
        angle     = p6::random::angle();

        random_points_on_canvas.clear();
        for (int _ = 0; _ < number_of_random_points_on_canvas; ++_)
        {
            random_points_on_canvas.push_back(p6::random::point(ctx));
        }
    };

    reroll();

    ctx.imgui = [&]() {
        ImGui::Begin("Random");

        if (ImGui::Button("Reroll"))
            reroll();

        ImGui::DragFloat("min", &min);
        ImGui::DragFloat("max", &max);
        ImGui::DragInt("min_int", &min_int);
        ImGui::DragInt("max_int", &max_int);
        ImGui::DragFloat2("point_min", glm::value_ptr(point_min));
        ImGui::DragFloat2("point_max", glm::value_ptr(point_max));
        ImGui::DragFloat("aspect_ratio", &aspect_ratio);
        ImGui::DragInt("number_of_random_points_on_canvas", &number_of_random_points_on_canvas);

        ImGui::NewLine();

        ImGui::Text("p6::random::number(): %.3f", number);
        ImGui::Text("p6::random::number(max): %.3f", number_max);
        ImGui::Text("p6::random::number(min, max): %.3f", number_min_max);
        ImGui::Text("p6::random::integer(max): %d", integer_max);
        ImGui::Text("p6::random::integer(min, max): %d", integer_min_max);
        ImGui::Text("p6::random::among({1, 3, 7}): %d", among);
        ImGui::Text("p6::random::point(ctx): %.3f %.3f", point_context.x, point_context.y);
        ImGui::Text("p6::random::point(p6::Canvas{100, 200}): %.3f %.3f", point_canvas.x, point_canvas.y);
        ImGui::Text("p6::random::point(): %.3f %.3f", point.x, point.y);
        ImGui::Text("p6::random::point(point_min, point_max): %.3f %.3f", point_min_max.x, point_min_max.y);
        ImGui::Text("p6::random::point(aspect_ratio): %.3f %.3f", point_aspect_ratio.x, point_aspect_ratio.y);
        ImGui::Text("p6::random::direction(): %.3f %.3f (length %.3f)", direction.x, direction.y, glm::length(direction));
        ImGui::Text("p6::random::angle(): %.3f radians, %.3f turns", angle.as_radians(), angle.as_turns());

        ImGui::End();
    };

    ctx.update = [&]() {
        ctx.background(p6::NamedColor::Black);
        for (glm::vec2 point : random_points_on_canvas)
        {
            ctx.circle(p6::Center{point}, p6::Radius{0.1f});
        }
    };

    ctx.start();
}