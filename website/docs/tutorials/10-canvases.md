---
title: Canvases
---

## Drawing on a Canvas

You can draw onto a canvas just as you would with the screen. All drawings between the calls to `ctx.render_to_canvas(canvas)` and `ctx.render_to_screen()` will apply to the canvas, not to the screen:

```cpp
#include <p6/p6.h>

int main()
{
    auto ctx    = p6::Context{};
    auto canvas = p6::Canvas{ctx.framebuffer_size()}; // Create an empty canvas with the same size as the window's framebuffer
    ctx.framebuffer_resized = [&]() {
        canvas.resize(ctx.framebuffer_size()); // Make sure that the canvas still has the same size as the window's framebuffer even after it resizes
    };
    ctx.render_to_canvas(canvas);
        ctx.background({0.3f, 0.5f, 0.9f, 0.5f}); // background() applies to canvas, not to the screen
        ctx.circle();                             // circle() applies to canvas, not to the screen
    ctx.render_to_screen();
    ctx.update = [&]() {
        ctx.background({});
        ctx.image(canvas);
    };
    ctx.start();
}
```

For a more detailed example, check [this one out](https://github.com/JulesFouchy/p6-docs/blob/main/tests/render_to_canvas.cpp).

## Displaying a canvas

You can show a canvas with the `image()` function:

```cpp
ctx.image(canvas); // The canvas will fill the window as best it can, while still preserving its aspect ratio
```

:::tip
To convert coordinates and sizes from the window to the canvas fitted in that window, you can multiply or divide by [`ctx.canvas_ratio(canvas)`](/reference/canvas#canvas_ratio). 
:::

You can also specify the size and position of the canvas:

```cpp
ctx.image(canvas, p6::Center{},
          p6::RadiusY{0.2f}); // Give it a height of 0.4 The width will be deduced based on the aspect_ratio of the canvas
```

Since a canvas has an aspect ratio that we want to try and preserve it is recommended to use either `p6::RadiusX`, `p6::RadiusY`, `p6::FitX` or `p6::FitY` to describe the size of the canvas. If you are ok with getting a distorted image then you can use `p6::Radii` to specify both the width and the height, or `p6::FullScreen`.