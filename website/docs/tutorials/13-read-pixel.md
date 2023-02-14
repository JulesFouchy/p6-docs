---
title: Read Pixel
---

## Brief

You can ask for the color of a pixel with [`ctx.read_pixel(position)`](../reference/window#read_pixel).

## Example

```cpp
#include <p6/p6.h>

int main()
{
    auto ctx   = p6::Context{};
    ctx.update = [&]() {
        ctx.background(p6::Color{1, 0, 0});
    };
    ctx.mouse_pressed = [&](p6::MouseButton button) {
        const p6::Color color = ctx.read_pixel(button.position);
        assert(color == p6::Color{1, 0, 0});
    };
    ctx.start();
}
```

## Nota Bene

This function is meant to be used to read one single pixel from time to time, for example in `mouse_pressed()` or `mouse_moved()`. If you want to loop and read the color of all the pixels in the window, using `read_pixel()` will be pretty slow. A much better alternative (but arguably more complex to setup) would be to use a [shader](./12-custom-shaders.md).