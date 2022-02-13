#include <p6/p6.h>

int main()
{
    auto ctx   = p6::Context{{1280, 720, "Render to Image"}};
    auto image = p6::Image{ctx.window_size()}; // Create an empty image with the same size as the window
    ctx.render_to_image(image);
    ctx.background({0.3f, 0.5f, 0.9f, 0.5f});
    ctx.render_to_screen();
    ctx.window_resized = [&]() {
        image.resize(ctx.window_size()); // Make sure that the image still has the same size as the window even after it resizes
    };
    const auto brush = [&]() {
        ctx.use_stroke = false;
        ctx.fill       = {1.f, 0.7f, 0.2f, 0.3f};
        ctx.circle(p6::Center{ctx.mouse()}, p6::Radius{0.3f});
    };
    ctx.update = [&]() {
        ctx.background({1, ctx.ctrl() ? 1.f : 0.f, 0});
        ctx.image(image);
        if (ctx.shift()) {
            ctx.render_to_image(image);
            brush(); // We can do some permanent drawings on our image
            ctx.render_to_screen();
        }
        else {
            brush(); // While still being able to draw temporary things on the screen
        }
    };
    ctx.start();
}