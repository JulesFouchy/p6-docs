---
title: Images
---

## Loading an image

You can load any image (*png*, *jpeg*, *etc.*) with `load_image()`:

```cpp
const p6::Image image = p6::load_image("img/my_file.png");
```

:::info Important
In order for this to work you must have an *img* folder **at the root of your project**, with a *my_file.png* in it.<br/>
**AND you must declare your *img* folder in CMake: `p6_copy_folder(${PROJECT_NAME} img)`**.
:::

For a complete example of this, check out [this example](https://github.com/JulesFouchy/p6-docs/tree/main/examples/complete).

## Displaying an image

You can draw an image with the `image()` function:

```cpp
const auto image = p6::load_image("img/my_file.png");
ctx.image(image, p6::Center{},
          p6::RadiusY{0.2f}); // Give it a height of 0.4 The width will be deduced based on the aspect_ratio of the image
```

Since an image has an aspect ratio that we want to try and preserve it is recommended to use either `p6::RadiusX`, `p6::RadiusY`, `p6::FitX` or `p6::FitY` to describe the size of the image. If you are ok with getting a distorted image then you can use `p6::Radii` to specify both the width and the height, or `p6::FullScreen`.