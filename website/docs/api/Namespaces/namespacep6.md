---
title: p6

---

# p6



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[p6::Color](/api/Classes/classp6_1_1_color)**  |
| class | **[p6::Context](/api/Classes/classp6_1_1_context)**  |
| class | **[p6::Image](/api/Classes/classp6_1_1_image)**  |
| struct | **[p6::KeyEvent](/api/Classes/structp6_1_1_key_event)**  |
| struct | **[p6::MouseButton](/api/Classes/structp6_1_1_mouse_button)**  |
| struct | **[p6::MouseDrag](/api/Classes/structp6_1_1_mouse_drag)**  |
| struct | **[p6::MouseMove](/api/Classes/structp6_1_1_mouse_move)**  |
| struct | **[p6::MouseScroll](/api/Classes/structp6_1_1_mouse_scroll)**  |
| struct | **[p6::RectangleParams](/api/Classes/structp6_1_1_rectangle_params)**  |
| class | **[p6::Shader](/api/Classes/classp6_1_1_shader)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum class| **[Button](/api/Namespaces/namespacep6#enum-button)** { Left, Right, Middle} |
| using glpp::ImageSize | **[ImageSize](/api/Namespaces/namespacep6#using-imagesize)**  |
| using glpp::Texture | **[Texture](/api/Namespaces/namespacep6#using-texture)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [Context](/api/Classes/classp6_1_1_context) & | **[get_context](/api/Namespaces/namespacep6#function-get-context)**(GLFWwindow * window) |
| void | **[window_size_callback](/api/Namespaces/namespacep6#function-window-size-callback)**(GLFWwindow * window, int width, int height) |
| void | **[mouse_button_callback](/api/Namespaces/namespacep6#function-mouse-button-callback)**(GLFWwindow * window, int button, int action, int mods) |
| void | **[scroll_callback](/api/Namespaces/namespacep6#function-scroll-callback)**(GLFWwindow * window, double x, double y) |
| void | **[key_callback](/api/Namespaces/namespacep6#function-key-callback)**(GLFWwindow * window, int key, int scancode, int action, int mods) |
| [Image](/api/Classes/classp6_1_1_image) | **[load_image](/api/Namespaces/namespacep6#function-load-image)**(const char * file_path) |
| template <typename T \> <br/>T | **[map](/api/Namespaces/namespacep6#function-map)**(T x, T from_min, T from_max, T to_min, T to_max) |
| void | **[link_program](/api/Namespaces/namespacep6#function-link-program)**(const glpp::ext::Program & program, const glpp::VertexShader & vertex_shader, const glpp::FragmentShader & fragment_shader) |
| template <typename T \> <br/>void | **[set_uniform](/api/Namespaces/namespacep6#function-set-uniform)**(const glpp::ext::Program & program, const std::string & uniform_name, T && v) |

## Types Documentation

### enum Button

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Left | |   |
| Right | |   |
| Middle | |   |




### using ImageSize

```cpp
using p6::ImageSize = typedef glpp::ImageSize;
```


### using Texture

```cpp
using p6::Texture = typedef glpp::Texture;
```



## Functions Documentation

### function get_context

```cpp
static Context & get_context(
    GLFWwindow * window
)
```


### function window_size_callback

```cpp
void window_size_callback(
    GLFWwindow * window,
    int width,
    int height
)
```


### function mouse_button_callback

```cpp
void mouse_button_callback(
    GLFWwindow * window,
    int button,
    int action,
    int mods
)
```


### function scroll_callback

```cpp
void scroll_callback(
    GLFWwindow * window,
    double x,
    double y
)
```


### function key_callback

```cpp
void key_callback(
    GLFWwindow * window,
    int key,
    int scancode,
    int action,
    int mods
)
```


### function load_image

```cpp
Image load_image(
    const char * file_path
)
```


### function map

```cpp
template <typename T >
T map(
    T x,
    T from_min,
    T from_max,
    T to_min,
    T to_max
)
```


Maps x, which is in the range [from_mix, from_max], to the range [to_min, to_max] For example if x == from_min, then the function returns to_min if x == (from_min + from_max) / 2 then the function returns (to_min + to_max) / 2 if x is outside of the range [from_min, from_max] the result will be outside of [to_min, to_max], the same linear behaviour still applies 


### function link_program

```cpp
static void link_program(
    const glpp::ext::Program & program,
    const glpp::VertexShader & vertex_shader,
    const glpp::FragmentShader & fragment_shader
)
```


### function set_uniform

```cpp
template <typename T >
void set_uniform(
    const glpp::ext::Program & program,
    const std::string & uniform_name,
    T && v
)
```






-------------------------------

Updated on 2022-01-03 at 19:40:53 +0100