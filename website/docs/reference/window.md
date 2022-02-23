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
| float | **[aspect_ratio](/reference/window#aspect_ratio)**() const<br/>Returns the aspect ratio of the window (a.k.a. width / height).  |
| float | **[inverse_aspect_ratio](/reference/window#inverse_aspect_ratio)**() const<br/>Returns the inverse aspect ratio of the window (a.k.a. height / width).  |
| ImageSize | **[framebuffer_size](/reference/window#framebuffer_size)**() const<br/>Returns the size of the framebuffer (width and height).  |
| int | **[framebuffer_width](/reference/window#framebuffer_width)**() const<br/>Returns the width of the framebuffer.  |
| int | **[framebuffer_height](/reference/window#framebuffer_height)**() const<br/>Returns the height of the framebuffer.  |
| bool | **[window_is_focused](/reference/window#window_is_focused)**() const<br/>Returns true iff the window is currently focused.  |
| void | **[focus_window](/reference/window#focus_window)**() const<br/>Focuses the window, making it pop to the foreground.  |
| void | **[maximize_window](/reference/window#maximize_window)**()<br/>Maximizes the window.  |
| void | **[minimize_window](/reference/window#minimize_window)**()<br/>Minimizes the window. Note that while your window is minimized everything will be frozen and no update, event or anything will happen.  |
| void | **[restore_window](/reference/window#restore_window)**()<br/>Restores the window if it is currently maximized. Does nothing otherwise.  |
| bool | **[window_is_maximized](/reference/window#window_is_maximized)**() const<br/>Returns true iff the window is currently maximized.  |


## Functions

### aspect_ratio()

> `float` **[aspect_ratio](/reference/window#aspect_ratio)**() const;


Returns the aspect ratio of the window (a.k.a. width / height). 

### inverse_aspect_ratio()

> `float` **[inverse_aspect_ratio](/reference/window#inverse_aspect_ratio)**() const;


Returns the inverse aspect ratio of the window (a.k.a. height / width). 

### framebuffer_size()

> `ImageSize` **[framebuffer_size](/reference/window#framebuffer_size)**() const;


Returns the size of the framebuffer (width and height). 

### framebuffer_width()

> `int` **[framebuffer_width](/reference/window#framebuffer_width)**() const;


Returns the width of the framebuffer. 

### framebuffer_height()

> `int` **[framebuffer_height](/reference/window#framebuffer_height)**() const;


Returns the height of the framebuffer. 

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





-------------------------------

Updated on 2022 February 24