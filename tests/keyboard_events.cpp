#include <p6/p6.h>
#include <iostream>

int main()
{
    auto ctx  = p6::Context{};
    ctx.imgui = [&]() {
        ImGui::Begin("Window");
        ImGui::Text("GLFW_KEY_Q is%s held", ctx.key_is_held(GLFW_KEY_Q) ? "" : " NOT");
        ImGui::End();
    };

    ctx.key_pressed = [&](p6::Key const&) {
        std::cout << "Pressed\n";
    };

    ctx.key_released = [&](p6::Key const&) {
        std::cout << "Released\n";
    };

    ctx.key_repeated = [&](p6::Key const&) {
        std::cout << "Repeated\n";
    };

    ctx.start();
}