#include <p6/p6.h>

int main()
{
    auto ctx    = p6::Context{{500, 720, "Render to Canvas"}};
    auto canvas = p6::Canvas{{2 * ctx.framebuffer_height(), // Create a canvas with a size relative to the the window's framebuffer size
                              2 * ctx.framebuffer_height()}};

    ctx.set_canvas_size_mode(p6::CanvasSizeMode_FixedAspectRatio{0.5f});
    ctx.framebuffer_resized = [&]() {
        canvas.resize({2 * ctx.framebuffer_height(), // Make sure that the canvas still has the same relative size after the framebuffer resizes
                       2 * ctx.framebuffer_height()});
    };

    ctx.render_to_canvas(canvas);
    ctx.background({0.3f, 0.5f, 0.9f, 0.5f});
    ctx.render_to_screen();

    const auto brush = [&](bool using_canvas) {
        ctx.use_stroke    = false;
        ctx.fill          = {1.f, 1.f, 1.f, 0.5f};
        auto       pos    = ctx.mouse();
        auto       radius = 0.05f;
        const auto ratio  = ctx.canvas_ratio(canvas);
        if (using_canvas)
        {
            pos *= ratio;
        }
        else
        {
            radius /= ratio;
        }
        ctx.circle(p6::Center{pos}, p6::Radius{radius});
    };
    ctx.update = [&]() {
        ctx.background({1, ctx.ctrl() ? 1.f : 0.f, 0});
        ctx.image(canvas, p6::Fit{});
        if (ctx.shift())
        {
            ctx.render_to_canvas(canvas);
            brush(true); // We can do some permanent drawings on our canvas
            ctx.render_to_screen();
        }
        brush(false); // While still being able to draw temporary things on the screen
    };
    ctx.start();
}