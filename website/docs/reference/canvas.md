---
title: Canvas
summary: You can either draw directly in the window (the default) or onto a custom Canvas. 

sidebar_position: 1
---

# Canvas

You can either draw directly in the window (the default) or onto a custom [Canvas](/reference/Types/canvas). 

## Summary

### Classes

|                | Name           |
| -------------- | -------------- |
| class | **[p6::Canvas](/reference/Types/canvas)** <br/>A canvas is an image that can be drawn onto.  |

### Functions

|                | Name           |
| -------------- | -------------- |
| void | **[save_image](/reference/canvas#save_image)**(`const Canvas &` canvas, `std::filesystem::path` path)<br/>Saves the content of the canvas as an image file.  |
| void | **[render_to_canvas](/reference/canvas#render_to_canvas)**(`Canvas &` canvas)<br/>Sets a canvas to be the one that all the drawing commands will draw on, until you call render_to_main_canvas.  |
| void | **[render_to_main_canvas](/reference/canvas#render_to_main_canvas)**()<br/>Reset the [Context](/reference/Types/context) to render to the main canvas. The main canvas is the one that will be displayed in the window.  |
| Canvas & | **[main_canvas](/reference/canvas#main_canvas)**() |
| const Canvas & | **[main_canvas](/reference/canvas#main_canvas)**() const |
| Canvas & | **[current_canvas](/reference/canvas#current_canvas)**() |
| const Canvas & | **[current_canvas](/reference/canvas#current_canvas)**() const |
| float | **[aspect_ratio](/reference/canvas#aspect_ratio)**() const<br/>Returns the aspect ratio (a.k.a.  |
| float | **[inverse_aspect_ratio](/reference/canvas#inverse_aspect_ratio)**() const<br/>Returns the inverse aspect ratio (a.k.a.  |
| ImageSize | **[main_canvas_size](/reference/canvas#main_canvas_size)**() const<br/>Returns the size of the main canvas (width and height).  |
| int | **[main_canvas_width](/reference/canvas#main_canvas_width)**() const<br/>Returns the width of the main canvas.  |
| int | **[main_canvas_height](/reference/canvas#main_canvas_height)**() const<br/>Returns the height of the main canvas.  |
| ImageSize | **[current_canvas_size](/reference/canvas#current_canvas_size)**() const<br/>Returns the size of the current canvas (width and height).  |
| int | **[current_canvas_width](/reference/canvas#current_canvas_width)**() const<br/>Returns the width of the current canvas.  |
| int | **[current_canvas_height](/reference/canvas#current_canvas_height)**() const<br/>Returns the height of the current canvas.  |
| void | **[main_canvas_mode](/reference/canvas#main_canvas_mode)**(`CanvasSizeMode` mode)<br/>Sets how the size of the main canvas will be computed.  |
| float | **[canvas_ratio](/reference/canvas#canvas_ratio)**(`const Canvas &` canvas) const<br/>Returns the ratio that you need to multiply with in order to match the position and size of the `canvas` when it is fitted in the window.  |
| void | **[save_image](/reference/canvas#save_image)**(`std::filesystem::path` path) const<br/>Saves the content of the window's main canvas as an image file.  |
| Color | **[read_pixel](/reference/canvas#read_pixel)**(`glm::vec2` position) const<br/>Returns the color of the pixel at the given position in the main canvas.  |


## Functions

### save_image()

> `void` **[save_image](/reference/canvas#save_image)**(`const Canvas &` canvas, `std::filesystem::path` path);


Saves the content of the canvas as an image file. 

Supported file types are .png and .jpeg/.jpg Simply use the corresponding extension to save in the desired format. If the path already exists, a number will be appended to the name and the previous file won't be overwritten. If the path is relative, it will be relative to the directory containing your executable. If some directories in the path don't exist yet, they will be created automatically. 


### render_to_canvas()

> `void` **[render_to_canvas](/reference/canvas#render_to_canvas)**(`Canvas &` canvas);


Sets a canvas to be the one that all the drawing commands will draw on, until you call render_to_main_canvas. 

### render_to_main_canvas()

> `void` **[render_to_main_canvas](/reference/canvas#render_to_main_canvas)**();


Reset the [Context](/reference/Types/context) to render to the main canvas. The main canvas is the one that will be displayed in the window. 

### main_canvas()

> `Canvas &` **[main_canvas](/reference/canvas#main_canvas)**();



### main_canvas()

> `const Canvas &` **[main_canvas](/reference/canvas#main_canvas)**() const;



### current_canvas()

> `Canvas &` **[current_canvas](/reference/canvas#current_canvas)**();



### current_canvas()

> `const Canvas &` **[current_canvas](/reference/canvas#current_canvas)**() const;



### aspect_ratio()

> `float` **[aspect_ratio](/reference/canvas#aspect_ratio)**() const;


Returns the aspect ratio (a.k.a. 

width / height) of the current canvas. This canvas is the window's main canvas by default, unless you called [render_to_canvas()](/reference/canvas#render_to_canvas) in which case it will be the given canvas. When you call [render_to_main_canvas()](/reference/canvas#render_to_main_canvas) the current canvas goes back to beeing the window's main canvas. 


### inverse_aspect_ratio()

> `float` **[inverse_aspect_ratio](/reference/canvas#inverse_aspect_ratio)**() const;


Returns the inverse aspect ratio (a.k.a. 

height / width) of the current canvas. This canvas is the window's main canvas by default, unless you called [render_to_canvas()](/reference/canvas#render_to_canvas) in which case it will be the given canvas. When you call [render_to_main_canvas()](/reference/canvas#render_to_main_canvas) the current canvas goes back to beeing the window's main canvas. 


### main_canvas_size()

> `ImageSize` **[main_canvas_size](/reference/canvas#main_canvas_size)**() const;


Returns the size of the main canvas (width and height). 

### main_canvas_width()

> `int` **[main_canvas_width](/reference/canvas#main_canvas_width)**() const;


Returns the width of the main canvas. 

### main_canvas_height()

> `int` **[main_canvas_height](/reference/canvas#main_canvas_height)**() const;


Returns the height of the main canvas. 

### current_canvas_size()

> `ImageSize` **[current_canvas_size](/reference/canvas#current_canvas_size)**() const;


Returns the size of the current canvas (width and height). 

### current_canvas_width()

> `int` **[current_canvas_width](/reference/canvas#current_canvas_width)**() const;


Returns the width of the current canvas. 

### current_canvas_height()

> `int` **[current_canvas_height](/reference/canvas#current_canvas_height)**() const;


Returns the height of the current canvas. 

### main_canvas_mode()

> `void` **[main_canvas_mode](/reference/canvas#main_canvas_mode)**(`CanvasSizeMode` mode);


Sets how the size of the main canvas will be computed. 

The default mode is [CanvasSizeMode_SameAsWindow](/reference/Types/canvas_size_mode___same_as_window). 


### canvas_ratio()

> `float` **[canvas_ratio](/reference/canvas#canvas_ratio)**(`const Canvas &` canvas) const;


Returns the ratio that you need to multiply with in order to match the position and size of the `canvas` when it is fitted in the window. 

### save_image()

> `void` **[save_image](/reference/canvas#save_image)**(`std::filesystem::path` path) const;


Saves the content of the window's main canvas as an image file. 

Supported file types are .png and .jpeg/.jpg Simply use the corresponding extension to save in the desired format. If the path already exists, a number will be appended to the name and the previous file won't be overwritten. If the path is relative, it will be relative to the directory containing your executable. If some directories in the path don't exist yet, they will be created automatically. 


### read_pixel()

> `Color` **[read_pixel](/reference/canvas#read_pixel)**(`glm::vec2` position) const;


Returns the color of the pixel at the given position in the main canvas. 

The coordinates are expressed in the usual p6 coordinate system. 






-------------------------------

Updated on 2024 August 01