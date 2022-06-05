#include <p6/p6.h>
#include <iostream>
#include <string>

int main()
{
    auto ctx                = p6::Context{{1280, 720, "Main Canvas Resized"}};
    ctx.main_canvas_resized = [&]() {
        std::cout << std::to_string(ctx.main_canvas_width()) << ' ' << std::to_string(ctx.main_canvas_height()) << '\n';
    };
    ctx.start();
}