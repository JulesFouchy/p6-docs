#include <p6/p6.h>

int main()
{
    auto ctx    = p6::Context{{1280, 720, "Render to Canvas"}};
    auto canvas = p6::Canvas{{2 * ctx.framebuffer_height(), // Create a canvas with a size relative to the the window's framebuffer size
                              2 * ctx.framebuffer_height()}};

    ctx.framebuffer_resized = [&]() {
        canvas.resize({2 * ctx.framebuffer_height(), // Make sure that the canvas still has the same relative size after the framebuffer resizes
                       2 * ctx.framebuffer_height()});
    };

    ctx.render_to_canvas(canvas);
    ctx.background({0.3f, 0.5f, 0.9f, 0.5f});
    ctx.render_to_screen();

    const auto brush = [&]() {
        ctx.use_stroke = false;
        ctx.fill       = {1.f, 1.f, 1.f, 0.5f};
        ctx.circle(p6::Center{ctx.mouse()}, p6::Radius{0.05f});
    };
    ctx.update = [&]() {
        ctx.background({1, ctx.ctrl() ? 1.f : 0.f, 0});
        ctx.image(canvas);
        if (ctx.shift())
        {
            ctx.render_to_canvas(canvas);
            brush(); // We can do some permanent drawings on our canvas
            ctx.render_to_screen();
        }
        brush(); // While still being able to draw temporary things on the screen
    };
    ctx.start();
}