#include <p6/p6.h>
#include <glm/gtc/constants.hpp>
#include <iostream>

int main()
{
    try {
        auto       p6    = p6::Context{{1280, 720, "p6 example"}};
        const auto image = p6::load_image("img/1.png");
        p6.background({0.5f, 0.3f, 0.8f});
        // p6.maximize_window();
        p6::Angle rotation = 0.0_turns;
        // p6.set_time_mode_fixedstep();
        p6.on_error = [](std::string&& error_message) {
            throw std::runtime_error{error_message};
        };
        p6.update = [&]() {
            // p6.background({0.5f, 0.3f, 0.8f});
            p6.stroke_weight = 0.5f;
            p6.fill          = p6::Color{1.f, 0.f, 0.f};
            p6.stroke        = p6::Color{0.f, 0.f, 0.f, 1.f};
            p6.rectangle({glm::vec2{0.f},
                          glm::vec2{0.98f},
                          1.6_radians});
            p6.image(image, {glm::vec2{0.f},
                             0.2f * glm::vec2{image.size().aspect_ratio(), 1.f}});
            // std::cout << 1.f / p6.delta_time() << '\n';
            // if (p6.mouse_is_in_window()) {
            //     std::cout << p6.time() << "\n";
            // }

            p6.stroke_weight = 0.02f;
            p6.fill          = p6::Color{1.f, 1.f, 1.f, 0.5f};
            p6.stroke        = p6::Color{0.2f, 0.95f, 0.95f, 1.f};
            p6.ellipse(p6::Center{p6.mouse()},
                       p6::Radii{0.8f, 0.4f},
                       p6::Rotation{rotation});
            p6.circle(p6::Center{p6.mouse()},
                      p6::Radius{0.5f});
            // p6.rectangle({p6.mouse() + glm::vec2(0.f, 0.8f),
            //               {0.8f, 0.4f},
            //               rotation});
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
            // std::cout << "MOVED\n";

            // std::cout << e.position.x << " " << e.position.y << '\n';
            // std::cout << e.delta.x << " " << e.delta.y << '\n';
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
            rotation += event.dy * 0.025_turns;
        };
        p6.key_pressed = [](p6::KeyEvent event) {
            std::cout << "KEY PRESSED\n";
            std::cout << event.logical_key << "\n";
        };
        p6.key_released = [&](p6::KeyEvent event) {
            std::cout << "KEY RELEASED\n";
            std::cout << "'" << event.logical_key << "'"
                      << "\n";
            if (event.logical_key == " ") {
                p6.stop();
            }
        };
        p6.key_repeated = [](p6::KeyEvent) {
            // std::cout << "KEY REPEATED\n";
        };
        p6.start();
    }
    catch (const std::exception& e) {
        std::cerr << e.what() << '\n';
    }
    return 0;
}