#include <p6/p6.h>

int main()
{
    auto ctx   = p6::Context{{1280, 720, "Line"}};
    ctx.update = [&]() {
        ctx.background(p6::NamedColor::BlueGray);
        // Draw a circle at the origin
        ctx.use_stroke = false;
        ctx.fill       = p6::NamedColor::Red;
        ctx.circle(p6::Center{}, p6::Radius{0.1f});
        // Draw a line between the origin and the mouse
        ctx.stroke        = p6::Color{1.f, 1.f, 1.f, 0.75f};
        ctx.stroke_weight = 0.1f;
        ctx.line(glm::vec2{0.f}, ctx.mouse());
    };
    ctx.start();
}