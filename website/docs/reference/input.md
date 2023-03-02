---
title: Input
summary: Query the state of the mouse and keyboard. 

sidebar_position: 1
---

# Input

Query the state of the mouse and keyboard. 

## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| glm::vec2 | **[mouse](/reference/input#mouse)**() const<br/>Returns the current mouse position.  |
| glm::vec2 | **[mouse_delta](/reference/input#mouse_delta)**() const<br/>Returns the movement of the mouse since last [update()](/reference/events#update).  |
| bool | **[mouse_is_in_window](/reference/input#mouse_is_in_window)**() const<br/>Returns true iff the window is focused and the coordinates returned by [mouse()](/reference/input#mouse) correspond to a position inside the window.  |
| bool | **[mouse_button_is_pressed](/reference/input#mouse_button_is_pressed)**(`Button` button) const<br/>Returns true iff the given mouse button is currently pressed.  |
| bool | **[ctrl](/reference/input#ctrl)**() const<br/>Returns true iff the CTRL key is pressed (or CMD on Mac)  |
| bool | **[shift](/reference/input#shift)**() const<br/>Returns true iff the SHIFT key is pressed.  |
| bool | **[alt](/reference/input#alt)**() const<br/>Returns true iff the ALT key is pressed.  |
| bool | **[key_is_pressed](/reference/input#key_is_pressed)**(`int` key) const<br/>Returns true iff the given `key` is currently pressed.  |


## Functions

### mouse()

> `glm::vec2` **[mouse](/reference/input#mouse)**() const;


Returns the current mouse position. 

### mouse_delta()

> `glm::vec2` **[mouse_delta](/reference/input#mouse_delta)**() const;


Returns the movement of the mouse since last [update()](/reference/events#update). 

### mouse_is_in_window()

> `bool` **[mouse_is_in_window](/reference/input#mouse_is_in_window)**() const;


Returns true iff the window is focused and the coordinates returned by [mouse()](/reference/input#mouse) correspond to a position inside the window. 

### mouse_button_is_pressed()

> `bool` **[mouse_button_is_pressed](/reference/input#mouse_button_is_pressed)**(`Button` button) const;


Returns true iff the given mouse button is currently pressed. 

### ctrl()

> `bool` **[ctrl](/reference/input#ctrl)**() const;


Returns true iff the CTRL key is pressed (or CMD on Mac) 

### shift()

> `bool` **[shift](/reference/input#shift)**() const;


Returns true iff the SHIFT key is pressed. 

### alt()

> `bool` **[alt](/reference/input#alt)**() const;


Returns true iff the ALT key is pressed. 

### key_is_pressed()

> `bool` **[key_is_pressed](/reference/input#key_is_pressed)**(`int` key) const;


Returns true iff the given `key` is currently pressed. 

`key` should be a GLFW_KEY_ value. See [https://www.glfw.org/docs/3.3/keys.html](https://www.glfw.org/docs/3.3/keys.html) for the complete list. e.g. `ctx.key_is_pressed(GLFW_KEY_Q)` /!\ Please note that these are physical keys that don't depend on the current layout. This means that GLFW_KEY_Q will refer to the first key on your keyboard, no matter if you are using QWERTY or AZERTY. 






-------------------------------

Updated on 2023 March 02