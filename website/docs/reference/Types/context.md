---
title: p6::Context

sidebar_position: 1
---

# p6::Context







## Summary

|                | Name           |
| -------------- | -------------- |
| | **[Context](/reference/Types/context#context)**(WindowCreationParams window_creation_params ={}) |
| void | **[background](/reference/drawing#background)**([Color](/reference/Types/color) color) const<br/>Sets the color and alpha of each pixel of the canvas.  |
| void | **[rectangle](/reference/drawing#rectangle)**([Transform2D](/reference/Types/transform2_d) transform) const<br/>Draws a rectangle.  |
| void | **[circle](/reference/drawing#circle)**([Center](/reference/Types/center) center, [Radius](/reference/Types/radius) radius) const<br/>Draws a circle.  |
| void | **[ellipse](/reference/drawing#ellipse)**([Center](/reference/Types/center) center, [Radii](/reference/Types/radii) radii, [Rotation](/reference/Types/rotation) rotation) const<br/>Draws an ellipse.  |
| void | **[ellipse](/reference/drawing#ellipse)**([Center](/reference/Types/center) center, [Radius](/reference/Types/radius) radius) const |
| void | **[ellipse](/reference/drawing#ellipse)**([Transform2D](/reference/Types/transform2_d) transform) const |
| void | **[image](/reference/drawing#image)**(const [Image](/reference/Types/image) & img, [Transform2D](/reference/Types/transform2_d) transform) const<br/>Draws an image.  |
| void | **[render_to_image](/reference/Types/context#render_to_image)**(const [Image](/reference/Types/image) & image) const<br/>Sets the image where all the drawing commands will happen on.  |
| void | **[render_to_screen](/reference/Types/context#render_to_screen)**() const<br/>Reset p6 to render to the screen.  |
| glm::vec2 | **[mouse](/reference/Types/context#mouse)**() const<br/>Returns the current mouse position.  |
| glm::vec2 | **[mouse_delta](/reference/Types/context#mouse_delta)**() const<br/>Returns the movement of the mouse since last [update()](/reference/Types/context#update) |
| bool | **[mouse_is_in_window](/reference/Types/context#mouse_is_in_window)**() const<br/>Returns true iff the coordinates returned by [mouse()](/reference/Types/context#mouse) correspond to a position inside the window, and the window is focused.  |
| bool | **[ctrl](/reference/Types/context#ctrl)**() const<br/>Returns true iff the CTRL key is pressed (or CMD on Mac)  |
| bool | **[shift](/reference/Types/context#shift)**() const<br/>Returns true iff the SHIFT key is pressed.  |
| bool | **[alt](/reference/Types/context#alt)**() const<br/>Returns true iff the ALT key is pressed.  |
| float | **[aspect_ratio](/reference/Types/context#aspect_ratio)**() const<br/>Returns the aspect ratio of the window (a.k.a. width / height)  |
| ImageSize | **[window_size](/reference/Types/context#window_size)**() const<br/>Returns the size of the window.  |
| int | **[window_width](/reference/Types/context#window_width)**() const<br/>Returns the width of the window.  |
| int | **[window_height](/reference/Types/context#window_height)**() const<br/>Returns the height of the window.  |
| bool | **[window_is_focused](/reference/Types/context#window_is_focused)**() const<br/>Returns true iff the window is currently focused.  |
| void | **[maximize_window](/reference/Types/context#maximize_window)**()<br/>Maximizes the window.  |
| float | **[time](/reference/Types/context#time)**() const<br/>Returns the time in seconds since the creation of the [Context](/reference/Types/context).  |
| float | **[delta_time](/reference/Types/context#delta_time)**() const<br/>Returns the time in seconds since the last [update()](/reference/Types/context#update) call (or 0 if this is the first update)  |
| void | **[set_time_mode_realtime](/reference/Types/context#set_time_mode_realtime)**()<br/>Sets the time_mode as realtime.  |
| void | **[set_time_mode_fixedstep](/reference/Types/context#set_time_mode_fixedstep)**()<br/>Sets the time_mode as fixedstep.  |
| void | **[start](/reference/update-flow#start)**()<br/>Starts the [update()](/reference/Types/context#update) loop.  |
| void | **[stop](/reference/update-flow#stop)**()<br/>Stops the [update()](/reference/Types/context#update) loop.  |
| void | **[pause](/reference/update-flow#pause)**()<br/>Pauses the [update()](/reference/Types/context#update) loop.  |
| void | **[resume](/reference/update-flow#resume)**()<br/>Resumes the [update()](/reference/Types/context#update) loop if it was paused with [pause()](/reference/update-flow#pause).  |
| bool | **[is_paused](/reference/update-flow#is_paused)**() const<br/>Returns true iff we are currently paused. See [pause()](/reference/update-flow#pause) and [resume()](/reference/update-flow#resume).  |
| std::function< void()> | **[update](/reference/Types/context#update)** <br/>This function is called repeatedly, once every 1/framerate() seconds (or at least it will try, if your update code is too slow then the next updates will necessarily be delayed).  |
| std::function< void([MouseMove](/reference/Types/mouse_move))> | **[mouse_moved](/reference/Types/context#mouse_moved)** <br/>This function is called whenever the mouse is moved.  |
| std::function< void([MouseDrag](/reference/Types/mouse_drag))> | **[mouse_dragged](/reference/Types/context#mouse_dragged)** <br/>This function is called whenever the mouse is dragged.  |
| std::function< void([MouseButton](/reference/Types/mouse_button))> | **[mouse_pressed](/reference/Types/context#mouse_pressed)** <br/>This function is called whenever a mouse button is pressed.  |
| std::function< void([MouseButton](/reference/Types/mouse_button))> | **[mouse_released](/reference/Types/context#mouse_released)** <br/>This function is called whenever a mouse button is released.  |
| std::function< void([MouseScroll](/reference/Types/mouse_scroll))> | **[mouse_scrolled](/reference/Types/context#mouse_scrolled)** <br/>This function is called whenever the mouse wheel is scrolled.  |
| std::function< void([KeyEvent](/reference/Types/key_event))> | **[key_pressed](/reference/Types/context#key_pressed)** <br/>This function is called whenever a keyboard key is pressed.  |
| std::function< void([KeyEvent](/reference/Types/key_event))> | **[key_released](/reference/Types/context#key_released)** <br/>This function is called whenever a keyboard key is released.  |
| std::function< void([KeyEvent](/reference/Types/key_event))> | **[key_repeated](/reference/Types/context#key_repeated)** <br/>This function is called repeatedly whenever a keyboard key is held.  |
| std::function< void(std::string &&)> | **[on_error](/reference/Types/context#on_error)** <br/>This function is called whenever an error occurs.  |
| [Color](/reference/Types/color) | **[fill](/reference/drawing#fill)**  |
| [Color](/reference/Types/color) | **[stroke](/reference/drawing#stroke)**  |
| float | **[stroke_weight](/reference/drawing#stroke_weight)**  |

## Details


### Context()

> **[Context](/reference/Types/context#context)**(WindowCreationParams window_creation_params ={});



### background()

> **[background](/reference/drawing#background)**([Color](/reference/Types/color) color) const;


Sets the color and alpha of each pixel of the canvas. 

NB: No blending is applied; even if you specify an alpha of 0.5 the old canvas is completely erased. This means that setting an alpha here doesn't matter much. It is only meaningful if you export the canvas as a png, or if you later try to blend the canvas on top of another image. 


### rectangle()

> **[rectangle](/reference/drawing#rectangle)**([Transform2D](/reference/Types/transform2_d) transform) const;


Draws a rectangle. 

**Parameters**: 

  * **params** Shape of the rect




```cpp
p6.fill = {0.f, 0.8f, 0.3f};
p6.rectangle({});
```


### circle()

> **[circle](/reference/drawing#circle)**([Center](/reference/Types/center) center, [Radius](/reference/Types/radius) radius) const;


Draws a circle. 

### ellipse()

> **[ellipse](/reference/drawing#ellipse)**([Center](/reference/Types/center) center, [Radii](/reference/Types/radii) radii, [Rotation](/reference/Types/rotation) rotation) const;


Draws an ellipse. 

### ellipse()

> **[ellipse](/reference/drawing#ellipse)**([Center](/reference/Types/center) center, [Radius](/reference/Types/radius) radius) const;



### ellipse()

> **[ellipse](/reference/drawing#ellipse)**([Transform2D](/reference/Types/transform2_d) transform) const;



### image()

> **[image](/reference/drawing#image)**(const [Image](/reference/Types/image) & img, [Transform2D](/reference/Types/transform2_d) transform) const;


Draws an image. 

### render_to_image()

> **[render_to_image](/reference/Types/context#render_to_image)**(const [Image](/reference/Types/image) & image) const;


Sets the image where all the drawing commands will happen on. 

### render_to_screen()

> **[render_to_screen](/reference/Types/context#render_to_screen)**() const;


Reset p6 to render to the screen. 

### mouse()

> **[mouse](/reference/Types/context#mouse)**() const;


Returns the current mouse position. 

### mouse_delta()

> **[mouse_delta](/reference/Types/context#mouse_delta)**() const;


Returns the movement of the mouse since last [update()](/reference/Types/context#update)

### mouse_is_in_window()

> **[mouse_is_in_window](/reference/Types/context#mouse_is_in_window)**() const;


Returns true iff the coordinates returned by [mouse()](/reference/Types/context#mouse) correspond to a position inside the window, and the window is focused. 

### ctrl()

> **[ctrl](/reference/Types/context#ctrl)**() const;


Returns true iff the CTRL key is pressed (or CMD on Mac) 

### shift()

> **[shift](/reference/Types/context#shift)**() const;


Returns true iff the SHIFT key is pressed. 

### alt()

> **[alt](/reference/Types/context#alt)**() const;


Returns true iff the ALT key is pressed. 

### aspect_ratio()

> **[aspect_ratio](/reference/Types/context#aspect_ratio)**() const;


Returns the aspect ratio of the window (a.k.a. width / height) 

### window_size()

> **[window_size](/reference/Types/context#window_size)**() const;


Returns the size of the window. 

### window_width()

> **[window_width](/reference/Types/context#window_width)**() const;


Returns the width of the window. 

### window_height()

> **[window_height](/reference/Types/context#window_height)**() const;


Returns the height of the window. 

### window_is_focused()

> **[window_is_focused](/reference/Types/context#window_is_focused)**() const;


Returns true iff the window is currently focused. 

### maximize_window()

> **[maximize_window](/reference/Types/context#maximize_window)**();


Maximizes the window. 

### time()

> **[time](/reference/Types/context#time)**() const;


Returns the time in seconds since the creation of the [Context](/reference/Types/context). 

### delta_time()

> **[delta_time](/reference/Types/context#delta_time)**() const;


Returns the time in seconds since the last [update()](/reference/Types/context#update) call (or 0 if this is the first update) 

### set_time_mode_realtime()

> **[set_time_mode_realtime](/reference/Types/context#set_time_mode_realtime)**();


Sets the time_mode as realtime. 

This means that what is returned by [time()](/reference/Types/context#time) and [delta_time()](/reference/Types/context#delta_time) corresponds to the actual time that elapsed in the real world. This is ideal when you want to do realtime animation and interactive sketches. 


### set_time_mode_fixedstep()

> **[set_time_mode_fixedstep](/reference/Types/context#set_time_mode_fixedstep)**();


Sets the time_mode as fixedstep. 

This means that what is returned by [time()](/reference/Types/context#time) and [delta_time()](/reference/Types/context#delta_time) corresponds to an ideal world where there is exactly 1/framerate seconds between each updates. This is ideal when you are exporting a video and don't want the long export time to influence your animation. 


### start()

> **[start](/reference/update-flow#start)**();


Starts the [update()](/reference/Types/context#update) loop. 

[update()](/reference/Types/context#update) will be called repeatedly, until you close the window or call [stop()](/reference/update-flow#stop)


### stop()

> **[stop](/reference/update-flow#stop)**();


Stops the [update()](/reference/Types/context#update) loop. 

This is the programatic equivalent of a user closing the window. 


### pause()

> **[pause](/reference/update-flow#pause)**();


Pauses the [update()](/reference/Types/context#update) loop. 

No [update()](/reference/Types/context#update) will be called, until you call [resume()](/reference/update-flow#resume). User inputs are still processed. 


### resume()

> **[resume](/reference/update-flow#resume)**();


Resumes the [update()](/reference/Types/context#update) loop if it was paused with [pause()](/reference/update-flow#pause). 

It has no effect if the loop was already playing. 


### is_paused()

> **[is_paused](/reference/update-flow#is_paused)**() const;


Returns true iff we are currently paused. See [pause()](/reference/update-flow#pause) and [resume()](/reference/update-flow#resume). 



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

Updated on 2022 February 01