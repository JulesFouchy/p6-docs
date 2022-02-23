#include <p6/p6.h>

int main()
{
    auto ctx   = p6::Context{{1280, 720, "Color"}};
    ctx.update = [&]() {
        ctx.background(p6::NamedColor::Magenta);
        ctx.fill       = p6::hex(0xF0F8FF);
        ctx.use_stroke = false;
        ctx.circle(p6::Center{ctx.mouse()}, p6::Radius{0.3f});
    };
    ctx.start();
}