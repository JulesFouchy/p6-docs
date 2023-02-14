#include <p6/p6.h>
#include <iostream>

int main()
{
    auto ctx   = p6::Context{};
    ctx.update = [&]() {
        ctx.background({});
        ImGui::Begin("Window");
        ImGui::Text("Left: %s", ctx.mouse_button_is_pressed(p6::Button::Left) ? "PRESSED" : "RELEASED");
        ImGui::Text("Right: %s", ctx.mouse_button_is_pressed(p6::Button::Right) ? "PRESSED" : "RELEASED");
        ImGui::Text("Middle: %s", ctx.mouse_button_is_pressed(p6::Button::Middle) ? "PRESSED" : "RELEASED");
        ImGui::End();
    };
    ctx.mouse_pressed = [](p6::MouseButton button) {
        std::cout << button.position.x << " " << button.position.y << "\n"
                  << (button.button == p6::Button::Left  ? "Left" :
                      button.button == p6::Button::Right ? "Right"
                                                         : "Middle")
                  << "\n";
    };
    ctx.start();
}