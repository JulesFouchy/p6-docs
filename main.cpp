#include <p6/p6.h>
#include <glm/gtc/constants.hpp>
#include <iostream>

int main()
{
    try {
        auto  p6       = p6::Context{{1280, 720, "p6 example"}};
        float rotation = 0.f;
        // p6.set_time_mode_fixedstep();
        p6.on_error = [](std::string&& error_message) {
            throw std::runtime_error{error_message};
        };
        p6.update = [&]() {
            p6.background({0.5f, 0.3f, 0.8f});
            p6.stroke_weight = 0.5f;
            p6.fill          = p6::Color{1.f, 0.f, 0.f};
            p6.rectangle({glm::vec2{0.f},
                          glm::vec2{0.98f},
                          1.6f});
            p6.stroke_weight = 0.01f;
            p6.fill          = p6::Color{1.f, 1.f, 1.f, 0.5f};
            p6.rectangle({p6.mouse(),
                          {0.8f, 0.4f},
                          rotation});
            // std::cout << 1.f / p6.delta_time() << '\n';
            if (p6.shift()) {
                std::cout << "SHIFT\n";
            }
            if (p6.ctrl()) {
                std::cout << "CTRL\n";
            }
            if (p6.alt()) {
                std::cout << "ALT\n";
            }
        };
        p6.mouse_moved = [&](p6::MouseMove) {
            std::cout << "MOVED\n";
            // std::cout << event.position.x << " " << event.position.y << '\n';
            // std::cout << event.delta.x << " " << event.delta.y << '\n'
            //           << "*********\n";
        };
        p6.mouse_dragged = [&](p6::MouseDrag) {
            std::cout << "DRAGGED\n";
        };
        p6.mouse_pressed = [](p6::MouseButton) {
            std::cout << "PRESSED\n";
        };
        p6.mouse_released = [](p6::MouseButton) {
            std::cout << "RELEASED\n";
        };
        p6.mouse_scrolled = [&](p6::MouseScroll event) {
            rotation += event.dy * 0.25f * 0.1f * glm::pi<float>() * 2.f;
        };
        p6.key_pressed = [](p6::KeyEvent event) {
            std::cout << "KEY PRESSED\n";
            std::cout << event.logical_key << "\n";
        };
        p6.key_released = [](p6::KeyEvent event) {
            std::cout << "KEY RELEASED\n";
            std::cout << "'" << event.logical_key << "'"
                      << "\n";
            if (event.logical_key == " ") {
                std::cout << "SPACE\n";
            }
        };
        p6.key_repeated = [](p6::KeyEvent) {
            // std::cout << "KEY REPEATED\n";
        };
        p6.run();
    }
    catch (const std::exception& e) {
        std::cerr << e.what() << '\n';
    }
    return 0;
}