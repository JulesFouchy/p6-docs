#include <p6/p6.h>

int main()
{
    auto ctx          = p6::Context{{1280, 720, "Fill and Stroke"}};
    ctx.fill          = {1, 1, 1};
    ctx.stroke        = {0, 0, 0};
    ctx.stroke_weight = 0.1f;
    ctx.background({0, 1, 1});

    ctx.use_fill   = true;
    ctx.use_stroke = true;
    ctx.circle(p6::Center{-0.5f, 0.5f}, p6::Radius{0.5f});
    ctx.use_fill   = false;
    ctx.use_stroke = true;
    ctx.circle(p6::Center{0.5f, 0.5f}, p6::Radius{0.5f});
    ctx.use_fill   = true;
    ctx.use_stroke = false;
    ctx.circle(p6::Center{-0.5f, -0.5f}, p6::Radius{0.5f});
    ctx.use_fill   = false;
    ctx.use_stroke = false;
    ctx.circle(p6::Center{0.5f, -0.5f}, p6::Radius{0.5f});

    ctx.start();
}