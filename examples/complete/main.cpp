#include <p6/p6.h>
#include <iostream>

int main()
{
    try {
        auto       ctx   = p6::Context{{1280, 720, "p6 Complete Example"}};
        const auto image = p6::load_image("img/1.png");
        ctx.background({0.5f, 0.3f, 0.8f});
        p6::Angle rotation = 0.0_turns;
        ctx.on_error       = [](std::string&& error_message) {
            throw std::runtime_error{error_message};
        };
        ctx.update = [&]() {
            ctx.stroke_weight = 0.5f;
            ctx.fill          = p6::Color{1.f, 0.f, 0.f};
            ctx.stroke        = p6::Color{0.f, 0.f, 0.f, 1.f};
            ctx.rectangle({glm::vec2{0.f},
                           glm::vec2{0.98f},
                           1.6_radians});
            ctx.image(image, {glm::vec2{0.f},
                              0.2f * glm::vec2{image.size().aspect_ratio(), 1.f}});

            ctx.stroke_weight = 0.02f;
            ctx.fill          = p6::Color{1.f, 1.f, 1.f, 0.5f};
            ctx.stroke        = p6::Color{0.2f, 0.95f, 0.95f, 1.f};
            ctx.ellipse(p6::Center{ctx.mouse()},
                        p6::Radii{0.8f, 0.4f},
                        p6::Rotation{rotation});
            ctx.circle(p6::Center{ctx.mouse()},
                       p6::Radius{0.5f});
            if (ctx.shift()) {
                std::cout << "SHIFT\n";
            }
            if (ctx.ctrl()) {
                std::cout << "CTRL\n";
            }
            if (ctx.alt()) {
                std::cout << "ALT\n";
            }
        };
        ctx.mouse_moved = [&](p6::MouseMove e) {
            std::cout << "MOVED\n";
            std::cout << e.position.x << " " << e.position.y << '\n';
            std::cout << e.delta.x << " " << e.delta.y << '\n';
        };
        ctx.mouse_dragged = [&](p6::MouseDrag) {
            std::cout << "DRAGGED\n";
        };
        ctx.mouse_pressed = [](p6::MouseButton) {
            std::cout << "PRESSED\n";
        };
        ctx.mouse_released = [](p6::MouseButton) {
            std::cout << "RELEASED\n";
        };
        ctx.mouse_scrolled = [&](p6::MouseScroll event) {
            rotation += event.dy * 0.025_turns;
        };
        ctx.key_pressed = [](p6::Key event) {
            std::cout << "KEY PRESSED\n";
            std::cout << event.logical << "\n";
        };
        ctx.key_released = [&](p6::Key event) {
            std::cout << "KEY RELEASED\n";
            std::cout << "'" << event.logical << "'"
                      << "\n";
            if (event.logical == " ") {
                ctx.stop();
            }
        };
        ctx.key_repeated = [](p6::Key) {
            // std::cout << "KEY REPEATED\n";
        };
        ctx.start();
    }
    catch (const std::exception& e) {
        std::cerr << e.what() << '\n';
    }
}