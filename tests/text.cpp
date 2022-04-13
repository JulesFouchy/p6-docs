#include <exe_path/exe_path.h>
#include <p6/p6.h>
#include <filesystem>
#include <iostream>

int main()
{
    auto ctx   = p6::Context{{1280, 720, "Text"}};
    ctx.update = [&]() {
        ctx.background(p6::NamedColor::PinkPearl);
        ctx.fill = p6::NamedColor::OrangePeel;
        ctx.circle(p6::Center{ctx.mouse()}, p6::Radius{0.3f});
        ctx.text_size = 0.1f;
        ctx.fill      = {1.f, 0.f, 0.f, 1.f};
        ctx.text(u"abcdefghijklmnop", p6::Center{0.f, 2.f * ctx.text_size});
        ctx.fill = {1.f, 0.f, 0.f, 0.5f};
        ctx.text(u"qrstuvwxyz", p6::Center{0.f, 0.f * ctx.text_size});
        ctx.text(u"12345 6789", p6::Center{0.f, -2.f * ctx.text_size});
        ctx.text(u"!\\\"#$%&\'", p6::Center{0.f, -4.f * ctx.text_size});
        ctx.text(u",()*+-./:;", p6::Center{0.f, -6.f * ctx.text_size});
        ctx.text(u"<=>?@[]^_`{|}~", p6::Center{0.f, -8.f * ctx.text_size});
    };
    ctx.start();
}