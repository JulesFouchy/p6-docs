#include <p6.h>
#include <iostream>

int main()
{
    auto p6 = p6::Context{{1280, 720, "p6 example"}};
    // p6.set_time_mode_fixedstep();
    p6.update = [&]() {
        p6.background({0.5f, 0.3f, 0.8f});
        p6.rect();
        // std::cout << 1.f / p6.delta_time() << '\n';
    };
    p6.mouse_moved = [&](p6::MouseMove event) {
        std::cout << "MOVED\n";
        // std::cout << event.position.x << " " << event.position.y << '\n';
        // std::cout << event.delta.x << " " << event.delta.y << '\n'
        //           << "*********\n";
    };
    p6.mouse_dragged = [&](p6::MouseDrag event) {
        std::cout << "DRAGGED\n";
    };
    p6.mouse_pressed = [](p6::MouseButton event) {
        std::cout << "PRESSED\n";
    };
    p6.mouse_released = [](p6::MouseButton event) {
        std::cout << "RELEASED\n";
    };
    p6.mouse_scrolled = [](p6::MouseScroll event) {
        std::cout << event.dy << "\n";
    };
    p6.run();
    return 0;
}