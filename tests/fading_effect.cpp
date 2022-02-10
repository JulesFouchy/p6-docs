#include <p6/p6.h>

// We want to make sure that no artifacts are left. This is fixed by using 16 bits per channel in our RenderTarget's Texture.
int main()
{
    auto ctx   = p6::Context{{1280, 720, "Fading Effect"}};
    ctx.update = [&]() {
        // Clear the background with a fading effect
        ctx.use_stroke = false;
        ctx.fill       = {0.2f, 0.1f, 0.3f, 0.1f};
        ctx.rectangle(p6::FullScreen{});
        // Draw something
        ctx.fill = {1.f, 0.7f, 0.2f};
        ctx.circle(p6::Center{ctx.mouse()}, p6::Radius{0.3f});
    };
    ctx.start();
}