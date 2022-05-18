#include <p6/p6.h>

int main()
{
    auto       ctx               = p6::Context{{1280, 720, "Shader"}};
    const auto shader_raw_uv     = p6::load_shader("res/shader-raw-uv.frag");
    const auto shader_uniform_uv = p6::load_shader("res/shader-uniform-uv.frag");
    const auto shader_canvas_uv  = p6::load_shader("res/shader-canvas-uv.frag");
    auto       radius            = 1.f;
    auto       rotation          = 0_turn;
    ctx.mouse_scrolled           = [&](auto e) {
        if (ctx.alt())
        {
            rotation += e.dy * 0.05_turn;
        }
        else
        {
            radius += e.dy * 0.1f;
        }
    };
    ctx.update = [&]() {
        ctx.background({});
        const auto choose_shader = [&]() -> const p6::Shader& {
            return ctx.shift() ? shader_raw_uv : ctx.alt() ? shader_canvas_uv
                                                           : shader_uniform_uv;
        };
        choose_shader().set("_blue", 0.5f);
        if (ctx.ctrl())
        {
            ctx.square_with_shader(choose_shader(),
                                   p6::Center{},
                                   p6::Radius{radius},
                                   rotation);
        }
        else
        {
            ctx.rectangle_with_shader(choose_shader(),
                                      p6::Center{},
                                      p6::Radii{ctx.aspect_ratio() * radius, radius},
                                      rotation);
        }
    };
    ctx.start();
}