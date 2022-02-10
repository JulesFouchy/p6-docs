#include <p6/p6.h>
#include <iostream>
#include <string>

int main()
{
    auto ctx           = p6::Context{{1280, 720, "Window Resized"}};
    ctx.window_resized = [&]() {
        std::cout << std::to_string(ctx.window_width()) << ' ' << std::to_string(ctx.window_height()) << '\n';
    };
    ctx.start();
}