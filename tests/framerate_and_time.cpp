#include <p6/p6.h>
#include <cstdint>
#include <functional>

/**
 * Things to check:
 * - After a pause there is no weird delta_time() value: neither 0 nor a huge peak
 * - After changing framerate mode from capped to synced there is no drop in delta_time() value
 * - framerate_capped_at() works
 */

enum class FramerateMode {
    Synced,
    AsFastAsPossible,
    Capped,
};

enum class TimeMode {
    Realtime,
    FixedTimesteps,
};

enum class Play {
    Play,
    Pause,
};

struct Ball {
    p6::Color color;
    float     y;
    float     x   = 0.f;
    float     dir = 1.f;

    void draw(p6::Context& ctx)
    {
        ctx.use_stroke = false;
        ctx.fill       = color;
        ctx.square(p6::Center{x, y}, p6::Radius{0.1f});
    }

    void update(std::function<float(float, float)> fun)
    {
        x = fun(x, dir);
        if (std::abs(x) > 0.95f) {
            dir *= -1.f;
            x = 0.94f * x / std::abs(x);
        }
    }

    void reset()
    {
        x   = 0.f;
        dir = 1.f;
    }
};

struct Frame {
    float duration;
};

class RecentFrames {
public:
    void imgui() const
    {
        std::vector<float> durations{};
        for (size_t i = 0; i < frames.size(); ++i) {
            const auto& frame = frames[(i + next_idx) % frames.size()];
            if (frame) {
                durations.push_back(frame->duration);
            }
        }
        ImGui::PlotLines("Delta Time", durations.data(), (int)durations.size(), 0, nullptr, 0.f, 20.f, {0, 100.f});
    }

    void push(Frame frame)
    {
        frames[next_idx] = frame;
        next_idx         = (next_idx + 1) % frames.size();
    }

private:
    size_t                            next_idx{0};
    std::vector<std::optional<Frame>> frames{150, std::nullopt};
};

int main()
{
    auto ctx = p6::Context{{1280, 720, "p6 Framerate"}};
    ctx.maximize_window();
    float capped_framerate     = 60.f;
    float fixedsteps_framerate = 60.f;
    auto  framerate_mode       = FramerateMode::Synced;
    ctx.framerate_synced_with_monitor();
    auto time_mode = TimeMode::Realtime;
    ctx.time_perceived_as_realtime();
    auto should_reset_balls = true;

    Ball ball_framerate_based{p6::NamedColor::Red, 0.f};
    Ball ball_dt_based{p6::NamedColor::GreenYellow, -0.2f};

    const auto reset_balls = [&]() {
        if (should_reset_balls) {
            ball_framerate_based.reset();
            ball_dt_based.reset();
        }
    };

    const auto choose_framerate_mode = [&]() {
        if (ImGui::RadioButton("framerate_synced_with_monitor()", (int*)&framerate_mode, (int)FramerateMode::Synced)) {
            ctx.framerate_synced_with_monitor();
            reset_balls();
        }
        if (ImGui::RadioButton("framerate_as_high_as_possible()", (int*)&framerate_mode, (int)FramerateMode::AsFastAsPossible)) {
            ctx.framerate_as_high_as_possible();
            reset_balls();
        }
        if (ImGui::RadioButton("framerate_capped_at()", (int*)&framerate_mode, (int)FramerateMode::Capped)) {
            ctx.framerate_capped_at(capped_framerate);
            reset_balls();
        }
        ImGui::SameLine();
        ImGui::SetNextItemWidth(50.f);
        ImGui::PushID(30);
        if (ImGui::SliderFloat("fps", &capped_framerate, 1.f, 150.f)) {
            ctx.framerate_capped_at(capped_framerate);
            framerate_mode = FramerateMode::Capped;
            reset_balls();
        };
        ImGui::PopID();
    };

    const auto choose_time_mode = [&]() {
        if (ImGui::RadioButton("time_realtime()", (int*)&time_mode, (int)TimeMode::Realtime)) {
            ctx.time_perceived_as_realtime();
            reset_balls();
        }
        if (ImGui::RadioButton("time_fixedsteps()", (int*)&time_mode, (int)TimeMode::FixedTimesteps)) {
            ctx.time_perceived_as_constant_delta_time(fixedsteps_framerate);
            reset_balls();
        }
        ImGui::SameLine();
        ImGui::SetNextItemWidth(50.f);
        if (ImGui::SliderFloat("fps", &fixedsteps_framerate, 1.f, 150.f)) {
            ctx.time_perceived_as_constant_delta_time(fixedsteps_framerate);
            time_mode = TimeMode::FixedTimesteps;
            reset_balls();
        };
    };

    const auto imgui_play_pause = [&]() {
        if (ImGui::Button(ctx.is_paused() ? "play" : "pause", {50.f, 0.f})) {
            ctx.is_paused() ? ctx.resume() : ctx.pause();
        }
    };

    ctx.key_pressed = [&](auto e) {
        if (e.logical == " ") {
            ctx.is_paused() ? ctx.resume() : ctx.pause();
        }
    };

    RecentFrames recent_frames{};

    ctx.imgui = [&]() {
        ImGui::Begin("Framerate and Time");
        {
            ImGui::Text("Time: %.1f s", ctx.time());
            ImGui::Text("Delta Time: %.1f ms", 1000.f * ctx.delta_time());
            ImGui::Text("Framerate: %.1f fps", 1.f / ctx.delta_time());
        }
        {
            ImGui::BeginGroup();
            choose_framerate_mode();
            ImGui::EndGroup();
        }
        ImGui::SameLine();
        {
            ImGui::BeginGroup();
            choose_time_mode();
            ImGui::EndGroup();
        }
        ImGui::SameLine();
        {
            ImGui::BeginGroup();
            imgui_play_pause();
            ImGui::EndGroup();
        }
        ImGui::SameLine();
        {
            recent_frames.imgui();
        }
        ImGui::NewLine();
        {
            ImGui::Checkbox("Reset Balls When Changing Mode", &should_reset_balls);
        }
        ImGui::End();
    };

    ctx.update = [&]() {
        recent_frames.push({1000.f * ctx.delta_time()});
        ctx.background(p6::NamedColor::DeepSkyBlue);
        ball_framerate_based.draw(ctx);
        ball_dt_based.draw(ctx);
        ball_framerate_based.update([](float x, float dir) {
            return x + 1.f / 60.f * dir;
        });
        ball_dt_based.update([&](float x, float dir) {
            return x + ctx.delta_time() * dir;
        });
    };
    ctx.start();
}