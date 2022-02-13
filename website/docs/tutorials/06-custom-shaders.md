---
title: Custom Shaders
---

You can easily apply custom shaders in p6. A shader is a program that runs on the GPU and computes a color for each pixel of a rectangle. You can learn about shaders on the [Art of Code channel](https://youtu.be/u5HAYVHsasc?list=PLGmrMu-IwbguU_nY2egTFmlg691DN7uE5).

## Load and Draw a shader

```cpp
#include <p6/p6.h>

int main()
{
    auto             ctx    = p6::Context{};
    const p6::Shader shader = p6::load_shader("res/my_shader.frag");
    ctx.update              = [&]() {
        ctx.background({});
        ctx.rectangle_with_shader(shader, p6::FullScreen{});
    };
    ctx.start();
}
```

```glsl title="res/my_shader.frag"
#version 330
out vec4 _frag_color;

in vec2 _uniform_uv;
in vec2 _raw_uv;
in vec2 _canvas_uv;

void main()
{
    vec2 uv = _uniform_uv;
    _frag_color = vec4(vec3(smoothstep(0.301, 0.3, length(uv))), 1.); // Draw a white disk
}
```

**NB:** For this example to work you must ask p6 to copy your *res* folder. To do so, add this line in your CMakeLists.txt: `p6_copy_folder(${PROJECT_NAME} res)`.

## UV

You have different coordinate systems available to you:
- `_uniform_uv` is what you should use most of the time. It is centered around (0, 0) and the y-axis goes from -1 to 1. The x-axis will adapt to the aspect ratio of the rectangle.
- `_raw_uv` goes from 0 to 1 on both axes, no matter the aspect ratio of the rectangle. (0, 0) is in the bottom-left corner.
- `_canvas_uv` is like *_uniform_uv* but the axes go from *-rectangle_radii* to *+rectangle_radii*. You will probably never have a use case for this one. It is used internally to draw strokes with an absolute size instead of them beeing proportional to the size of the rectangle.