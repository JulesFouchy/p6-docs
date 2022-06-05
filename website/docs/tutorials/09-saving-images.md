---
title: Saving Images
---

To save an image, simply call `save_image()`:

```cpp title="Save the content of the window"
ctx.save_image("my_path/my_image.png");
```

```cpp title="Save the content of any Canvas you created"
p6::save_image(my_custom_canvas, "my_path/my_image.png");
```

[**Check out a full example here.**](https://github.com/JulesFouchy/p6-docs/blob/main/tests/save_image.cpp)

We can save either as *.png* or as *.jpeg*.

:::tip
If the path is relative, it will be relative to the directory containing your executable.<br/>
If some directories in the path don't exist yet, they will be created automatically.
:::