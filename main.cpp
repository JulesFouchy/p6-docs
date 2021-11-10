#include <p6.h>
#include <iostream>

int main()
{
    auto p6 = p6::Context{{1280, 720, "p6 example"}};
    p6.set_time_mode_fixedstep();
    p6.update = [&]() {
        p6.background({0.5f, 0.3f, 0.8f});
        std::cout << 1.f / p6.delta_time() << '\n';
    };
    p6.run();
    return 0;
}