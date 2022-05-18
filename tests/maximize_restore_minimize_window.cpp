#include <p6/p6.h>

int main()
{
    auto ctx = p6::Context{{1280, 720, "Maximize, Restore and Minimize Window"}};
    ctx.minimize_window(); // Check that this doesn't cause a crash
    ctx.maximize_window();
    ctx.update = [&]() {
        ctx.background(ctx.window_is_maximized() ? p6::Color{1, 0, 0} : p6::Color{0, 0, 1});
    };
    ctx.key_pressed = [&](p6::Key key) {
        if (key.physical == GLFW_KEY_SPACE)
        {
            if (ctx.window_is_maximized())
            {
                ctx.restore_window();
            }
            else
            {
                ctx.maximize_window();
            }
        }
        if (key.physical == GLFW_KEY_ENTER)
        {
            ctx.minimize_window();
        }
    };
    ctx.start();
}