---
title: p6::Context

sidebar_position: 1
---

# p6::Context







## Summary

|                | Name           |
| -------------- | -------------- |
| | **[Context](/reference/Types/context#context)**(`WindowCreationParams` window_creation_params = {}) |
| | **[Context](/reference/Types/context#context)**(`[Context](/reference/Types/context) &&` ) =default |
| [Context](/reference/Types/context) & | **[operator=](/reference/Types/context#operator=)**(`[Context](/reference/Types/context) &&` ) =default |
| | **[Context](/reference/Types/context#context)**(`const [Context](/reference/Types/context) &` ) =delete |
| [Context](/reference/Types/context) & | **[operator=](/reference/Types/context#operator=)**(`const [Context](/reference/Types/context) &` ) =delete |
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
| void | **[equilateral_triangle](/reference/drawing#equilateral_triangle)**(`[Center](/reference/Types/center)` center, `[Radius](/reference/Types/radius)` radius = {}, `[Rotation](/reference/Types/angle)` rotation = {})<br/>Draws an equilateral triangle. `[Radius]()` is the distance between the `[Center](/reference/Types/center)` and one of the tips of the triangle.  |
| void | **[triangle](/reference/drawing#triangle)**(`[Point2D](/reference/Types/point2_d)` p1, `[Point2D](/reference/Types/point2_d)` p2, `[Point2D](/reference/Types/point2_d)` p3, `[Center](/reference/Types/center)` center = {}, `[Rotation](/reference/Types/angle)` rotation = {})<br/>Draws a triangle between the three points, translated by `[Center](/reference/Types/center)` and rotated by `Rotation`.  |
| void | **[triangle](/reference/drawing#triangle)**(`[Point2D](/reference/Types/point2_d)` p1, `[Point2D](/reference/Types/point2_d)` p2, `[Point2D](/reference/Types/point2_d)` p3, `[Transform2D](/reference/Types/transform2_d)` transform)<br/>Draws a triangle between the three points, and applies the transform to the triangle.  |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[Fit](/reference/Types/fit)`  = {})<br/>Draws an image as big as possible on the screen. This will respect the aspect ratio of the image.  |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[FitX](/reference/Types/fit_x)` ) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[FitY](/reference/Types/fit_y)` ) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[Center](/reference/Types/center)` center, `[RadiusX](/reference/Types/radius_x)` radiusX = {}, `[Rotation](/reference/Types/angle)` rotation = {})<br/>Draws an image. This will respect the aspect ratio of the image.  |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[Center](/reference/Types/center)` center, `[RadiusY](/reference/Types/radius_y)` radiusY = {}, `[Rotation](/reference/Types/angle)` rotation = {})<br/>Draws an image. This will respect the aspect ratio of the image.  |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[FullScreen](/reference/Types/full_screen)` )<br/>Draws an image that takes the entire window. :warning: This might distort the image if the window doesn't have the same aspect ratio as the image.  |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[Center](/reference/Types/center)` center, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {})<br/>Draws an image. :warning: This might distort the image if radii doesn't have the same aspect ratio as the image.  |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Radii](/reference/Types/radii)` radii = {}, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[Transform2D](/reference/Types/transform2_d)` transform) |
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
| void | **[line](/reference/drawing#line)**(`glm::vec2` start, `glm::vec2` end)<br/>Draws a line between two points.  |
| void | **[text](/reference/text#text)**(`const std::u16string &` str, `[Center](/reference/Types/center)` center, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[text](/reference/text#text)**(`const std::u16string &` str, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[text](/reference/text#text)**(`const std::u16string &` str, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[text](/reference/text#text)**(`const std::u16string &` str, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[text](/reference/text#text)**(`const std::u16string &` str, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Rotation](/reference/Types/angle)` rotation = {}) |
| void | **[translate](/reference/transform#translate)**(`glm::vec2` translation)<br/>Applies a translation to all the future drawings. To undo this, see `[push_transform()]()` and `[pop_transform()]()`.  |
| void | **[rotate](/reference/transform#rotate)**(`[p6::Angle](/reference/Types/angle)` angle)<br/>Applies a rotation to all the future drawings. To undo this, see `[push_transform()]()` and `[pop_transform()]()`.  |
| void | **[scale](/reference/transform#scale)**(`glm::vec2` scale_factor)<br/>Applies a scale to all the future drawings. To undo this, see `[push_transform()]()` and `[pop_transform()]()`.  |
| void | **[reset_transform](/reference/transform#reset_transform)**()<br/>Undoes all the translate / rotate / scale / apply_transform / set_transform.  |
| void | **[apply_transform](/reference/transform#apply_transform)**(`glm::mat3` additional_transform)<br/>Applies a custom transform matrix to all the future drawings. To undo this, see `[push_transform()]()` and `[pop_transform()]()`.  |
| void | **[set_transform](/reference/transform#set_transform)**(`glm::mat3` transform)<br/>Sets the current transform matrix. This will override all the previous translate / rotate / scale / apply_transform. To undo this, see `[push_transform()]()` and `[pop_transform()]()`.  |
| void | **[push_transform](/reference/transform#push_transform)**()<br/>Saves the current transform state.  |
| void | **[pop_transform](/reference/transform#pop_transform)**()<br/>Restores the transform to the state it had during the last `[push_transform()](/reference/transform#push_transform)` that has not been popped yet.  |
| [TransformScopeGuard](/reference/Types/transform_scope_guard) | **[transform_scope_guard](/reference/transform#transform_scope_guard)**()<br/>Will call [push_transform()](/reference/transform#push_transform) and [pop_transform()](/reference/transform#pop_transform) automatically.  |
| glm::mat3 | **[current_transform](/reference/transform#current_transform)**() const<br/>Returns the current transform matrix that is the combination of all the translate / rotate / scale / apply_transform / set_transform that have been applied.  |
| void | **[render_to_canvas](/reference/canvas#render_to_canvas)**(`[Canvas](/reference/Types/canvas) &` canvas)<br/>Sets a canvas to be the one that all the drawing commands will draw on, until you call render_to_main_canvas.  |
| void | **[render_to_main_canvas](/reference/canvas#render_to_main_canvas)**()<br/>Reset the [Context](/reference/Types/context) to render to the main canvas. The main canvas is the one that will be displayed in the window.  |
| [Canvas](/reference/Types/canvas) & | **[main_canvas](/reference/canvas#main_canvas)**() |
| const [Canvas](/reference/Types/canvas) & | **[main_canvas](/reference/canvas#main_canvas)**() const |
| [Canvas](/reference/Types/canvas) & | **[current_canvas](/reference/canvas#current_canvas)**() |
| const [Canvas](/reference/Types/canvas) & | **[current_canvas](/reference/canvas#current_canvas)**() const |
| float | **[aspect_ratio](/reference/canvas#aspect_ratio)**() const<br/>Returns the aspect ratio (a.k.a.  |
| float | **[inverse_aspect_ratio](/reference/canvas#inverse_aspect_ratio)**() const<br/>Returns the inverse aspect ratio (a.k.a.  |
| ImageSize | **[main_canvas_size](/reference/canvas#main_canvas_size)**() const<br/>Returns the size of the main canvas (width and height).  |
| int | **[main_canvas_width](/reference/canvas#main_canvas_width)**() const<br/>Returns the width of the main canvas.  |
| int | **[main_canvas_height](/reference/canvas#main_canvas_height)**() const<br/>Returns the height of the main canvas.  |
| ImageSize | **[current_canvas_size](/reference/canvas#current_canvas_size)**() const<br/>Returns the size of the current canvas (width and height).  |
| int | **[current_canvas_width](/reference/canvas#current_canvas_width)**() const<br/>Returns the width of the current canvas.  |
| int | **[current_canvas_height](/reference/canvas#current_canvas_height)**() const<br/>Returns the height of the current canvas.  |
| void | **[main_canvas_mode](/reference/canvas#main_canvas_mode)**(`CanvasSizeMode` mode)<br/>Sets how the size of the main canvas will be computed.  |
| float | **[canvas_ratio](/reference/canvas#canvas_ratio)**(`const [Canvas](/reference/Types/canvas) &` canvas) const<br/>Returns the ratio that you need to multiply with in order to match the position and size of the `canvas` when it is fitted in the window.  |
| void | **[save_image](/reference/canvas#save_image)**(`std::filesystem::path` path) const<br/>Saves the content of the window's main canvas as an image file.  |
| [Color](/reference/Types/color) | **[read_pixel](/reference/canvas#read_pixel)**(`glm::vec2` position) const<br/>Returns the color of the pixel at the given position in the main canvas.  |
| glm::vec2 | **[mouse](/reference/input#mouse)**() const<br/>Returns the current mouse position.  |
| glm::vec2 | **[mouse_delta](/reference/input#mouse_delta)**() const<br/>Returns the movement of the mouse since the last [update()](/reference/events#update).  |
| bool | **[mouse_is_in_window](/reference/input#mouse_is_in_window)**() const<br/>Returns true iff the window is focused and the coordinates returned by [mouse()](/reference/input#mouse) correspond to a position inside the window.  |
| bool | **[mouse_button_is_pressed](/reference/input#mouse_button_is_pressed)**(`Button` button) const<br/>Returns true iff the given mouse button is currently pressed.  |
| bool | **[ctrl](/reference/input#ctrl)**() const<br/>Returns true iff the CTRL key is pressed (or CMD on Mac)  |
| bool | **[shift](/reference/input#shift)**() const<br/>Returns true iff the SHIFT key is pressed.  |
| bool | **[alt](/reference/input#alt)**() const<br/>Returns true iff the ALT key is pressed.  |
| bool | **[key_is_pressed](/reference/input#key_is_pressed)**(`int` key) const<br/>Returns true iff the given `key` is currently pressed.  |
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
| GLFWwindow * | **[underlying_glfw_window](/reference/window#underlying_glfw_window)**() const<br/>Advanced function that returns the glfw window pointer.  |
| float | **[time](/reference/time#time)**() const<br/>Returns the time in seconds since the creation of the [Context](/reference/Types/context).  |
| float | **[delta_time](/reference/time#delta_time)**() const<br/>Returns an estimate of the time that elapses between two [update()](/reference/events#update) calls.  |
| void | **[time_perceived_as_realtime](/reference/time#time_perceived_as_realtime)**()<br/>Sets the time mode as _realtime_.  |
| void | **[time_perceived_as_constant_delta_time](/reference/time#time_perceived_as_constant_delta_time)**(`float` framerate)<br/>Sets the time mode as _constant delta time_.  |
| void | **[framerate_synced_with_monitor](/reference/time#framerate_synced_with_monitor)**()<br/>Makes sure that the framerate is adapted to your monitor: it will be 60 fps if you have a 60 Hertz monitor (which is the most common), or 120 fps if you have a 120 Hertz monitor, etc.  |
| void | **[framerate_as_high_as_possible](/reference/time#framerate_as_high_as_possible)**()<br/>Removes any limit on the framerate. [update()](/reference/events#update) will be called as fast as possible.  |
| void | **[framerate_capped_at](/reference/time#framerate_capped_at)**(`float` framerate)<br/>Keeps the framerate at the given value.  |
| void | **[start](/reference/update-flow#start)**()<br/>Starts the [update()](/reference/events#update) loop.  |
| void | **[stop](/reference/update-flow#stop)**()<br/>Stops the [update()](/reference/events#update) loop.  |
| void | **[pause](/reference/update-flow#pause)**()<br/>Pauses the [update()](/reference/events#update) loop.  |
| void | **[resume](/reference/update-flow#resume)**()<br/>Resumes the [update()](/reference/events#update) loop if it was paused with [pause()](/reference/update-flow#pause).  |
| bool | **[is_paused](/reference/update-flow#is_paused)**() const<br/>Returns true iff the [update()](/reference/events#update) loop is currently paused.  |
| std::function< void()> | **[update](/reference/events#update)** <br/>This function is called repeatedly. The framerate is controlled by the framerate_xxx() functions.  |
| std::function< void()> | **[imgui](/reference/events#imgui)** <br/>In this function you can call all the ImGui code you want.  |
| std::function< void([MouseMove](/reference/Types/mouse_move))> | **[mouse_moved](/reference/events#mouse_moved)** <br/>This function is called whenever the mouse is moved.  |
| std::function< void([MouseDrag](/reference/Types/mouse_drag))> | **[mouse_dragged](/reference/events#mouse_dragged)** <br/>This function is called whenever the mouse is dragged.  |
| std::function< void([MouseButton](/reference/Types/mouse_button))> | **[mouse_pressed](/reference/events#mouse_pressed)** <br/>This function is called whenever a mouse button is pressed.  |
| std::function< void([MouseButton](/reference/Types/mouse_button))> | **[mouse_released](/reference/events#mouse_released)** <br/>This function is called whenever a mouse button is released.  |
| std::function< void([MouseScroll](/reference/Types/mouse_scroll))> | **[mouse_scrolled](/reference/events#mouse_scrolled)** <br/>This function is called whenever the mouse wheel is scrolled.  |
| std::function< void([Key](/reference/Types/key))> | **[key_pressed](/reference/events#key_pressed)** <br/>This function is called whenever a keyboard key is pressed.  |
| std::function< void([Key](/reference/Types/key))> | **[key_released](/reference/events#key_released)** <br/>This function is called whenever a keyboard key is released.  |
| std::function< void([Key](/reference/Types/key))> | **[key_repeated](/reference/events#key_repeated)** <br/>This function is called repeatedly whenever a keyboard key is held.  |
| std::function< void(std::string &&)> | **[on_error](/reference/events#on_error)** <br/>This function is called whenever an error occurs.  |
| std::function< void()> | **[main_canvas_resized](/reference/events#main_canvas_resized)** <br/>This function is called whenever the main canvas is resized.  |
| std::function< void(Event)> | **[on_event](/reference/events#on_event)** <br/>This function is called whenever any event occurs (key pressed, mouse moved, etc.).  |
| [Color](/reference/Types/color) | **[fill](/reference/drawing#fill)** <br/>The color that is used for the interior of the shapes.  |
| bool | **[use_fill](/reference/drawing#use_fill)** <br/>Whether the shapes will have an interior.  |
| [Color](/reference/Types/color) | **[stroke](/reference/drawing#stroke)** <br/>The color that is used for the boundary of the shapes.  |
| float | **[stroke_weight](/reference/drawing#stroke_weight)** <br/>The size of the boundary of the shapes.  |
| bool | **[use_stroke](/reference/drawing#use_stroke)** <br/>Whether there will be a boundary on the shape.  |
| float | **[text_size](/reference/text#text_size)** <br/>Height of the text.  |
| float | **[text_inflating](/reference/text#text_inflating)** <br/>Gives some "boldness" to the text.  |

## Details


### Context()

> **[Context](/reference/Types/context#context)**(`WindowCreationParams` window_creation_params ={});



### Context()

> **[Context](/reference/Types/context#context)**(`[Context](/reference/Types/context) &&` ) =default;



### operator=()

> `[Context](/reference/Types/context) &` **[operator=](/reference/Types/context#operator=)**(`[Context](/reference/Types/context) &&` ) =default;



### Context()

> **[Context](/reference/Types/context#context)**(`const [Context](/reference/Types/context) &` ) =delete;



### operator=()

> `[Context](/reference/Types/context) &` **[operator=](/reference/Types/context#operator=)**(`const [Context](/reference/Types/context) &` ) =delete;



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



### equilateral_triangle()

> `void` **[equilateral_triangle](/reference/drawing#equilateral_triangle)**(`[Center](/reference/Types/center)` center, `[Radius](/reference/Types/radius)` radius ={}, `[Rotation](/reference/Types/angle)` rotation ={});


Draws an equilateral triangle. `[Radius]()` is the distance between the `[Center](/reference/Types/center)` and one of the tips of the triangle. 

### triangle()

> `void` **[triangle](/reference/drawing#triangle)**(`[Point2D](/reference/Types/point2_d)` p1, `[Point2D](/reference/Types/point2_d)` p2, `[Point2D](/reference/Types/point2_d)` p3, `[Center](/reference/Types/center)` center ={}, `[Rotation](/reference/Types/angle)` rotation ={});


Draws a triangle between the three points, translated by `[Center](/reference/Types/center)` and rotated by `Rotation`. 

### triangle()

> `void` **[triangle](/reference/drawing#triangle)**(`[Point2D](/reference/Types/point2_d)` p1, `[Point2D](/reference/Types/point2_d)` p2, `[Point2D](/reference/Types/point2_d)` p3, `[Transform2D](/reference/Types/transform2_d)` transform);


Draws a triangle between the three points, and applies the transform to the triangle. 

### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[Fit](/reference/Types/fit)`  ={});


Draws an image as big as possible on the screen. This will respect the aspect ratio of the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[FitX](/reference/Types/fit_x)` );



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[FitY](/reference/Types/fit_y)` );



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[Center](/reference/Types/center)` center, `[RadiusX](/reference/Types/radius_x)` radiusX ={}, `[Rotation](/reference/Types/angle)` rotation ={});


Draws an image. This will respect the aspect ratio of the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[RadiusX](/reference/Types/radius_x)` radiusX ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[Center](/reference/Types/center)` center, `[RadiusY](/reference/Types/radius_y)` radiusY ={}, `[Rotation](/reference/Types/angle)` rotation ={});


Draws an image. This will respect the aspect ratio of the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[RadiusY](/reference/Types/radius_y)` radiusY ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[FullScreen](/reference/Types/full_screen)` );


Draws an image that takes the entire window. :warning: This might distort the image if the window doesn't have the same aspect ratio as the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[Center](/reference/Types/center)` center, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});


Draws an image. :warning: This might distort the image if radii doesn't have the same aspect ratio as the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Radii](/reference/Types/radii)` radii ={}, `[Rotation](/reference/Types/angle)` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const [ImageOrCanvas](/reference/Types/image_or_canvas) &` img, `[Transform2D](/reference/Types/transform2_d)` transform);



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



### line()

> `void` **[line](/reference/drawing#line)**(`glm::vec2` start, `glm::vec2` end);


Draws a line between two points. 

It uses the `stroke` color, and `stroke_weight` as its thickness. 


### text()

> `void` **[text](/reference/text#text)**(`const std::u16string &` str, `[Center](/reference/Types/center)` center, `[Rotation](/reference/Types/angle)` rotation ={});



### text()

> `void` **[text](/reference/text#text)**(`const std::u16string &` str, `[TopLeftCorner](/reference/Types/top_left_corner)` corner, `[Rotation](/reference/Types/angle)` rotation ={});



### text()

> `void` **[text](/reference/text#text)**(`const std::u16string &` str, `[TopRightCorner](/reference/Types/top_right_corner)` corner, `[Rotation](/reference/Types/angle)` rotation ={});



### text()

> `void` **[text](/reference/text#text)**(`const std::u16string &` str, `[BottomLeftCorner](/reference/Types/bottom_left_corner)` corner, `[Rotation](/reference/Types/angle)` rotation ={});



### text()

> `void` **[text](/reference/text#text)**(`const std::u16string &` str, `[BottomRightCorner](/reference/Types/bottom_right_corner)` corner, `[Rotation](/reference/Types/angle)` rotation ={});



### translate()

> `void` **[translate](/reference/transform#translate)**(`glm::vec2` translation);


Applies a translation to all the future drawings. To undo this, see `[push_transform()]()` and `[pop_transform()]()`. 

### rotate()

> `void` **[rotate](/reference/transform#rotate)**(`[p6::Angle](/reference/Types/angle)` angle);


Applies a rotation to all the future drawings. To undo this, see `[push_transform()]()` and `[pop_transform()]()`. 

### scale()

> `void` **[scale](/reference/transform#scale)**(`glm::vec2` scale_factor);


Applies a scale to all the future drawings. To undo this, see `[push_transform()]()` and `[pop_transform()]()`. 

### reset_transform()

> `void` **[reset_transform](/reference/transform#reset_transform)**();


Undoes all the translate / rotate / scale / apply_transform / set_transform. 

### apply_transform()

> `void` **[apply_transform](/reference/transform#apply_transform)**(`glm::mat3` additional_transform);


Applies a custom transform matrix to all the future drawings. To undo this, see `[push_transform()]()` and `[pop_transform()]()`. 

### set_transform()

> `void` **[set_transform](/reference/transform#set_transform)**(`glm::mat3` transform);


Sets the current transform matrix. This will override all the previous translate / rotate / scale / apply_transform. To undo this, see `[push_transform()]()` and `[pop_transform()]()`. 

### push_transform()

> `void` **[push_transform](/reference/transform#push_transform)**();


Saves the current transform state. 

### pop_transform()

> `void` **[pop_transform](/reference/transform#pop_transform)**();


Restores the transform to the state it had during the last `[push_transform()](/reference/transform#push_transform)` that has not been popped yet. 

### transform_scope_guard()

> `[TransformScopeGuard](/reference/Types/transform_scope_guard)` **[transform_scope_guard](/reference/transform#transform_scope_guard)**();


Will call [push_transform()](/reference/transform#push_transform) and [pop_transform()](/reference/transform#pop_transform) automatically. 

Assign the result of this function to a variable and [pop_transform()](/reference/transform#pop_transform) will be called when the variable goes out of scope. [push_transform()](/reference/transform#push_transform) is called when [transform_scope_guard()](/reference/transform#transform_scope_guard) is called. 


### current_transform()

> `glm::mat3` **[current_transform](/reference/transform#current_transform)**() const;


Returns the current transform matrix that is the combination of all the translate / rotate / scale / apply_transform / set_transform that have been applied. 

### render_to_canvas()

> `void` **[render_to_canvas](/reference/canvas#render_to_canvas)**(`[Canvas](/reference/Types/canvas) &` canvas);


Sets a canvas to be the one that all the drawing commands will draw on, until you call render_to_main_canvas. 

### render_to_main_canvas()

> `void` **[render_to_main_canvas](/reference/canvas#render_to_main_canvas)**();


Reset the [Context](/reference/Types/context) to render to the main canvas. The main canvas is the one that will be displayed in the window. 

### main_canvas()

> `[Canvas](/reference/Types/canvas) &` **[main_canvas](/reference/canvas#main_canvas)**();



### main_canvas()

> `const [Canvas](/reference/Types/canvas) &` **[main_canvas](/reference/canvas#main_canvas)**() const;



### current_canvas()

> `[Canvas](/reference/Types/canvas) &` **[current_canvas](/reference/canvas#current_canvas)**();



### current_canvas()

> `const [Canvas](/reference/Types/canvas) &` **[current_canvas](/reference/canvas#current_canvas)**() const;



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

> `float` **[canvas_ratio](/reference/canvas#canvas_ratio)**(`const [Canvas](/reference/Types/canvas) &` canvas) const;


Returns the ratio that you need to multiply with in order to match the position and size of the `canvas` when it is fitted in the window. 

### save_image()

> `void` **[save_image](/reference/canvas#save_image)**(`std::filesystem::path` path) const;


Saves the content of the window's main canvas as an image file. 

Supported file types are .png and .jpeg/.jpg Simply use the corresponding extension to save in the desired format. If the path already exists, a number will be appended to the name and the previous file won't be overwritten. If the path is relative, it will be relative to the directory containing your executable. If some directories in the path don't exist yet, they will be created automatically. 


### read_pixel()

> `[Color](/reference/Types/color)` **[read_pixel](/reference/canvas#read_pixel)**(`glm::vec2` position) const;


Returns the color of the pixel at the given position in the main canvas. 

The coordinates are expressed in the usual p6 coordinate system. 


### mouse()

> `glm::vec2` **[mouse](/reference/input#mouse)**() const;


Returns the current mouse position. 

### mouse_delta()

> `glm::vec2` **[mouse_delta](/reference/input#mouse_delta)**() const;


Returns the movement of the mouse since the last [update()](/reference/events#update). 

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

`key` should be a GLFW_KEY value. See [https://www.glfw.org/docs/3.3/keys.html](https://www.glfw.org/docs/3.3/keys.html) for the complete list. e.g. `ctx.key_is_pressed(GLFW_KEY_Q)` /!\ Please note that these are physical keys that don't depend on the current layout. This means that GLFW_KEY_Q will refer to the first key on your keyboard, no matter if you are using QWERTY or AZERTY. 


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

### underlying_glfw_window()

> `GLFWwindow *` **[underlying_glfw_window](/reference/window#underlying_glfw_window)**() const;


Advanced function that returns the glfw window pointer. 

It allows you to call all the glfw functions that are not directly exposed by p6. Note that you might also want to [raise an issue](https://github.com/JulesFouchy/p6/issues/new) to ask us to add that functionality directly into p6 to simplify future uses. We would be very thankful for that. 


### time()

> `float` **[time](/reference/time#time)**() const;


Returns the time in seconds since the creation of the [Context](/reference/Types/context). 

### delta_time()

> `float` **[delta_time](/reference/time#delta_time)**() const;


Returns an estimate of the time that elapses between two [update()](/reference/events#update) calls. 

### time_perceived_as_realtime()

> `void` **[time_perceived_as_realtime](/reference/time#time_perceived_as_realtime)**();


Sets the time mode as _realtime_. 

This means that what is returned by [time()](/reference/time#time) and [delta_time()](/reference/time#delta_time) corresponds to the actual time that elapsed in the real world. This is ideal when you want to do realtime animation and interactive sketches. 


### time_perceived_as_constant_delta_time()

> `void` **[time_perceived_as_constant_delta_time](/reference/time#time_perceived_as_constant_delta_time)**(`float` framerate);


Sets the time mode as _constant delta time_. 

This means that what is returned by [time()](/reference/time#time) and [delta_time()](/reference/time#delta_time) corresponds to an ideal world where there is exactly `1/framerate` seconds between each updates. This is ideal when you are exporting a video and don't want the long export time to influence your animation. `framerate` is expressed in frames per second 


### framerate_synced_with_monitor()

> `void` **[framerate_synced_with_monitor](/reference/time#framerate_synced_with_monitor)**();


Makes sure that the framerate is adapted to your monitor: it will be 60 fps if you have a 60 Hertz monitor (which is the most common), or 120 fps if you have a 120 Hertz monitor, etc. 

This is the default framerate mode. 


### framerate_as_high_as_possible()

> `void` **[framerate_as_high_as_possible](/reference/time#framerate_as_high_as_possible)**();


Removes any limit on the framerate. [update()](/reference/events#update) will be called as fast as possible. 

### framerate_capped_at()

> `void` **[framerate_capped_at](/reference/time#framerate_capped_at)**(`float` framerate);


Keeps the framerate at the given value. 

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
std::function< void()> update = []() {
    };
```

This function is called repeatedly. The framerate is controlled by the framerate_xxx() functions. 

### imgui

```cpp
std::function< void()> imgui = []() {
    };
```

In this function you can call all the ImGui code you want. 

Note that you can also do it during the `[update()](/reference/events#update)` function. This `[imgui()](/reference/events#imgui)` function is just here to help you organize your code if you want to. 


### mouse_moved

```cpp
std::function< void(MouseMove)> mouse_moved = [](MouseMove) {
    };
```

This function is called whenever the mouse is moved. 

### mouse_dragged

```cpp
std::function< void(MouseDrag)> mouse_dragged = [](MouseDrag) {
    };
```

This function is called whenever the mouse is dragged. 

### mouse_pressed

```cpp
std::function< void(MouseButton)> mouse_pressed = [](MouseButton) {
    };
```

This function is called whenever a mouse button is pressed. 

### mouse_released

```cpp
std::function< void(MouseButton)> mouse_released = [](MouseButton) {
    };
```

This function is called whenever a mouse button is released. 

### mouse_scrolled

```cpp
std::function< void(MouseScroll)> mouse_scrolled = [](MouseScroll) {
    };
```

This function is called whenever the mouse wheel is scrolled. 

### key_pressed

```cpp
std::function< void(Key)> key_pressed = [](Key) {
    };
```

This function is called whenever a keyboard key is pressed. 

### key_released

```cpp
std::function< void(Key)> key_released = [](Key) {
    };
```

This function is called whenever a keyboard key is released. 

### key_repeated

```cpp
std::function< void(Key)> key_repeated = [](Key) {
    };
```

This function is called repeatedly whenever a keyboard key is held. 

(NB: this only starts after holding the key for a little while. The exact behaviour is OS-specific)

:warning: This is less than ideal to do things like handling the movement of a character. You should rather do, in your [update()](/reference/events#update) function:



```cpp
if (ctx.key_is_pressed(GLFW_KEY_W)) {
    character.move_forward(ctx.delta_time());
}
```


### on_error

```cpp
std::function< void(std::string &&)> on_error = [](std::string&& error_message) {
        std::cerr << error_message << '\n';
        throw std::runtime_error{error_message};
    };
```

This function is called whenever an error occurs. 

### main_canvas_resized

```cpp
std::function< void()> main_canvas_resized = []() {
    };
```

This function is called whenever the main canvas is resized. 

If you call [main_canvas_size()](/reference/canvas#main_canvas_size), [main_canvas_width()](/reference/canvas#main_canvas_width), [main_canvas_height()](/reference/canvas#main_canvas_height) or [aspect_ratio()](/reference/canvas#aspect_ratio) inside [main_canvas_resized()](/reference/events#main_canvas_resized) they will already be referring to the new size. 


### on_event

```cpp
std::function< void(Event)> on_event = [](Event const&) {
    };
```

This function is called whenever any event occurs (key pressed, mouse moved, etc.). 

It can be useful to use this function instead of the more specific ones (key_pressed, mouse_moved, etc.) if for example you want to forward several events to a function that will handle them. For example in order to control a camera you might need to forward the key, mouse and update events to it. Instead of having to put the code inside those three event functions, you can just put it in `on_event` and let the camera handle each event as it so pleases. 


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

### text_size

```cpp
float text_size = 0.03f;
```

Height of the text. 

### text_inflating

```cpp
float text_inflating = 0.01f;
```

Gives some "boldness" to the text. 

-------------------------------

Updated on 2023 April 02