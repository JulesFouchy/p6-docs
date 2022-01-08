---
title: p6::Context

---

# p6::Context





## Summary


|                | Name           |
| -------------- | -------------- |
| | **[Context](/reference/Classes/classp6_1_1_context#context)**(WindowCreationParams window_creation_params ={}) |
| void | **[background](/reference/Modules/group__drawing#background)**([Color](/reference/Classes/classp6_1_1_color) color) const<br/>Sets the color and alpha of each pixel of the canvas.  |
| void | **[rectangle](/reference/Modules/group__drawing#rectangle)**([RectangleParams](/reference/Classes/structp6_1_1_rectangle_params) params) const<br/>Draws a rectangle.  |
| void | **[ellipse](/reference/Modules/group__drawing#ellipse)**([RectangleParams](/reference/Classes/structp6_1_1_rectangle_params) params) const<br/>Draws an ellipse.  |
| void | **[image](/reference/Modules/group__drawing#image)**(const [Image](/reference/Classes/classp6_1_1_image) & img, [RectangleParams](/reference/Classes/structp6_1_1_rectangle_params) params) const<br/>Draws an image.  |
| void | **[render_to_image](/reference/Classes/classp6_1_1_context#render_to_image)**(const [Image](/reference/Classes/classp6_1_1_image) & image) const<br/>Sets the image where all the drawing commands will happen on.  |
| void | **[render_to_screen](/reference/Classes/classp6_1_1_context#render_to_screen)**() const<br/>Reset p6 to render to the screen.  |
| glm::vec2 | **[mouse](/reference/Classes/classp6_1_1_context#mouse)**() const<br/>Returns the current mouse position.  |
| glm::vec2 | **[mouse_delta](/reference/Classes/classp6_1_1_context#mouse_delta)**() const<br/>Returns the movement of the mouse since last [update()](/reference/Classes/classp6_1_1_context#update) |
| bool | **[mouse_is_in_window](/reference/Classes/classp6_1_1_context#mouse_is_in_window)**() const<br/>Returns true iff the coordinates returned by [mouse()](/reference/Classes/classp6_1_1_context#mouse) correspond to a position inside the window, and the window is focused.  |
| bool | **[ctrl](/reference/Classes/classp6_1_1_context#ctrl)**() const<br/>Returns true iff the CTRL key is pressed (or CMD on Mac)  |
| bool | **[shift](/reference/Classes/classp6_1_1_context#shift)**() const<br/>Returns true iff the SHIFT key is pressed.  |
| bool | **[alt](/reference/Classes/classp6_1_1_context#alt)**() const<br/>Returns true iff the ALT key is pressed.  |
| float | **[aspect_ratio](/reference/Classes/classp6_1_1_context#aspect_ratio)**() const<br/>Returns the aspect ratio of the window (a.k.a. width / height)  |
| ImageSize | **[window_size](/reference/Classes/classp6_1_1_context#window_size)**() const<br/>Returns the size of the window.  |
| int | **[window_width](/reference/Classes/classp6_1_1_context#window_width)**() const<br/>Returns the width of the window.  |
| int | **[window_height](/reference/Classes/classp6_1_1_context#window_height)**() const<br/>Returns the height of the window.  |
| bool | **[window_is_focused](/reference/Classes/classp6_1_1_context#window_is_focused)**() const<br/>Returns true iff the window is currently focused.  |
| void | **[maximize_window](/reference/Classes/classp6_1_1_context#maximize_window)**()<br/>Maximizes the window.  |
| float | **[time](/reference/Classes/classp6_1_1_context#time)**() const<br/>Returns the time in seconds since the creation of the [Context](/reference/Classes/classp6_1_1_context).  |
| float | **[delta_time](/reference/Classes/classp6_1_1_context#delta_time)**() const<br/>Returns the time in seconds since the last [update()](/reference/Classes/classp6_1_1_context#update) call (or 0 if this is the first update)  |
| void | **[set_time_mode_realtime](/reference/Classes/classp6_1_1_context#set_time_mode_realtime)**()<br/>Sets the time_mode as realtime.  |
| void | **[set_time_mode_fixedstep](/reference/Classes/classp6_1_1_context#set_time_mode_fixedstep)**()<br/>Sets the time_mode as fixedstep.  |
| void | **[run](/reference/Modules/group__update-flow#run)**()<br/>Starts the [update()](/reference/Classes/classp6_1_1_context#update) loop.  |
| void | **[exit](/reference/Modules/group__update-flow#exit)**()<br/>Stops the [run()](/reference/Modules/group__update-flow#run) loop.  |
| void | **[pause](/reference/Modules/group__update-flow#pause)**()<br/>Pauses the [run()](/reference/Modules/group__update-flow#run) loop.  |
| void | **[resume](/reference/Modules/group__update-flow#resume)**()<br/>Starts the [run()](/reference/Modules/group__update-flow#run) loop again if it was paused with [pause()](/reference/Modules/group__update-flow#pause).  |
| bool | **[is_paused](/reference/Modules/group__update-flow#is_paused)**() const<br/>Returns true iff we are currently paused. See [pause()](/reference/Modules/group__update-flow#pause) and [resume()](/reference/Modules/group__update-flow#resume).  |
| std::function< void()> | **[update](/reference/Classes/classp6_1_1_context#update)** <br/>This function is called repeatedly, once every 1/framerate() seconds (or at least it will try, if your update code is too slow then the next updates will necessarily be delayed).  |
| std::function< void([MouseMove](/reference/Classes/structp6_1_1_mouse_move))> | **[mouse_moved](/reference/Classes/classp6_1_1_context#mouse_moved)** <br/>This function is called whenever the mouse is moved.  |
| std::function< void([MouseDrag](/reference/Classes/structp6_1_1_mouse_drag))> | **[mouse_dragged](/reference/Classes/classp6_1_1_context#mouse_dragged)** <br/>This function is called whenever the mouse is dragged.  |
| std::function< void([MouseButton](/reference/Classes/structp6_1_1_mouse_button))> | **[mouse_pressed](/reference/Classes/classp6_1_1_context#mouse_pressed)** <br/>This function is called whenever a mouse button is pressed.  |
| std::function< void([MouseButton](/reference/Classes/structp6_1_1_mouse_button))> | **[mouse_released](/reference/Classes/classp6_1_1_context#mouse_released)** <br/>This function is called whenever a mouse button is released.  |
| std::function< void([MouseScroll](/reference/Classes/structp6_1_1_mouse_scroll))> | **[mouse_scrolled](/reference/Classes/classp6_1_1_context#mouse_scrolled)** <br/>This function is called whenever the mouse wheel is scrolled.  |
| std::function< void([KeyEvent](/reference/Classes/structp6_1_1_key_event))> | **[key_pressed](/reference/Classes/classp6_1_1_context#key_pressed)** <br/>This function is called whenever a keyboard key is pressed.  |
| std::function< void([KeyEvent](/reference/Classes/structp6_1_1_key_event))> | **[key_released](/reference/Classes/classp6_1_1_context#key_released)** <br/>This function is called whenever a keyboard key is released.  |
| std::function< void([KeyEvent](/reference/Classes/structp6_1_1_key_event))> | **[key_repeated](/reference/Classes/classp6_1_1_context#key_repeated)** <br/>This function is called repeatedly whenever a keyboard key is held.  |
| std::function< void(std::string &&)> | **[on_error](/reference/Classes/classp6_1_1_context#on_error)** <br/>This function is called whenever an error occurs.  |
| [Color](/reference/Classes/classp6_1_1_color) | **[fill](/reference/Modules/group__drawing#fill)**  |
| [Color](/reference/Classes/classp6_1_1_color) | **[stroke](/reference/Modules/group__drawing#stroke)**  |
| float | **[stroke_weight](/reference/Modules/group__drawing#stroke_weight)**  |

## Details


### Context()

> **[Context](/reference/Classes/classp6_1_1_context#context)**(WindowCreationParams window_creation_params ={});



### background()

> **[background](/reference/Modules/group__drawing#background)**([Color](/reference/Classes/classp6_1_1_color) color) const;


Sets the color and alpha of each pixel of the canvas. 

NB: No blending is applied ; even if you specify an alpha of 0.5 the old canvas is completely erased. This means that setting an alpha here doesn't matter much. It is only meaningful if you export the canvas as a png, or if you try to blend the canvas on top of another image. 


### rectangle()

> **[rectangle](/reference/Modules/group__drawing#rectangle)**([RectangleParams](/reference/Classes/structp6_1_1_rectangle_params) params) const;


Draws a rectangle. 

**Parameters**: 

  * **params** Shape of the rect




```cpp
p6.fill = {0.f, 0.8f, 0.3f};
p6.rectangle({});
```


### ellipse()

> **[ellipse](/reference/Modules/group__drawing#ellipse)**([RectangleParams](/reference/Classes/structp6_1_1_rectangle_params) params) const;


Draws an ellipse. 

### image()

> **[image](/reference/Modules/group__drawing#image)**(const [Image](/reference/Classes/classp6_1_1_image) & img, [RectangleParams](/reference/Classes/structp6_1_1_rectangle_params) params) const;


Draws an image. 

### render_to_image()

> **[render_to_image](/reference/Classes/classp6_1_1_context#render_to_image)**(const [Image](/reference/Classes/classp6_1_1_image) & image) const;


Sets the image where all the drawing commands will happen on. 

### render_to_screen()

> **[render_to_screen](/reference/Classes/classp6_1_1_context#render_to_screen)**() const;


Reset p6 to render to the screen. 

### mouse()

> **[mouse](/reference/Classes/classp6_1_1_context#mouse)**() const;


Returns the current mouse position. 

### mouse_delta()

> **[mouse_delta](/reference/Classes/classp6_1_1_context#mouse_delta)**() const;


Returns the movement of the mouse since last [update()](/reference/Classes/classp6_1_1_context#update)

### mouse_is_in_window()

> **[mouse_is_in_window](/reference/Classes/classp6_1_1_context#mouse_is_in_window)**() const;


Returns true iff the coordinates returned by [mouse()](/reference/Classes/classp6_1_1_context#mouse) correspond to a position inside the window, and the window is focused. 

### ctrl()

> **[ctrl](/reference/Classes/classp6_1_1_context#ctrl)**() const;


Returns true iff the CTRL key is pressed (or CMD on Mac) 

### shift()

> **[shift](/reference/Classes/classp6_1_1_context#shift)**() const;


Returns true iff the SHIFT key is pressed. 

### alt()

> **[alt](/reference/Classes/classp6_1_1_context#alt)**() const;


Returns true iff the ALT key is pressed. 

### aspect_ratio()

> **[aspect_ratio](/reference/Classes/classp6_1_1_context#aspect_ratio)**() const;


Returns the aspect ratio of the window (a.k.a. width / height) 

### window_size()

> **[window_size](/reference/Classes/classp6_1_1_context#window_size)**() const;


Returns the size of the window. 

### window_width()

> **[window_width](/reference/Classes/classp6_1_1_context#window_width)**() const;


Returns the width of the window. 

### window_height()

> **[window_height](/reference/Classes/classp6_1_1_context#window_height)**() const;


Returns the height of the window. 

### window_is_focused()

> **[window_is_focused](/reference/Classes/classp6_1_1_context#window_is_focused)**() const;


Returns true iff the window is currently focused. 

### maximize_window()

> **[maximize_window](/reference/Classes/classp6_1_1_context#maximize_window)**();


Maximizes the window. 

### time()

> **[time](/reference/Classes/classp6_1_1_context#time)**() const;


Returns the time in seconds since the creation of the [Context](/reference/Classes/classp6_1_1_context). 

### delta_time()

> **[delta_time](/reference/Classes/classp6_1_1_context#delta_time)**() const;


Returns the time in seconds since the last [update()](/reference/Classes/classp6_1_1_context#update) call (or 0 if this is the first update) 

### set_time_mode_realtime()

> **[set_time_mode_realtime](/reference/Classes/classp6_1_1_context#set_time_mode_realtime)**();


Sets the time_mode as realtime. 

This means that what is returned by [time()](/reference/Classes/classp6_1_1_context#time) and [delta_time()](/reference/Classes/classp6_1_1_context#delta_time) corresponds to the actual time that elapsed in the real world. This is ideal when you want to do realtime animation and interactive sketches. 


### set_time_mode_fixedstep()

> **[set_time_mode_fixedstep](/reference/Classes/classp6_1_1_context#set_time_mode_fixedstep)**();


Sets the time_mode as fixedstep. 

This means that what is returned by [time()](/reference/Classes/classp6_1_1_context#time) and [delta_time()](/reference/Classes/classp6_1_1_context#delta_time) corresponds to an ideal world where there is exactly 1/framerate seconds between each updates. This is ideal when you are exporting a video and don't want the long export time to influence your animation. 


### run()

> **[run](/reference/Modules/group__update-flow#run)**();


Starts the [update()](/reference/Classes/classp6_1_1_context#update) loop. 

[update()](/reference/Classes/classp6_1_1_context#update) will be called repeatedly, until you close the window or call [exit()](/reference/Modules/group__update-flow#exit)


### exit()

> **[exit](/reference/Modules/group__update-flow#exit)**();


Stops the [run()](/reference/Modules/group__update-flow#run) loop. 

This is the programatic equivalent of a user closing the window. 


### pause()

> **[pause](/reference/Modules/group__update-flow#pause)**();


Pauses the [run()](/reference/Modules/group__update-flow#run) loop. 

No [update()](/reference/Classes/classp6_1_1_context#update) will be called, until you call [resume()](/reference/Modules/group__update-flow#resume). User inputs are still processed. 


### resume()

> **[resume](/reference/Modules/group__update-flow#resume)**();


Starts the [run()](/reference/Modules/group__update-flow#run) loop again if it was paused with [pause()](/reference/Modules/group__update-flow#pause). 

### is_paused()

> **[is_paused](/reference/Modules/group__update-flow#is_paused)**() const;


Returns true iff we are currently paused. See [pause()](/reference/Modules/group__update-flow#pause) and [resume()](/reference/Modules/group__update-flow#resume). 



### update

```cpp
std::function< void()> update = []() {};
```

This function is called repeatedly, once every 1/framerate() seconds (or at least it will try, if your update code is too slow then the next updates will necessarily be delayed). 

### mouse_moved

```cpp
std::function< void(MouseMove)> mouse_moved = [](MouseMove) {};
```

This function is called whenever the mouse is moved. 

### mouse_dragged

```cpp
std::function< void(MouseDrag)> mouse_dragged = [](MouseDrag) {};
```

This function is called whenever the mouse is dragged. 

### mouse_pressed

```cpp
std::function< void(MouseButton)> mouse_pressed = [](MouseButton) {};
```

This function is called whenever a mouse button is pressed. 

### mouse_released

```cpp
std::function< void(MouseButton)> mouse_released = [](MouseButton) {};
```

This function is called whenever a mouse button is released. 

### mouse_scrolled

```cpp
std::function< void(MouseScroll)> mouse_scrolled = [](MouseScroll) {};
```

This function is called whenever the mouse wheel is scrolled. 

### key_pressed

```cpp
std::function< void(KeyEvent)> key_pressed = [](KeyEvent) {};
```

This function is called whenever a keyboard key is pressed. 

### key_released

```cpp
std::function< void(KeyEvent)> key_released = [](KeyEvent) {};
```

This function is called whenever a keyboard key is released. 

### key_repeated

```cpp
std::function< void(KeyEvent)> key_repeated = [](KeyEvent) {};
```

This function is called repeatedly whenever a keyboard key is held. 

(NB: this only starts after holding the key for a little while. The axact behaviour is OS-specific) /!\ This is less than ideal to do things like handling the movement of a character. You should rather do, in your update function: ```cpp

if (p6.is_held(PhysicalKey::W)) { // TODO implement is_held and PhysicalKey and LogicalKey
    character.move_forward(p6.delta_time());
}
```


### on_error

```cpp
std::function< void(std::string &&)> on_error = [](std::string&& error_message) {
        throw std::runtime_error{error_message};
    };
```

This function is called whenever an error occurs. 

### fill

```cpp
Color fill {1.f, 1.f, 1.f, 0.5f};
```


### stroke

```cpp
Color stroke {0.f, 0.f, 0.f};
```


### stroke_weight

```cpp
float stroke_weight = 0.01f;
```


-------------------------------

Updated on 2022 January 08