---
title: Canvas
summary: You can either draw directly to the screen (the default) or onto a Canvas. 

sidebar_position: 1
---

# Canvas

You can either draw directly to the screen (the default) or onto a [Canvas](/reference/Types/canvas). 

## Summary

### Classes

|                | Name           |
| -------------- | -------------- |
| class | **[p6::Canvas](/reference/Types/canvas)** <br/>A canvas is an image that can be drawn onto.  |

### Functions

|                | Name           |
| -------------- | -------------- |
| void | **[render_to_canvas](/reference/canvas#render_to_canvas)**(`Canvas &` canvas)<br/>Sets the canvas where all the drawing commands will happen on.  |
| void | **[render_to_screen](/reference/canvas#render_to_screen)**()<br/>Reset the [Context](/reference/Types/context) to render to the screen.  |


## Functions

### render_to_canvas()

> `void` **[render_to_canvas](/reference/canvas#render_to_canvas)**(`Canvas &` canvas);


Sets the canvas where all the drawing commands will happen on. 

### render_to_screen()

> `void` **[render_to_screen](/reference/canvas#render_to_screen)**();


Reset the [Context](/reference/Types/context) to render to the screen. 





-------------------------------

Updated on 2022 April 03