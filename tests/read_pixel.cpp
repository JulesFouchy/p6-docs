#include <p6/p6.h>
#include <iostream>
#include <string>

int main()
{
    auto ctx   = p6::Context{{1280, 720, "Read Pixel"}};
    ctx.update = [&]() {
        ctx.background(ctx.shift() ? p6::Color{1, 0, 0} : p6::Color{0, 0, 1});
        ctx.circle(p6::Center{-0.5, -0.5f},
                   p6::Radius{0.2f});
    };
    ctx.mouse_pressed = [&](p6::MouseButton button) {
        const auto color = ctx.read_pixel(button.position);
        std::cout << std::to_string(color.r()) << " "
                  << std::to_string(color.g()) << " "
                  << std::to_string(color.b()) << " "
                  << std::to_string(color.a()) << " "
                  << "\n";
    };
    ctx.start();
}