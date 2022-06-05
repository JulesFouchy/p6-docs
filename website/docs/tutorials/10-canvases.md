---
title: Canvases
---

## Changing the aspect ratio or size of the main canvas

The drawing area of p6, known as the *main canvas*, doesn't have to take up the whole window, nor does it have to be limited to the current resolution of the window. You can control how its size behaves with `ctx.set_main_canvas_mode(...)`.

### SameAsWindow

This is the default mode. The main canvas will have the same size as the window.<br/>
It is great when you don't care about the aspect ratio or the number of pixels.

```cpp
ctx.set_main_canvas_mode(p6::CanvasSizeMode_SameAsWindow{});
```

### FixedAspectRatio

The main canvas will have the given aspect ratio, and a size just big enough to perfectly fit into the window.<br/>
It is great when you want your artwork to have a specific aspect ratio, like a 16/9 or a square canvas for example, but you don't care about the exact number of pixels because you are not saving it as an image but instead viewing it live as a running program that needs to adapt to whatever the size of the window is.

```cpp
ctx.set_main_canvas_mode(p6::CanvasSizeMode_FixedAspectRatio{16.f / 9.f});
```

### FixedSize

The main canvas will have the given size in pixels, independently of what the size of the window is.<br/>
It is great when you want your artwork to have a specific size because you are gonna save it as an image and want to control its resolution.

Note that you will still see the main canvas fit in the window because it is scaled down for display. But fear not, all the drawings are done at the size you requested. If you save the main canvas as an image (using `ctx.save_image()`) it will have the desired size.

```cpp
ctx.set_main_canvas_mode(p6::CanvasSizeMode_FixedSize{{3840, 2160}});
```

### RelativeToWindow

The main canvas will have a size that is a multiple of the window's size.<br/>
It can be useful if you want to reduce aliasing or noise by rendering at a bigger resolution.

```cpp
ctx.set_main_canvas_mode(p6::CanvasSizeMode_RelativeToWindow{2.f, 2.f});
```

## Drawing on a custom Canvas

You are not constrained to the main canvas. You can also create your own canvases and draw on them. It can allow you to achieve some advanced and pretty cool effects.<br/>

All drawings between the calls to `ctx.render_to_canvas(canvas)` and `ctx.render_to_main_canvas()` will apply to your custom canvas instead of the main canvas:

```cpp
#include <p6/p6.h>

int main()
{
    auto ctx    = p6::Context{};
    auto canvas = p6::Canvas{ctx.main_canvas_size()}; // Create an empty canvas with the same size as the window
    ctx.main_canvas_resized = [&]() {
        canvas.resize(ctx.main_canvas_size()); // Make sure that the canvas still has the same size as the window even after it resizes
    };
    ctx.update = [&]() {
        ctx.background({}); // Clear the window
        ctx.image(canvas);  // Show the canvas
        if (ctx.shift())    // Do some permanent rendering on the canvas
        {
            ctx.render_to_canvas(canvas);
            ctx.circle(p6::Center{ctx.mouse() * ctx.canvas_ratio(canvas)}, // circle() applies to the custom canvas, not to the window's main canvas
                       p6::Radius{0.3f});
            ctx.render_to_main_canvas();
        }
        ctx.circle(p6::Center{ctx.mouse()}, // Do some temporary rendering on the main canvas
                   p6::Radius{0.3f / ctx.canvas_ratio(canvas)});
    };
    ctx.start();
}
```

For a more detailed example, check [this one out](https://github.com/JulesFouchy/p6-docs/blob/main/tests/render_to_canvas.cpp).

## Displaying a custom canvas

Since custom canvases are not displayed in the window automatically, you need to draw them on the main canvas using `ctx.image()`:

```cpp
ctx.image(canvas); // The canvas will fill the window as best it can, while still preserving its aspect ratio
```

:::tip
To convert coordinates and sizes from the window to a custom canvas fitted in that window, you can multiply or divide by [`ctx.canvas_ratio(canvas)`](/reference/canvas#canvas_ratio). This can help you make it feel like your custom canvas is really part of the window.<br/>
(NB: it will only have an effect if your window is higher than it is wide. In the typical case of an horizontal window, `canvas_ratio()` is not required and everything should work naturally without you having to think about it).
:::

You can also specify the size and position of the canvas:

```cpp
ctx.image(canvas, p6::Center{},
          p6::RadiusY{0.2f}); // Give it a height of 0.4 The width will be deduced based on the aspect_ratio of the canvas
```

Since a canvas has an aspect ratio that we want to try and preserve it is recommended to use either `p6::RadiusX`, `p6::RadiusY`, `p6::FitX` or `p6::FitY` to describe the size of the canvas. If you are ok with getting a distorted image then you can use `p6::Radii` to specify both the width and the height, or `p6::FullScreen`.