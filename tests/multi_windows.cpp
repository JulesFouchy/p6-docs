#include <p6/p6.h>
#include <cmath>
#include <thread>

int main()
{
    p6::Context main_ctx{{1280, 720, "Main"}};
    p6::Context second_ctx{{1280, 720, "Second"}};

    float main_x{0.f};
    float second_x{0.f};
    main_ctx.update = [&]() {
        main_x += main_ctx.delta_time();
        if (main_x > main_ctx.aspect_ratio())
            main_x = -main_ctx.aspect_ratio();
        main_ctx.background(p6::NamedColor::BlueBell);
        main_ctx.circle(p6::Center{main_x, 0.f});
    };
    second_ctx.update = [&]() {
        second_x += 2.f * second_ctx.delta_time();
        if (second_x > second_ctx.aspect_ratio())
            second_x = -second_ctx.aspect_ratio();
        second_ctx.background(p6::NamedColor::PinkPearl);
        second_ctx.circle(p6::Center{second_x, 0.f});
    };

    std::thread thread{[&]() {
        second_ctx.start();
    }};
    main_ctx.start();

    second_ctx.stop();
    if (thread.joinable())
        thread.join();
}