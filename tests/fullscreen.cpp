#include <p6/p6.h>

int main()
{
    auto ctx = p6::Context{{1280, 720, "Fullscreen"}};
    ctx.go_fullscreen();
    ctx.update = [&]() {
        ctx.background(p6::NamedColor::BlueBell);
        ctx.circle(p6::Center{},
                   p6::Radius{0.3f});
    };
    ctx.imgui = [&]() {
        ImGui::Begin("Window");
        ImGui::Text("Currently %s", ctx.window_is_fullscreen() ? "Fullscreen" : "Windowed");
        if (ImGui::Button("Go Fullscreen"))
        {
            ctx.go_fullscreen();
        }
        if (ImGui::Button("Escape Fullscreen"))
        {
            ctx.escape_fullscreen();
        }
        if (ImGui::Button("Toggle Fullscreen"))
        {
            ctx.toggle_fullscreen();
        }
        ImGui::NewLine();
        ImGui::Text("Framerate: %.1f fps", 1.f / ctx.delta_time());
        ImGui::Text("Size: %d %d", ctx.main_canvas_width(), ctx.main_canvas_height());
        ImGui::End();
    };
    ctx.start();
}