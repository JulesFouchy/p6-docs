#include <p6/p6.h>
#include "imgui.h"

int main()
{
    auto ctx = p6::Context{{1280, 720, "Random"}};

    float min{-1.f};
    float max{2.f};

    float number{};
    float number_max{};
    float number_min_max{};

    const auto reroll = [&]() {
        number         = p6::random::number();
        number_max     = p6::random::number(max);
        number_min_max = p6::random::number(min, max);
    };

    reroll();

    ctx.imgui = [&]() {
        ImGui::Begin("Random");

        if (ImGui::Button("Reroll"))
            reroll();

        ImGui::DragFloat("min", &min);
        ImGui::DragFloat("max", &max);

        ImGui::NewLine();

        ImGui::Text("p6::random::number(): %f", number);
        ImGui::Text("p6::random::number(max): %f", number_max);
        ImGui::Text("p6::random::number(min, max): %f", number_min_max);

        ImGui::End();
    };

    ctx.start();
}