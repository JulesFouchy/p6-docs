#include <p6/p6.h>

int main()
{
    auto ctx   = p6::Context{{1280, 720, "Canvas Size Mode"}};
    ctx.update = [&]() {
        ctx.background({0.7f, 0.3f, 0.5f, 0.f});
        ctx.circle(p6::Center{ctx.mouse()}, p6::Radius{0.3f});
        ctx.circle(p6::Center{1.f, 1.f}, p6::Radius{0.3f});
        ctx.circle(p6::Center{ctx.aspect_ratio(), -1.f}, p6::Radius{0.3f});
    };

    int   fixed_width{100};
    int   fixed_height{100};
    float relative_width{1.f};
    float relative_height{0.5f};
    float aspect_ratio = 1.f;

    ctx.imgui = [&]() {
        if (ImGui::Button("Same as Window"))
        {
            ctx.main_canvas_mode(p6::CanvasSizeMode_SameAsWindow{});
        }
        if (ImGui::Button("Fixed Aspect Ratio"))
        {
            ctx.main_canvas_mode(p6::CanvasSizeMode_FixedAspectRatio{aspect_ratio});
        }
        ImGui::SameLine();
        ImGui::SetNextItemWidth(100.f);
        ImGui::DragFloat("ratio", &aspect_ratio);
        if (ImGui::Button("Fixed Size"))
        {
            ctx.main_canvas_mode(p6::CanvasSizeMode_FixedSize{{fixed_width, fixed_height}});
        }
        ImGui::SameLine();
        ImGui::SetNextItemWidth(100.f);
        ImGui::DragInt("w", &fixed_width);
        ImGui::SameLine();
        ImGui::SetNextItemWidth(100.f);
        ImGui::DragInt("h", &fixed_height);
        if (ImGui::Button("Relative to Window"))
        {
            ctx.main_canvas_mode(p6::CanvasSizeMode_RelativeToWindow{relative_width, relative_height});
        }
        ImGui::SameLine();
        ImGui::SetNextItemWidth(100.f);
        ImGui::DragFloat("sw", &relative_width);
        ImGui::SameLine();
        ImGui::SetNextItemWidth(100.f);
        ImGui::DragFloat("sh", &relative_height);

        ImGui::NewLine();
        // ImGui::Text("Window Size: %d %d", ctx.framebuffer_width(), ctx.framebuffer_height());
        ImGui::Text("Main Canvas Size: %d %d", ctx.main_canvas_width(), ctx.main_canvas_height());
        ImGui::Text("Mouse position: %.2f %.2f", ctx.mouse().x, ctx.mouse().y);
    };
    ctx.start();
}