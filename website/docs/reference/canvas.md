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
| void | **[save_image](/reference/canvas#save_image)**(`const Canvas &` canvas, `std::filesystem::path` path)<br/>Saves the content of the canvas as an image file.  |
| void | **[render_to_canvas](/reference/canvas#render_to_canvas)**(`Canvas &` canvas)<br/>Sets the canvas where all the drawing commands will happen on.  |
| void | **[render_to_screen](/reference/canvas#render_to_screen)**()<br/>Reset the [Context](/reference/Types/context) to render to the screen.  |
| void | **[save_image](/reference/canvas#save_image)**(`std::filesystem::path` path) const<br/>Saves the content of the window as an image file.  |


## Functions

### save_image()

> `void` **[save_image](/reference/canvas#save_image)**(`const Canvas &` canvas, `std::filesystem::path` path);


Saves the content of the canvas as an image file. 

Supported file types are .png and .jpeg/.jpg Simply use the corresponding extension to save in the desired format. If the path is relative, it will be relative to the directory containing your executable. If some directories in the path don't exist yet, they will be created automatically. 


### render_to_canvas()

> `void` **[render_to_canvas](/reference/canvas#render_to_canvas)**(`Canvas &` canvas);


Sets the canvas where all the drawing commands will happen on. 

### render_to_screen()

> `void` **[render_to_screen](/reference/canvas#render_to_screen)**();


Reset the [Context](/reference/Types/context) to render to the screen. 

### save_image()

> `void` **[save_image](/reference/canvas#save_image)**(`std::filesystem::path` path) const;


Saves the content of the window as an image file. 

Supported file types are .png and .jpeg/.jpg Simply use the corresponding extension to save in the desired format. If the path is relative, it will be relative to the directory containing your executable. If some directories in the path don't exist yet, they will be created automatically. 






-------------------------------

Updated on 2022 June 05