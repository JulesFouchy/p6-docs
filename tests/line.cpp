#include <p6/p6.h>

int main()
{
    auto ctx   = p6::Context{{1280, 720, "Line"}};
    ctx.update = [&]() {
        ctx.background(p6::NamedColor::BlueGray);
        {
            // Draw a circle at the origin
            ctx.use_stroke = false;
            ctx.fill       = p6::NamedColor::Red;
            ctx.circle(p6::Center{}, p6::Radius{0.1f});
            // Draw a line between the origin and the mouse
            ctx.stroke        = p6::Color{1.f, 1.f, 1.f, 0.75f};
            ctx.stroke_weight = 0.1f;
            ctx.line(glm::vec2{0.f}, ctx.mouse());
        }
        { // Should make one single connected line out of all these small lines:
            ctx.stroke_weight = 0.01f;
            ctx.stroke        = p6::Color{1.f, 1.f, 1.f};
            glm::vec2 start{0.f};
            glm::vec2 end{0.f};
            for (int i = 0; i < 10; i++) {
                start = end;
                end   = glm::vec2(0.1f * static_cast<float>(i));
                ctx.line(start, end);
            }
        }
    };
    ctx.start();
}