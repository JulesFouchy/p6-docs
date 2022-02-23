---
title: The coordinate system
---

*p6* uses a relative coordinate system. This means that if you double the size of your window, all of your drawings will be scaled too and they will appear to fit the same space in the window.

- `(0, 0)` is the center of the window. 
- The y axis always goes from `-1` at the bottom to `+1` at the top (no matter the size of the window).
- The x axis goes from `-ctx.aspect_ratio()` at the left to `+ctx.aspect_ratio()` at the right. For example if your window is 2000 by 1000 pixels then its aspect ratio is 2 (2000 / 1000) and the x axis will go from -2 to 2. This is done so that both axes use the same units (A distance of 0.5 means the same for x as it does for y).
- You can access the aspect ratio of the window (a.k.a. `width / height`) through the [`ctx.aspect_ratio()`](../reference/window#aspect_ratio) function.

### Framebuffer

If you need to you can access the size of the window's framebuffer through the [`ctx.framebuffer_size()`](../reference/window#framebuffer_size), [`ctx.framebuffer_width()`](../reference/window#framebuffer_width) and [`ctx.framebuffer_height()`](../reference/window#framebuffer_height) functions. But I would not recommend to do so because in most cases you will be better off using relative coordinates. These functions are mainly here to allow you to create an [`Image`](../reference/Types/Image) that has the same size as the window's framebuffer, but this is an advanced use case.

**NB:** the *framebuffer* is the image that you see in your window. It does not necessarily have the same size as the window itself since retina displays exist (see [glfw's documentation](https://www.glfw.org/faq.html#43---why-is-my-output-in-the-lower-left-corner-of-the-window)). This is why we always talk about the size of the *framebuffer* instead of the size of the *window*.