#include <p6/p6.h>

int main()
{
    auto ctx               = p6::Context{{1280, 720, "Shader"}};
    auto shader_raw_uv     = p6::load_shader("res/shader-raw-uv.frag");
    auto shader_uniform_uv = p6::load_shader("res/shader-uniform-uv.frag");
    ctx.update             = [&]() {
        ctx.background({});
        const bool use_raw_uvs = ctx.shift() || ctx.ctrl() || ctx.alt();
        ctx.rectangle_with_shader(use_raw_uvs ? shader_raw_uv : shader_uniform_uv,
                                  p6::FullScreen{});
    };
    ctx.start();
}