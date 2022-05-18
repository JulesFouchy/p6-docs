#include <p6/p6.h>
#include <iostream>

int main()
{
    auto       ctx      = p6::Context{{1280, 720, "Load Image"}};
    const auto image    = p6::load_image("res/p5.png");
    auto       rotation = 0.011_turn;
    ctx.imgui           = []() {
        static std::string error_message{};
        ImGui::Begin("Window");
        if (ImGui::Button("Try to load from a file that doesn't exist")) {
            try {
                (void)p6::load_image("this_file_doesnt_exist.png");
            }
            catch (std::exception& e) {
                error_message = e.what();
            }
        }
        ImGui::Text("%s", error_message.c_str());
        ImGui::End();
    };
    ctx.mouse_scrolled = [&](p6::MouseScroll e) {
        rotation += e.dy * 0.025_turn;
    };
    ctx.update = [&]() {
        ctx.background({0.3f, 0.8f, 0.7f});
        if (ctx.shift()) {
            ctx.image(image, p6::FitX{});
        }
        else if (ctx.ctrl()) {
            ctx.image(image, p6::FitY{});
        }
        else if (ctx.alt()) {
            ctx.image(image, p6::FullScreen{});
        }
        else {
            ctx.image(image, p6::TopLeftCorner{ctx.mouse()}, p6::RadiusY{0.3f}, p6::Rotation{rotation});
            ctx.image(image, p6::TopRightCorner{ctx.mouse()}, p6::RadiusY{0.3f}, p6::Rotation{rotation});
            ctx.image(image, p6::BottomLeftCorner{ctx.mouse()}, p6::RadiusY{0.3f}, p6::Rotation{rotation});
            ctx.image(image, p6::BottomRightCorner{ctx.mouse()}, p6::RadiusY{0.3f}, p6::Rotation{rotation});
        }
    };
    ctx.start();
}