---
title: Window
summary: Query the state of the window and control it. 

sidebar_position: 1
---

# Window

Query the state of the window and control it. 

## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| float | **[aspect_ratio](/reference/window#aspect_ratio)**() const<br/>Returns the aspect ratio (a.k.a.  |
| float | **[inverse_aspect_ratio](/reference/window#inverse_aspect_ratio)**() const<br/>Returns the inverse aspect ratio (a.k.a.  |
| ImageSize | **[framebuffer_size](/reference/window#framebuffer_size)**() const<br/>Returns the size of the framebuffer (width and height).  |
| int | **[framebuffer_width](/reference/window#framebuffer_width)**() const<br/>Returns the width of the framebuffer.  |
| int | **[framebuffer_height](/reference/window#framebuffer_height)**() const<br/>Returns the height of the framebuffer.  |
| ImageSize | **[canvas_size](/reference/window#canvas_size)**() const<br/>Returns the size of the canvas (width and height).  |
| int | **[canvas_width](/reference/window#canvas_width)**() const<br/>Returns the width of the canvas.  |
| int | **[canvas_height](/reference/window#canvas_height)**() const<br/>Returns the height of the canvas.  |
| Color | **[read_pixel](/reference/window#read_pixel)**(`glm::vec2` position) const<br/>Returns the color of the pixel at the given position.  |
| bool | **[window_is_focused](/reference/window#window_is_focused)**() const<br/>Returns true iff the window is currently focused.  |
| void | **[focus_window](/reference/window#focus_window)**() const<br/>Focuses the window, making it pop to the foreground.  |
| void | **[maximize_window](/reference/window#maximize_window)**()<br/>Maximizes the window.  |
| void | **[minimize_window](/reference/window#minimize_window)**()<br/>Minimizes the window. Note that while your window is minimized everything will be frozen and no update, event or anything will happen.  |
| void | **[restore_window](/reference/window#restore_window)**()<br/>Restores the window if it is currently maximized. Does nothing otherwise.  |
| bool | **[window_is_maximized](/reference/window#window_is_maximized)**() const<br/>Returns true iff the window is currently maximized.  |
| void | **[go_fullscreen](/reference/window#go_fullscreen)**()<br/>Makes the window fullscreen.  |
| void | **[escape_fullscreen](/reference/window#escape_fullscreen)**()<br/>Exits the fullscreen mode.  |
| void | **[toggle_fullscreen](/reference/window#toggle_fullscreen)**()<br/>Goes fullscreen if it wasn't, escapes fullscreen if it was.  |
| bool | **[window_is_fullscreen](/reference/window#window_is_fullscreen)**() const<br/>Returns true iff the window is currently fullscreen.  |


## Functions

### aspect_ratio()

> `float` **[aspect_ratio](/reference/window#aspect_ratio)**() const;


Returns the aspect ratio (a.k.a. 

width / height) of the current render target. This render target is the window by default, unless you called [render_to_canvas()](/reference/canvas#render_to_canvas) in which case it will be the given canvas. When you call [render_to_screen()](/reference/canvas#render_to_screen) the render target goes back to beeing the window. 


### inverse_aspect_ratio()

> `float` **[inverse_aspect_ratio](/reference/window#inverse_aspect_ratio)**() const;


Returns the inverse aspect ratio (a.k.a. 

height / width) of the current render target. This render target is the window by default, unless you called [render_to_canvas()](/reference/canvas#render_to_canvas) in which case it will be the given canvas. When you call [render_to_screen()](/reference/canvas#render_to_screen) the render target goes back to beeing the window. 


### framebuffer_size()

> `ImageSize` **[framebuffer_size](/reference/window#framebuffer_size)**() const;


Returns the size of the framebuffer (width and height). 

### framebuffer_width()

> `int` **[framebuffer_width](/reference/window#framebuffer_width)**() const;


Returns the width of the framebuffer. 

### framebuffer_height()

> `int` **[framebuffer_height](/reference/window#framebuffer_height)**() const;


Returns the height of the framebuffer. 

### canvas_size()

> `ImageSize` **[canvas_size](/reference/window#canvas_size)**() const;


Returns the size of the canvas (width and height). 

### canvas_width()

> `int` **[canvas_width](/reference/window#canvas_width)**() const;


Returns the width of the canvas. 

### canvas_height()

> `int` **[canvas_height](/reference/window#canvas_height)**() const;


Returns the height of the canvas. 

### read_pixel()

> `Color` **[read_pixel](/reference/window#read_pixel)**(`glm::vec2` position) const;


Returns the color of the pixel at the given position. 

The coordinates are expressed in the usual p6 coordinate system. The pixel is read from the current render target (which will be the screen in most cases, unless you used [render_to_canvas()](/reference/canvas#render_to_canvas)) 


### window_is_focused()

> `bool` **[window_is_focused](/reference/window#window_is_focused)**() const;


Returns true iff the window is currently focused. 

### focus_window()

> `void` **[focus_window](/reference/window#focus_window)**() const;


Focuses the window, making it pop to the foreground. 

### maximize_window()

> `void` **[maximize_window](/reference/window#maximize_window)**();


Maximizes the window. 

### minimize_window()

> `void` **[minimize_window](/reference/window#minimize_window)**();


Minimizes the window. Note that while your window is minimized everything will be frozen and no update, event or anything will happen. 

### restore_window()

> `void` **[restore_window](/reference/window#restore_window)**();


Restores the window if it is currently maximized. Does nothing otherwise. 

### window_is_maximized()

> `bool` **[window_is_maximized](/reference/window#window_is_maximized)**() const;


Returns true iff the window is currently maximized. 

### go_fullscreen()

> `void` **[go_fullscreen](/reference/window#go_fullscreen)**();


Makes the window fullscreen. 

Does nothing if it was already fullscreen. 


### escape_fullscreen()

> `void` **[escape_fullscreen](/reference/window#escape_fullscreen)**();


Exits the fullscreen mode. 

Does nothing if the window wasn't fullscreen. 


### toggle_fullscreen()

> `void` **[toggle_fullscreen](/reference/window#toggle_fullscreen)**();


Goes fullscreen if it wasn't, escapes fullscreen if it was. 

### window_is_fullscreen()

> `bool` **[window_is_fullscreen](/reference/window#window_is_fullscreen)**() const;


Returns true iff the window is currently fullscreen. 





-------------------------------

Updated on 2022 June 05