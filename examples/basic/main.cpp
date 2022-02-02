#include <p6/p6.h>
#include <iostream>

int main()
{
    try {
        auto ctx   = p6::Context{{1280, 720, "p6 Basic Example"}};
        ctx.update = [&]() {
            ctx.background({0.5f, 0.3f, 0.8f});
            ctx.circle(p6::Center{ctx.mouse()},
                       p6::Radius{0.3f});
        };
        ctx.start();
    }
    catch (const std::exception& e) {
        std::cerr << e.what() << '\n';
    }
}