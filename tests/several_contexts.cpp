#include <exe_path/exe_path.h>
#include <p6/p6.h>
#include <filesystem>
#include <iostream>

/// All the contexts should behave the same
int main()
{
    const auto run_context = []() {
        auto ctx   = p6::Context{{1280, 720, "Several Contexts"}};
        ctx.update = [&]() {
            ctx.background(p6::NamedColor::BlueBell);
            ctx.circle(p6::Center{ctx.mouse()},
                       p6::Radius{0.2f});
        };
        ctx.start();
    };

    run_context();
    run_context();
    run_context();
}