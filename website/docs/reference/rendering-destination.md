---
title: Rendering Destination
summary: Controls where the rendering happens. 

sidebar_position: 1
---

# Rendering Destination

Controls where the rendering happens.  [More...](#detailed-description)

## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| void | **[render_to_image](/reference/rendering-destination#render_to_image)**(`Image &` image)<br/>Sets the image where all the drawing commands will happen on.  |
| void | **[render_to_screen](/reference/rendering-destination#render_to_screen)**()<br/>Reset the [Context](/reference/Types/context) to render to the screen.  |

## Detailed Description

Controls where the rendering happens. 

You can either draw directly to the screen (the default) or onto an image.



```cpp
auto ctx = p6::Context{};
auto my_image = p6::Image{{1000, 1000}}; // Creates an empty image of size 1000x1000
ctx.render_to_image(my_image);
ctx.rectangle({}); // Draws on my_image
ctx.ellipse({});   // Draws on my_image again
ctx.render_to_screen();
ctx.rectangle({});       // Draws on the screen
ctx.image(my_image, {}); // Draws my_image onto the screen
```


## Functions

### render_to_image()

> `void` **[render_to_image](/reference/rendering-destination#render_to_image)**(`Image &` image);


Sets the image where all the drawing commands will happen on. 

### render_to_screen()

> `void` **[render_to_screen](/reference/rendering-destination#render_to_screen)**();


Reset the [Context](/reference/Types/context) to render to the screen. 





-------------------------------

Updated on 2022 February 02