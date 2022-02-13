---
title: p6::Context

sidebar_position: 1
---

# p6::Context







## Summary

|                | Name           |
| -------------- | -------------- |
| | **[Context](/reference/Types/context#context)**(`WindowCreationParams` window_creation_params = {}) |
| void | **[background](/reference/drawing#background)**(`[Color](/reference/Types/color)` color)<br/>Sets the color and alpha of each pixel of the canvas.  |
| void | **[square](/reference/drawing#square)**(`[FullScreen](/reference/Types/full_screen)` )<br/>Draws a square.  |
| void | **[square](/reference/drawing#square)**(`[Center](/reference/Types/center)` center = {}, `[Radius](/reference/Types/radius)` radius = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[square](/reference/drawing#square)**(`[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Radius](/reference/Types/radius)` radius = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[square](/reference/drawing#square)**(`[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Radius](/reference/Types/radius)` radius = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[square](/reference/drawing#square)**(`[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Radius](/reference/Types/radius)` radius = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[square](/reference/drawing#square)**(`[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Radius](/reference/Types/radius)` radius = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[rectangle](/reference/drawing#rectangle)**(`[FullScreen](/reference/Types/full_screen)`  = {})<br/>Draws a rectangle.  |
| void | **[rectangle](/reference/drawing#rectangle)**(`[Center](/reference/Types/center)` center, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[rectangle](/reference/drawing#rectangle)**(`[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[rectangle](/reference/drawing#rectangle)**(`[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[rectangle](/reference/drawing#rectangle)**(`[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[rectangle](/reference/drawing#rectangle)**(`[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[rectangle](/reference/drawing#rectangle)**(`[Transform2D](/reference/Types/transform2_d)` transform) |
| void | **[circle](/reference/drawing#circle)**(`[FullScreen](/reference/Types/full_screen)` )<br/>Draws a circle.  |
| void | **[circle](/reference/drawing#circle)**(`[Center](/reference/Types/center)` center = {}, `[Radius](/reference/Types/radius)` radius = {}) |
| void | **[ellipse](/reference/drawing#ellipse)**(`[FullScreen](/reference/Types/full_screen)`  = {})<br/>Draws an ellipse.  |
| void | **[ellipse](/reference/drawing#ellipse)**(`[Center](/reference/Types/center)` center, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[ellipse](/reference/drawing#ellipse)**(`[Transform2D](/reference/Types/transform2_d)` transform) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[Center](/reference/Types/center)` center, `[RadiusX](/reference/Types/radius_x)` radiusX = {}, `[Rotation](/reference/Types/angle)` rotation = {})<br/>Draws an image. This will respect the aspect ratio of the image.  |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[Center](/reference/Types/center)` center, `[RadiusY](/reference/Types/radius_y)` radiusY = {}, `[Rotation](/reference/Types/angle)` rotation = {})<br/>Draws an image. This will respect the aspect ratio of the image.  |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[FitX](/reference/Types/fit_x)` )<br/>Draws an image as big as possible on the screen. This will respect the aspect ratio of the image.  |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[FitY](/reference/Types/fit_y)`  = {}) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[FullScreen](/reference/Types/full_screen)` )<br/>Draws an image that takes the entire window. :warning: This might distort the image if the window doesn't have the same aspect ratio as the image.  |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[Center](/reference/Types/center)` center, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {})<br/>Draws an image. :warning: This might distort the image if radii doesn't have the same aspect ratio as the image.  |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[Transform2D](/reference/Types/transform2_d)` transform) |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[FullScreen](/reference/Types/full_screen)`  = {})<br/>Draws a rectangle using a custom fragment shader.  |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[Center](/reference/Types/center)` center, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[square_with_shader](/reference/drawing#square_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[Center](/reference/Types/center)` center = {}, `[Radius](/reference/Types/radius)` radius = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[square_with_shader](/reference/drawing#square_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Radius](/reference/Types/radius)` radius = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[square_with_shader](/reference/drawing#square_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Radius](/reference/Types/radius)` radius = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[square_with_shader](/reference/drawing#square_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Radius](/reference/Types/radius)` radius = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[square_with_shader](/reference/drawing#square_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Radius](/reference/Types/radius)` radius = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[Transform2D](/reference/Types/transform2_d)` transform) |
| void | **[render_to_image](/reference/rendering-destination#render_to_image)**(`[Image](/reference/Types/image) &` image)<br/>Sets the image where all the drawing commands will happen on.  |
| void | **[render_to_screen](/reference/rendering-destination#render_to_screen)**()<br/>Reset the [Context](/reference/Types/context) to render to the screen.  |
| glm::vec2 | **[mouse](/reference/input#mouse)**() const<br/>Returns the current mouse position.  |
| glm::vec2 | **[mouse_delta](/reference/input#mouse_delta)**() const<br/>Returns the movement of the mouse since last [update()](/reference/events#update).  |
| bool | **[mouse_is_in_window](/reference/input#mouse_is_in_window)**() const<br/>Returns true iff the window is focused and the coordinates returned by [mouse()](/reference/input#mouse) correspond to a position inside the window.  |
| bool | **[ctrl](/reference/input#ctrl)**() const<br/>Returns true iff the CTRL key is pressed (or CMD on Mac)  |
| bool | **[shift](/reference/input#shift)**() const<br/>Returns true iff the SHIFT key is pressed.  |
| bool | **[alt](/reference/input#alt)**() const<br/>Returns true iff the ALT key is pressed.  |
| float | **[aspect_ratio](/reference/window#aspect_ratio)**() const<br/>Returns the aspect ratio of the window (a.k.a. width / height).  |
| ImageSize | **[window_size](/reference/window#window_size)**() const<br/>Returns the size of the window (width and height).  |
| int | **[window_width](/reference/window#window_width)**() const<br/>Returns the width of the window.  |
| int | **[window_height](/reference/window#window_height)**() const<br/>Returns the height of the window.  |
| bool | **[window_is_focused](/reference/window#window_is_focused)**() const<br/>Returns true iff the window is currently focused.  |
| void | **[maximize_window](/reference/window#maximize_window)**()<br/>Maximizes the window.  |
| void | **[minimize_window](/reference/window#minimize_window)**()<br/>Minimizes the window. Note that while your window is minimized everything will be frozen and no update, event or anything will happen.  |
| void | **[restore_window](/reference/window#restore_window)**()<br/>Restores the window if it is currently maximized. Does nothing otherwise.  |
| bool | **[window_is_maximized](/reference/window#window_is_maximized)**() const<br/>Returns true iff the window is currently maximized.  |
| float | **[time](/reference/time#time)**() const<br/>Returns the time in seconds since the creation of the [Context](/reference/Types/context).  |
| float | **[delta_time](/reference/time#delta_time)**() const<br/>Returns the time in seconds since the last [update()](/reference/events#update) call (or 0 if this is the first update).  |
| void | **[set_time_mode_realtime](/reference/time#set_time_mode_realtime)**()<br/>Sets the time mode as _realtime_.  |
| void | **[set_time_mode_fixedstep](/reference/time#set_time_mode_fixedstep)**(`float` framerate)<br/>Sets the time mode as _fixedstep_.  |
| void | **[start](/reference/update-flow#start)**()<br/>Starts the [update()](/reference/events#update) loop.  |
| void | **[stop](/reference/update-flow#stop)**()<br/>Stops the [update()](/reference/events#update) loop.  |
| void | **[pause](/reference/update-flow#pause)**()<br/>Pauses the [update()](/reference/events#update) loop.  |
| void | **[resume](/reference/update-flow#resume)**()<br/>Resumes the [update()](/reference/events#update) loop if it was paused with [pause()](/reference/update-flow#pause).  |
| bool | **[is_paused](/reference/update-flow#is_paused)**() const<br/>Returns true iff the [update()](/reference/events#update) loop is currently paused.  |
| std::function< void()> | **[update](/reference/events#update)** <br/>This function is called repeatedly. The framerate will be capped at your monitors refresh rate (60 frames per second on a typical monitor).  |
| std::function< void([MouseMove](/reference/Types/mouse_move))> | **[mouse_moved](/reference/events#mouse_moved)** <br/>This function is called whenever the mouse is moved.  |
| std::function< void([MouseDrag](/reference/Types/mouse_drag))> | **[mouse_dragged](/reference/events#mouse_dragged)** <br/>This function is called whenever the mouse is dragged.  |
| std::function< void([MouseButton](/reference/Types/mouse_button))> | **[mouse_pressed](/reference/events#mouse_pressed)** <br/>This function is called whenever a mouse button is pressed.  |
| std::function< void([MouseButton](/reference/Types/mouse_button))> | **[mouse_released](/reference/events#mouse_released)** <br/>This function is called whenever a mouse button is released.  |
| std::function< void([MouseScroll](/reference/Types/mouse_scroll))> | **[mouse_scrolled](/reference/events#mouse_scrolled)** <br/>This function is called whenever the mouse wheel is scrolled.  |
| std::function< void([Key](/reference/Types/key))> | **[key_pressed](/reference/events#key_pressed)** <br/>This function is called whenever a keyboard key is pressed.  |
| std::function< void([Key](/reference/Types/key))> | **[key_released](/reference/events#key_released)** <br/>This function is called whenever a keyboard key is released.  |
| std::function< void([Key](/reference/Types/key))> | **[key_repeated](/reference/events#key_repeated)** <br/>This function is called repeatedly whenever a keyboard key is held.  |
| std::function< void(std::string &&)> | **[on_error](/reference/events#on_error)** <br/>This function is called whenever an error occurs.  |
| std::function< void()> | **[window_resized](/reference/events#window_resized)** <br/>This function is called whenever the window is resized.  |
| [Color](/reference/Types/color) | **[fill](/reference/drawing#fill)** <br/>The color that is used for the interior of the shapes.  |
| bool | **[use_fill](/reference/drawing#use_fill)** <br/>Whether the shapes will have an interior.  |
| [Color](/reference/Types/color) | **[stroke](/reference/drawing#stroke)** <br/>The color that is used for the boundary of the shapes.  |
| float | **[stroke_weight](/reference/drawing#stroke_weight)** <br/>The size of the boundary of the shapes.  |
| bool | **[use_stroke](/reference/drawing#use_stroke)** <br/>Whether there will be a boundary on the shape.  |

## Details


### Context()

> **[Context](/reference/Types/context#context)**(`WindowCreationParams` window_creation_params ={});



### background()

> `void` **[background](/reference/drawing#background)**(`[Color](/reference/Types/color)` color);


Sets the color and alpha of each pixel of the canvas. 

NB: No blending is applied; even if you specify an alpha of 0.5 the old canvas is completely erased. This means that setting an alpha here doesn't matter much. It is only meaningful if you export the canvas as a png, or if you later try to blend the canvas on top of another image. 


### square()

> `void` **[square](/reference/drawing#square)**(`[FullScreen](/reference/Types/full_screen)` );


Draws a square. 

### square()

> `void` **[square](/reference/drawing#square)**(`[Center](/reference/Types/center)` center ={}, `[Radius](/reference/Types/radius)` radius ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### square()

> `void` **[square](/reference/drawing#square)**(`[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Radius](/reference/Types/radius)` radius ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### square()

> `void` **[square](/reference/drawing#square)**(`[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Radius](/reference/Types/radius)` radius ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### square()

> `void` **[square](/reference/drawing#square)**(`[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Radius](/reference/Types/radius)` radius ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### square()

> `void` **[square](/reference/drawing#square)**(`[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Radius](/reference/Types/radius)` radius ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`[FullScreen](/reference/Types/full_screen)`  ={});


Draws a rectangle. 

### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`[Center](/reference/Types/center)` center, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`[Transform2D](/reference/Types/transform2_d)` transform);



### circle()

> `void` **[circle](/reference/drawing#circle)**(`[FullScreen](/reference/Types/full_screen)` );


Draws a circle. 

### circle()

> `void` **[circle](/reference/drawing#circle)**(`[Center](/reference/Types/center)` center ={}, `[Radius](/reference/Types/radius)` radius ={});



### ellipse()

> `void` **[ellipse](/reference/drawing#ellipse)**(`[FullScreen](/reference/Types/full_screen)`  ={});


Draws an ellipse. 

### ellipse()

> `void` **[ellipse](/reference/drawing#ellipse)**(`[Center](/reference/Types/center)` center, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### ellipse()

> `void` **[ellipse](/reference/drawing#ellipse)**(`[Transform2D](/reference/Types/transform2_d)` transform);



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[Center](/reference/Types/center)` center, `[RadiusX](/reference/Types/radius_x)` radiusX ={}, `[Rotation](/reference/Types/angle)` rotation ={});


Draws an image. This will respect the aspect ratio of the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[Center](/reference/Types/center)` center, `[RadiusY](/reference/Types/radius_y)` radiusY ={}, `[Rotation](/reference/Types/angle)` rotation ={});


Draws an image. This will respect the aspect ratio of the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[FitX](/reference/Types/fit_x)` );


Draws an image as big as possible on the screen. This will respect the aspect ratio of the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[FitY](/reference/Types/fit_y)`  ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[FullScreen](/reference/Types/full_screen)` );


Draws an image that takes the entire window. :warning: This might distort the image if the window doesn't have the same aspect ratio as the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[Center](/reference/Types/center)` center, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});


Draws an image. :warning: This might distort the image if radii doesn't have the same aspect ratio as the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [Image](/reference/Types/image) &` img, `[Transform2D](/reference/Types/transform2_d)` transform);



### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[FullScreen](/reference/Types/full_screen)`  ={});


Draws a rectangle using a custom fragment shader. 

### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[Center](/reference/Types/center)` center, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### square_with_shader()

> `void` **[square_with_shader](/reference/drawing#square_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[Center](/reference/Types/center)` center ={}, `[Radius](/reference/Types/radius)` radius ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### square_with_shader()

> `void` **[square_with_shader](/reference/drawing#square_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Radius](/reference/Types/radius)` radius ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### square_with_shader()

> `void` **[square_with_shader](/reference/drawing#square_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Radius](/reference/Types/radius)` radius ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### square_with_shader()

> `void` **[square_with_shader](/reference/drawing#square_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Radius](/reference/Types/radius)` radius ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### square_with_shader()

> `void` **[square_with_shader](/reference/drawing#square_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Radius](/reference/Types/radius)` radius ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const [Shader](/reference/Types/shader) &` shader, `[Transform2D](/reference/Types/transform2_d)` transform);



### render_to_image()

> `void` **[render_to_image](/reference/rendering-destination#render_to_image)**(`[Image](/reference/Types/image) &` image);


Sets the image where all the drawing commands will happen on. 

### render_to_screen()

> `void` **[render_to_screen](/reference/rendering-destination#render_to_screen)**();


Reset the [Context](/reference/Types/context) to render to the screen. 

### mouse()

> `glm::vec2` **[mouse](/reference/input#mouse)**() const;


Returns the current mouse position. 

### mouse_delta()

> `glm::vec2` **[mouse_delta](/reference/input#mouse_delta)**() const;


Returns the movement of the mouse since last [update()](/reference/events#update). 

### mouse_is_in_window()

> `bool` **[mouse_is_in_window](/reference/input#mouse_is_in_window)**() const;


Returns true iff the window is focused and the coordinates returned by [mouse()](/reference/input#mouse) correspond to a position inside the window. 

### ctrl()

> `bool` **[ctrl](/reference/input#ctrl)**() const;


Returns true iff the CTRL key is pressed (or CMD on Mac) 

### shift()

> `bool` **[shift](/reference/input#shift)**() const;


Returns true iff the SHIFT key is pressed. 

### alt()

> `bool` **[alt](/reference/input#alt)**() const;


Returns true iff the ALT key is pressed. 

### aspect_ratio()

> `float` **[aspect_ratio](/reference/window#aspect_ratio)**() const;


Returns the aspect ratio of the window (a.k.a. width / height). 

### window_size()

> `ImageSize` **[window_size](/reference/window#window_size)**() const;


Returns the size of the window (width and height). 

### window_width()

> `int` **[window_width](/reference/window#window_width)**() const;


Returns the width of the window. 

### window_height()

> `int` **[window_height](/reference/window#window_height)**() const;


Returns the height of the window. 

### window_is_focused()

> `bool` **[window_is_focused](/reference/window#window_is_focused)**() const;


Returns true iff the window is currently focused. 

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

### time()

> `float` **[time](/reference/time#time)**() const;


Returns the time in seconds since the creation of the [Context](/reference/Types/context). 

### delta_time()

> `float` **[delta_time](/reference/time#delta_time)**() const;


Returns the time in seconds since the last [update()](/reference/events#update) call (or 0 if this is the first update). 

### set_time_mode_realtime()

> `void` **[set_time_mode_realtime](/reference/time#set_time_mode_realtime)**();


Sets the time mode as _realtime_. 

This means that what is returned by [time()](/reference/time#time) and [delta_time()](/reference/time#delta_time) corresponds to the actual time that elapsed in the real world. This is ideal when you want to do realtime animation and interactive sketches. 


### set_time_mode_fixedstep()

> `void` **[set_time_mode_fixedstep](/reference/time#set_time_mode_fixedstep)**(`float` framerate);


Sets the time mode as _fixedstep_. 

This means that what is returned by [time()](/reference/time#time) and [delta_time()](/reference/time#delta_time) corresponds to an ideal world where there is exactly `1/framerate` seconds between each updates. This is ideal when you are exporting a video and don't want the long export time to influence your animation. `framerate` is expressed in frames per second 


### start()

> `void` **[start](/reference/update-flow#start)**();


Starts the [update()](/reference/events#update) loop. 

[update()](/reference/events#update) will be called repeatedly, until you close the window or call [stop()](/reference/update-flow#stop). 


### stop()

> `void` **[stop](/reference/update-flow#stop)**();


Stops the [update()](/reference/events#update) loop. 

This is the programatic equivalent of a user closing the window. 


### pause()

> `void` **[pause](/reference/update-flow#pause)**();


Pauses the [update()](/reference/events#update) loop. 

No [update()](/reference/events#update) will be called, until you call [resume()](/reference/update-flow#resume). User inputs are still processed. 


### resume()

> `void` **[resume](/reference/update-flow#resume)**();


Resumes the [update()](/reference/events#update) loop if it was paused with [pause()](/reference/update-flow#pause). 

It has no effect if the loop was already playing. 


### is_paused()

> `bool` **[is_paused](/reference/update-flow#is_paused)**() const;


Returns true iff the [update()](/reference/events#update) loop is currently paused. 



### update

```cpp
std::function< void()> update = []() {};
```

This function is called repeatedly. The framerate will be capped at your monitors refresh rate (60 frames per second on a typical monitor). 

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
std::function< void(Key)> key_pressed = [](Key) {};
```

This function is called whenever a keyboard key is pressed. 

### key_released

```cpp
std::function< void(Key)> key_released = [](Key) {};
```

This function is called whenever a keyboard key is released. 

### key_repeated

```cpp
std::function< void(Key)> key_repeated = [](Key) {};
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

```cpp
std::function< void(std::string &&)> on_error = [](std::string&& error_message) {
        throw std::runtime_error{error_message};
    };
```

This function is called whenever an error occurs. 

### window_resized

```cpp
std::function< void()> window_resized = []() {};
```

This function is called whenever the window is resized. 

If you call [window_size()](/reference/window#window_size), [window_width()](/reference/window#window_width), [window_height()](/reference/window#window_height) or [aspect_ratio()](/reference/window#aspect_ratio) inside [window_resized()](/reference/events#window_resized) they will already be referring to the new size. 


### fill

```cpp
Color fill {1.f, 1.f, 1.f, 0.5f};
```

The color that is used for the interior of the shapes. 

### use_fill

```cpp
bool use_fill = true;
```

Whether the shapes will have an interior. 

### stroke

```cpp
Color stroke {0.f, 0.f, 0.f};
```

The color that is used for the boundary of the shapes. 

### stroke_weight

```cpp
float stroke_weight = 0.01f;
```

The size of the boundary of the shapes. 

### use_stroke

```cpp
bool use_stroke = true;
```

Whether there will be a boundary on the shape. 

-------------------------------

Updated on 2022 February 13