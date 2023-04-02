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

Updated on 2023 April 02