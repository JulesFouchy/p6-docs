#include <p6/p6.h>

int main()
{
    auto ctx    = p6::Context{{1280, 720, "Render to Canvas"}};
    auto canvas = p6::Canvas{ctx.framebuffer_size()}; // Create a canvas with the same size as the window's framebuffer
    ctx.render_to_canvas(canvas);
    ctx.background({0.3f, 0.5f, 0.9f, 0.5f});
    ctx.render_to_screen();
    ctx.framebuffer_resized = [&]() {
        canvas.resize(ctx.framebuffer_size()); // Make sure that the canvas still has the same size as the framebuffer even after it resizes
    };
    const auto brush = [&]() {
        ctx.use_stroke = false;
        ctx.fill       = {1.f, 0.7f, 0.2f, 0.3f};
        ctx.circle(p6::Center{ctx.mouse()}, p6::Radius{0.05f});
    };
    ctx.update = [&]() {
        ctx.background({1, ctx.ctrl() ? 1.f : 0.f, 0});
        ctx.image(canvas);
        if (ctx.shift()) {
            ctx.render_to_canvas(canvas);
            brush(); // We can do some permanent drawings on our canvas
            ctx.render_to_screen();
        }
        else {
            brush(); // While still being able to draw temporary things on the screen
        }
    };
    ctx.start();
}