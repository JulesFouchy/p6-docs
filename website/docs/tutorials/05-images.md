---
title: Images
---

## Loading an image

You can load any image (*png*, *jpeg*, *etc.*) with `load_image()`:

```cpp
const p6::Image image = p6::load_image("img/my_file.png");
```

In order for this to work you must have an *img* folder at the root of your project, with a *my_file.png* file in it. **AND** you must declare your images folder in CMake: `p6_copy_folder(${PROJECT_NAME} img)`.

For a complete example of this, check out [this example](https://github.com/JulesFouchy/p6-docs/tree/main/examples/complete).

## Displaying an image

You can draw an image with the `image()` function:

```cpp
const auto image = p6::load_image("img/my_file.png");
ctx.image(image, p6::Center{},
          p6::RadiusY{0.2f}); // Give it a height of 0.4 The width will be deduced based on the aspect_ratio of the image
```

Since an image has an aspect ratio that we want to try and preserve it is recommended to use either `p6::RadiusX`, `p6::RadiusY`, `p6::FitX` or `p6::FitY` to describe the size of the image. If you are ok with getting a distorted image then you can use `p6::Radii` to specify both the width and the height, or `p6::FullScreen`.

## Drawing on an image

You can use images as canvases that you draw onto just as you would with the screen. All drawings between the calls to `ctx.render_to_image(image)` and `ctx.render_to_screen()` will apply to the image, not to the screen:

```cpp
#include <p6/p6.h>

int main()
{
    auto ctx   = p6::Context{};
    auto image = p6::Image{ctx.window_size()}; // Create an empty image with the same size as the window
    ctx.render_to_image(image);
        ctx.background({0.3f, 0.5f, 0.9f, 0.5f}); // background() applies to image, not to the screen
        ctx.circle();                             // circle() applies to image, not to the screen
    ctx.render_to_screen();
    ctx.window_resized = [&]() {
        image.resize(ctx.window_size()); // Make sure that the image still has the same size as the window even after it resizes
    };
    ctx.update = [&]() {
        ctx.background({});
        ctx.image(image);
    };
    ctx.start();
}
```

For a more detailed example, check [this one out](https://github.com/JulesFouchy/p6-docs/blob/main/tests/render_to_image.cpp).