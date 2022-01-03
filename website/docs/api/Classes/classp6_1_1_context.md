---
title: p6::Context

---

# p6::Context





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Context](/api/Classes/classp6_1_1_context#function-context)**(WindowCreationParams window_creation_params ={}) |
| void | **[background](/api/Classes/classp6_1_1_context#function-background)**([Color](/api/Classes/classp6_1_1_color) color) const |
| void | **[rectangle](/api/Classes/classp6_1_1_context#function-rectangle)**([RectangleParams](/api/Classes/structp6_1_1_rectangle_params) params) const<br/>Draws a rectangle.  |
| void | **[ellipse](/api/Classes/classp6_1_1_context#function-ellipse)**([RectangleParams](/api/Classes/structp6_1_1_rectangle_params) params) const<br/>Draws an ellipse.  |
| void | **[image](/api/Classes/classp6_1_1_context#function-image)**(const [Image](/api/Classes/classp6_1_1_image) & img, [RectangleParams](/api/Classes/structp6_1_1_rectangle_params) params) const<br/>Draws an image.  |
| void | **[render_to_image](/api/Classes/classp6_1_1_context#function-render-to-image)**(const [Image](/api/Classes/classp6_1_1_image) & image) const<br/>Sets the image where all the drawing commands will happen on.  |
| void | **[render_to_screen](/api/Classes/classp6_1_1_context#function-render-to-screen)**() const<br/>Reset p6 to render to the screen.  |
| glm::vec2 | **[mouse](/api/Classes/classp6_1_1_context#function-mouse)**() const<br/>Returns the current mouse position.  |
| glm::vec2 | **[mouse_delta](/api/Classes/classp6_1_1_context#function-mouse-delta)**() const<br/>Returns the movement of the mouse since last [update()](/api/Classes/classp6_1_1_context#variable-update) |
| bool | **[mouse_is_in_window](/api/Classes/classp6_1_1_context#function-mouse-is-in-window)**() const<br/>Returns true iff the coordinates returned by [mouse()](/api/Classes/classp6_1_1_context#function-mouse) correspond to a position inside the window, and the window is focused.  |
| bool | **[ctrl](/api/Classes/classp6_1_1_context#function-ctrl)**() const<br/>Returns true iff the CTRL key is pressed (or CMD on Mac)  |
| bool | **[shift](/api/Classes/classp6_1_1_context#function-shift)**() const<br/>Returns true iff the SHIFT key is pressed.  |
| bool | **[alt](/api/Classes/classp6_1_1_context#function-alt)**() const<br/>Returns true iff the ALT key is pressed.  |
| float | **[aspect_ratio](/api/Classes/classp6_1_1_context#function-aspect-ratio)**() const<br/>Returns the aspect ratio of the window (a.k.a. width / height)  |
| ImageSize | **[window_size](/api/Classes/classp6_1_1_context#function-window-size)**() const<br/>Returns the size of the window.  |
| int | **[window_width](/api/Classes/classp6_1_1_context#function-window-width)**() const<br/>Returns the width of the window.  |
| int | **[window_height](/api/Classes/classp6_1_1_context#function-window-height)**() const<br/>Returns the height of the window.  |
| bool | **[window_is_focused](/api/Classes/classp6_1_1_context#function-window-is-focused)**() const<br/>Returns true iff the window is currently focused.  |
| void | **[maximize_window](/api/Classes/classp6_1_1_context#function-maximize-window)**()<br/>Maximizes the window.  |
| float | **[time](/api/Classes/classp6_1_1_context#function-time)**() const<br/>Returns the time in seconds since the creation of the [Context](/api/Classes/classp6_1_1_context).  |
| float | **[delta_time](/api/Classes/classp6_1_1_context#function-delta-time)**() const<br/>Returns the time in seconds since the last [update()](/api/Classes/classp6_1_1_context#variable-update) call (or 0 if this is the first update)  |
| void | **[set_time_mode_realtime](/api/Classes/classp6_1_1_context#function-set-time-mode-realtime)**() |
| void | **[set_time_mode_fixedstep](/api/Classes/classp6_1_1_context#function-set-time-mode-fixedstep)**() |
| void | **[run](/api/Classes/classp6_1_1_context#function-run)**()<br/>Starts the update loop: [update()](/api/Classes/classp6_1_1_context#variable-update) will be called repeatedly, until you close the window or call exit.  |
| void | **[exit](/api/Classes/classp6_1_1_context#function-exit)**() const<br/>Stops the [run()](/api/Classes/classp6_1_1_context#function-run) loop.  |
| void | **[no_loop](/api/Classes/classp6_1_1_context#function-no-loop)**()<br/>Pauses the [run()](/api/Classes/classp6_1_1_context#function-run) loop. No [update()](/api/Classes/classp6_1_1_context#variable-update) will be called, until you call loop. User inputs are still processed.  |
| void | **[loop](/api/Classes/classp6_1_1_context#function-loop)**()<br/>Starts the [run()](/api/Classes/classp6_1_1_context#function-run) loop again if it was paused with [no_loop()](/api/Classes/classp6_1_1_context#function-no-loop) |
| bool | **[is_looping](/api/Classes/classp6_1_1_context#function-is-looping)**() const<br/>Returns true iff we are currently looping. See [loop()](/api/Classes/classp6_1_1_context#function-loop) and [no_loop()](/api/Classes/classp6_1_1_context#function-no-loop) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::function< void()> | **[update](/api/Classes/classp6_1_1_context#variable-update)** <br/>This function is called repeatedly, once every 1/framerate() seconds (or at least it will try, if your update code is too slow then the next updates will necessarily be delayed).  |
| std::function< void([MouseMove](/api/Classes/structp6_1_1_mouse_move))> | **[mouse_moved](/api/Classes/classp6_1_1_context#variable-mouse-moved)** <br/>This function is called whenever the mouse is moved.  |
| std::function< void([MouseDrag](/api/Classes/structp6_1_1_mouse_drag))> | **[mouse_dragged](/api/Classes/classp6_1_1_context#variable-mouse-dragged)** <br/>This function is called whenever the mouse is dragged.  |
| std::function< void([MouseButton](/api/Classes/structp6_1_1_mouse_button))> | **[mouse_pressed](/api/Classes/classp6_1_1_context#variable-mouse-pressed)** <br/>This function is called whenever a mouse button is pressed.  |
| std::function< void([MouseButton](/api/Classes/structp6_1_1_mouse_button))> | **[mouse_released](/api/Classes/classp6_1_1_context#variable-mouse-released)** <br/>This function is called whenever a mouse button is released.  |
| std::function< void([MouseScroll](/api/Classes/structp6_1_1_mouse_scroll))> | **[mouse_scrolled](/api/Classes/classp6_1_1_context#variable-mouse-scrolled)** <br/>This function is called whenever the mouse wheel is scrolled.  |
| std::function< void([KeyEvent](/api/Classes/structp6_1_1_key_event))> | **[key_pressed](/api/Classes/classp6_1_1_context#variable-key-pressed)** <br/>This function is called whenever a keyboard key is pressed.  |
| std::function< void([KeyEvent](/api/Classes/structp6_1_1_key_event))> | **[key_released](/api/Classes/classp6_1_1_context#variable-key-released)** <br/>This function is called whenever a keyboard key is released.  |
| std::function< void([KeyEvent](/api/Classes/structp6_1_1_key_event))> | **[key_repeated](/api/Classes/classp6_1_1_context#variable-key-repeated)** <br/>This function is called whenever a keyboard key is held for a little while.  |
| std::function< void(std::string &&)> | **[on_error](/api/Classes/classp6_1_1_context#variable-on-error)** <br/>This function is called whenever an error occurs.  |
| [Color](/api/Classes/classp6_1_1_color) | **[fill](/api/Classes/classp6_1_1_context#variable-fill)**  |
| [Color](/api/Classes/classp6_1_1_color) | **[stroke](/api/Classes/classp6_1_1_context#variable-stroke)**  |
| float | **[stroke_weight](/api/Classes/classp6_1_1_context#variable-stroke-weight)**  |

## Friends

|                | Name           |
| -------------- | -------------- |
| void | **[window_size_callback](/api/Classes/classp6_1_1_context#friend-window-size-callback)**(GLFWwindow * window, int width, int height)  |
| void | **[scroll_callback](/api/Classes/classp6_1_1_context#friend-scroll-callback)**(GLFWwindow * window, double x, double y)  |
| void | **[mouse_button_callback](/api/Classes/classp6_1_1_context#friend-mouse-button-callback)**(GLFWwindow * window, int button, int action, int mods)  |
| void | **[key_callback](/api/Classes/classp6_1_1_context#friend-key-callback)**(GLFWwindow * window, int key, int scancode, int action, int mods)  |

## Public Functions Documentation

### function Context

```cpp
Context(
    WindowCreationParams window_creation_params ={}
)
```


### function background

```cpp
void background(
    Color color
) const
```


Sets the color and alpha of each pixel of the canvas. NB: No blending is applied ; even if you specify an alpha of 0.5 the old canvas is completely erased. This means that setting an alpha here doesn't matter much. It is only meaningful if you export the canvas as a png, or if you try to blend the canvas on top of another image. 


### function rectangle

```cpp
void rectangle(
    RectangleParams params
) const
```

Draws a rectangle. 

### function ellipse

```cpp
void ellipse(
    RectangleParams params
) const
```

Draws an ellipse. 

### function image

```cpp
void image(
    const Image & img,
    RectangleParams params
) const
```

Draws an image. 

### function render_to_image

```cpp
void render_to_image(
    const Image & image
) const
```

Sets the image where all the drawing commands will happen on. 

### function render_to_screen

```cpp
void render_to_screen() const
```

Reset p6 to render to the screen. 

### function mouse

```cpp
glm::vec2 mouse() const
```

Returns the current mouse position. 

### function mouse_delta

```cpp
glm::vec2 mouse_delta() const
```

Returns the movement of the mouse since last [update()](/api/Classes/classp6_1_1_context#variable-update)

### function mouse_is_in_window

```cpp
bool mouse_is_in_window() const
```

Returns true iff the coordinates returned by [mouse()](/api/Classes/classp6_1_1_context#function-mouse) correspond to a position inside the window, and the window is focused. 

### function ctrl

```cpp
bool ctrl() const
```

Returns true iff the CTRL key is pressed (or CMD on Mac) 

### function shift

```cpp
bool shift() const
```

Returns true iff the SHIFT key is pressed. 

### function alt

```cpp
bool alt() const
```

Returns true iff the ALT key is pressed. 

### function aspect_ratio

```cpp
float aspect_ratio() const
```

Returns the aspect ratio of the window (a.k.a. width / height) 

### function window_size

```cpp
ImageSize window_size() const
```

Returns the size of the window. 

### function window_width

```cpp
int window_width() const
```

Returns the width of the window. 

### function window_height

```cpp
int window_height() const
```

Returns the height of the window. 

### function window_is_focused

```cpp
bool window_is_focused() const
```

Returns true iff the window is currently focused. 

### function maximize_window

```cpp
void maximize_window()
```

Maximizes the window. 

### function time

```cpp
float time() const
```

Returns the time in seconds since the creation of the [Context](/api/Classes/classp6_1_1_context). 

### function delta_time

```cpp
float delta_time() const
```

Returns the time in seconds since the last [update()](/api/Classes/classp6_1_1_context#variable-update) call (or 0 if this is the first update) 

### function set_time_mode_realtime

```cpp
void set_time_mode_realtime()
```


Sets the time_mode as realtime. This means that what is returned by [time()](/api/Classes/classp6_1_1_context#function-time) and [delta_time()](/api/Classes/classp6_1_1_context#function-delta-time) corresponds to the actual time that elapsed in the real world. This is ideal when you want to do realtime animation and interactive sketches. 


### function set_time_mode_fixedstep

```cpp
void set_time_mode_fixedstep()
```


Sets the time_mode as fixedstep. This means that what is returned by [time()](/api/Classes/classp6_1_1_context#function-time) and [delta_time()](/api/Classes/classp6_1_1_context#function-delta-time) corresponds to an ideal world where there is exactly 1/framerate seconds between each updates. This is ideal when you are exporting a video and don't want the long export time to influence your animation. 


### function run

```cpp
void run()
```

Starts the update loop: [update()](/api/Classes/classp6_1_1_context#variable-update) will be called repeatedly, until you close the window or call exit. 

### function exit

```cpp
void exit() const
```

Stops the [run()](/api/Classes/classp6_1_1_context#function-run) loop. 

### function no_loop

```cpp
void no_loop()
```

Pauses the [run()](/api/Classes/classp6_1_1_context#function-run) loop. No [update()](/api/Classes/classp6_1_1_context#variable-update) will be called, until you call loop. User inputs are still processed. 

### function loop

```cpp
void loop()
```

Starts the [run()](/api/Classes/classp6_1_1_context#function-run) loop again if it was paused with [no_loop()](/api/Classes/classp6_1_1_context#function-no-loop)

### function is_looping

```cpp
bool is_looping() const
```

Returns true iff we are currently looping. See [loop()](/api/Classes/classp6_1_1_context#function-loop) and [no_loop()](/api/Classes/classp6_1_1_context#function-no-loop)

## Public Attributes Documentation

### variable update

```cpp
std::function< void()> update = []() {};
```

This function is called repeatedly, once every 1/framerate() seconds (or at least it will try, if your update code is too slow then the next updates will necessarily be delayed). 

### variable mouse_moved

```cpp
std::function< void(MouseMove)> mouse_moved = [](MouseMove) {};
```

This function is called whenever the mouse is moved. 

### variable mouse_dragged

```cpp
std::function< void(MouseDrag)> mouse_dragged = [](MouseDrag) {};
```

This function is called whenever the mouse is dragged. 

### variable mouse_pressed

```cpp
std::function< void(MouseButton)> mouse_pressed = [](MouseButton) {};
```

This function is called whenever a mouse button is pressed. 

### variable mouse_released

```cpp
std::function< void(MouseButton)> mouse_released = [](MouseButton) {};
```

This function is called whenever a mouse button is released. 

### variable mouse_scrolled

```cpp
std::function< void(MouseScroll)> mouse_scrolled = [](MouseScroll) {};
```

This function is called whenever the mouse wheel is scrolled. 

### variable key_pressed

```cpp
std::function< void(KeyEvent)> key_pressed = [](KeyEvent) {};
```

This function is called whenever a keyboard key is pressed. 

### variable key_released

```cpp
std::function< void(KeyEvent)> key_released = [](KeyEvent) {};
```

This function is called whenever a keyboard key is released. 

### variable key_repeated

```cpp
std::function< void(KeyEvent)> key_repeated = [](KeyEvent) {};
```

This function is called whenever a keyboard key is held for a little while. 

### variable on_error

```cpp
std::function< void(std::string &&)> on_error = [](std::string&& error_message) {
        throw std::runtime_error{error_message};
    };
```

This function is called whenever an error occurs. 

### variable fill

```cpp
Color fill {1.f, 1.f, 1.f, 0.5f};
```


### variable stroke

```cpp
Color stroke {0.f, 0.f, 0.f};
```


### variable stroke_weight

```cpp
float stroke_weight = 0.01f;
```


## Friends

### friend window_size_callback

```cpp
friend void window_size_callback(
    GLFWwindow * window,

    int width,

    int height
);
```


### friend scroll_callback

```cpp
friend void scroll_callback(
    GLFWwindow * window,

    double x,

    double y
);
```


### friend mouse_button_callback

```cpp
friend void mouse_button_callback(
    GLFWwindow * window,

    int button,

    int action,

    int mods
);
```


### friend key_callback

```cpp
friend void key_callback(
    GLFWwindow * window,

    int key,

    int scancode,

    int action,

    int mods
);
```


-------------------------------

Updated on 2022-01-03 at 19:40:53 +0100