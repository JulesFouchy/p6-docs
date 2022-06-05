---
title: Custom Shaders
---

You can easily apply custom shaders in p6. A shader is a program that runs on the GPU and computes a color for each pixel of a rectangle. You can learn about shaders on the [Art of Code channel](https://youtu.be/u5HAYVHsasc?list=PLGmrMu-IwbguU_nY2egTFmlg691DN7uE5).

## Load and Draw a shader

:::info Important
For this example to work you must have a *res* folder **at the root of your project**.<br/>
**And you must declare your *res* folder in CMake: `p6_copy_folder(${PROJECT_NAME} res)`**
:::
[**Here is an example of a _CMakeLists.txt_**](https://github.com/JulesFouchy/p6-docs/blob/main/examples/complete/CMakeLists.txt).

```cpp
#include <p6/p6.h>

int main()
{
    auto             ctx       = p6::Context{};
    const p6::Shader my_shader = p6::load_shader("res/my_shader.frag");
    ctx.update              = [&]() {
        ctx.background({});
        ctx.rectangle_with_shader(my_shader, p6::FullScreen{});
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

uniform float _aspect_ratio;
uniform float _inverse_aspect_ratio;
uniform vec2  _size;
uniform float _window_aspect_ratio;
uniform float _window_inverse_aspect_ratio;

void main()
{
    vec2 uv = _uniform_uv;
    _frag_color = vec4(vec3(smoothstep(0.301, 0.3, length(uv))), 1.); // Draw a white disk
}
```

## Available information

### UV

You have different coordinate systems available to you:
- `_uniform_uv` is what you should use most of the time. It is centered around (0, 0) and the y-axis goes from -1 to 1. The x-axis will adapt to the aspect ratio of the rectangle (goes from *-_aspect_ratio* to *+_aspect_ratio*).
- `_raw_uv` goes from 0 to 1 on both axes, no matter the aspect ratio of the rectangle. (0, 0) is in the bottom-left corner.
- `_canvas_uv` is like *_uniform_uv* but the axes go from *-rectangle_radii* to *+rectangle_radii*. You will probably never have a use case for this one. It is used internally to draw strokes with an absolute size instead of them beeing proportional to the size of the rectangle.

### Shape of the rectangle

- `_aspect_ratio`: Aspect ratio of the rectangle (width / height).
- `_inverse_aspect_ratio`: Inverse aspect ratio of the rectangle (height / width).
- `_size`: Size of the rectangle.

### Window

- `_window_aspect_ratio`: Aspect ratio of the window (width / height).
- `_window_inverse_aspect_ratio`: Inverse aspect ratio of the window (height / width).

## Sending parameters to shaders

Parameters for shaders are called *uniforms*. You declare them in your shader like so:

```glsl title="res/my_shader.frag"
#version 330

uniform float my_parameter;
uniform vec3  another_parameter;
// . . .

void main() {
    _frag_color = vec4(another_parameter, 1.); // Use another_parameter like any other variable
}
```

And you send them to your shader with `set()`:

```cpp
ctx.update = [&]() {
    my_shader.set("my_parameter", 3.14f);
    my_shader.set("another_parameter", glm::vec3{0.1f, 0.4f, ctx.time()});
    // . . .
};
```