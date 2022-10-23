---
title: Events
summary: You can set those functions as you wish to react to various events. 

sidebar_position: 1
---

# Events

You can set those functions as you wish to react to various events.  [More...](#detailed-description)

## Summary

### Attributes

|                | Name           |
| -------------- | -------------- |
| std::function< void()> | **[update](/reference/events#update)** <br/>This function is called repeatedly. The framerate is controlled by the framerate_xxx() functions.  |
| std::function< void()> | **[imgui](/reference/events#imgui)** <br/>In this function you can call all the ImGui code you want.  |
| std::function< void(MouseMove)> | **[mouse_moved](/reference/events#mouse_moved)** <br/>This function is called whenever the mouse is moved.  |
| std::function< void(MouseDrag)> | **[mouse_dragged](/reference/events#mouse_dragged)** <br/>This function is called whenever the mouse is dragged.  |
| std::function< void(MouseButton)> | **[mouse_pressed](/reference/events#mouse_pressed)** <br/>This function is called whenever a mouse button is pressed.  |
| std::function< void(MouseButton)> | **[mouse_released](/reference/events#mouse_released)** <br/>This function is called whenever a mouse button is released.  |
| std::function< void(MouseScroll)> | **[mouse_scrolled](/reference/events#mouse_scrolled)** <br/>This function is called whenever the mouse wheel is scrolled.  |
| std::function< void(Key)> | **[key_pressed](/reference/events#key_pressed)** <br/>This function is called whenever a keyboard key is pressed.  |
| std::function< void(Key)> | **[key_released](/reference/events#key_released)** <br/>This function is called whenever a keyboard key is released.  |
| std::function< void(Key)> | **[key_repeated](/reference/events#key_repeated)** <br/>This function is called repeatedly whenever a keyboard key is held.  |
| std::function< void(std::string &&)> | **[on_error](/reference/events#on_error)** <br/>This function is called whenever an error occurs.  |
| std::function< void()> | **[main_canvas_resized](/reference/events#main_canvas_resized)** <br/>This function is called whenever the main canvas is resized.  |

## Detailed Description

You can set those functions as you wish to react to various events. 

The simplest way is to use a lambda:



```cpp
auto ctx = p6::Context{};
ctx.mouse_pressed = [](p6::MouseButton) {
    std::cout << "Hello World\n";
};
```



## Attributes

### update

```
std::function< void()> update = []() {
    };
```

This function is called repeatedly. The framerate is controlled by the framerate_xxx() functions. 

### imgui

```
std::function< void()> imgui = []() {
    };
```

In this function you can call all the ImGui code you want. 

Note that you can also do it during the other event functions ([update()](/reference/events#update), [mouse_moved()](/reference/events#mouse_moved), etc.). This [imgui()](/reference/events#imgui) function is just here to help you organize your code if you want to. 


### mouse_moved

```
std::function< void(MouseMove)> mouse_moved = [](MouseMove) {
    };
```

This function is called whenever the mouse is moved. 

### mouse_dragged

```
std::function< void(MouseDrag)> mouse_dragged = [](MouseDrag) {
    };
```

This function is called whenever the mouse is dragged. 

### mouse_pressed

```
std::function< void(MouseButton)> mouse_pressed = [](MouseButton) {
    };
```

This function is called whenever a mouse button is pressed. 

### mouse_released

```
std::function< void(MouseButton)> mouse_released = [](MouseButton) {
    };
```

This function is called whenever a mouse button is released. 

### mouse_scrolled

```
std::function< void(MouseScroll)> mouse_scrolled = [](MouseScroll) {
    };
```

This function is called whenever the mouse wheel is scrolled. 

### key_pressed

```
std::function< void(Key)> key_pressed = [](Key) {
    };
```

This function is called whenever a keyboard key is pressed. 

### key_released

```
std::function< void(Key)> key_released = [](Key) {
    };
```

This function is called whenever a keyboard key is released. 

### key_repeated

```
std::function< void(Key)> key_repeated = [](Key) {
    };
```

This function is called repeatedly whenever a keyboard key is held. 

(NB: this only starts after holding the key for a little while. The axact behaviour is OS-specific)

:warning: This is less than ideal to do things like handling the movement of a character. You should rather do, in your update function:



```cpp
if (p6.is_held(PhysicalKey::W)) { // TODO implement is_held and PhysicalKey and LogicalKey
    character.move_forward(p6.delta_time());
}
```


### on_error

```
std::function< void(std::string &&)> on_error = [](std::string&& error_message) {
        throw std::runtime_error{error_message};
    };
```

This function is called whenever an error occurs. 

### main_canvas_resized

```
std::function< void()> main_canvas_resized = []() {
    };
```

This function is called whenever the main canvas is resized. 

If you call [main_canvas_size()](/reference/canvas#main_canvas_size), [main_canvas_width()](/reference/canvas#main_canvas_width), [main_canvas_height()](/reference/canvas#main_canvas_height) or [aspect_ratio()](/reference/canvas#aspect_ratio) inside [main_canvas_resized()](/reference/events#main_canvas_resized) they will already be referring to the new size. 





-------------------------------

Updated on 2022 October 23