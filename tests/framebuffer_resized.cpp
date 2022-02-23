#include <p6/p6.h>
#include <iostream>
#include <string>

int main()
{
    auto ctx                = p6::Context{{1280, 720, "Framebuffer Resized"}};
    ctx.framebuffer_resized = [&]() {
        std::cout << std::to_string(ctx.framebuffer_width()) << ' ' << std::to_string(ctx.framebuffer_height()) << '\n';
    };
    ctx.start();
}