---
title: p6

---

# p6



## Classes

|                | Name           |
| -------------- | -------------- |
| class | **[p6::Color](/reference/Classes/classp6_1_1_color)**  |
| class | **[p6::Context](/reference/Classes/classp6_1_1_context)**  |
| class | **[p6::Image](/reference/Classes/classp6_1_1_image)** <br/>An image can be drawn onto, and can be displayed.  |
| struct | **[p6::KeyEvent](/reference/Classes/structp6_1_1_key_event)**  |
| struct | **[p6::MouseButton](/reference/Classes/structp6_1_1_mouse_button)**  |
| struct | **[p6::MouseDrag](/reference/Classes/structp6_1_1_mouse_drag)**  |
| struct | **[p6::MouseMove](/reference/Classes/structp6_1_1_mouse_move)**  |
| struct | **[p6::MouseScroll](/reference/Classes/structp6_1_1_mouse_scroll)**  |
| struct | **[p6::RectangleParams](/reference/Classes/structp6_1_1_rectangle_params)**  |
| class | **[p6::Shader](/reference/Classes/classp6_1_1_shader)**  |

## Types

|                | Name           |
| -------------- | -------------- |
| enum class| **[Button](/reference/Namespaces/namespacep6#button)** { Left, Right, Middle} |
| using glpp::ImageSize | **[ImageSize](/reference/Namespaces/namespacep6#imagesize)**  |
| using glpp::Texture | **[Texture](/reference/Namespaces/namespacep6#texture)**  |

## Functions

|                | Name           |
| -------------- | -------------- |
| [Context](/reference/Classes/classp6_1_1_context) & | **[get_context](/reference/Namespaces/namespacep6#get_context)**(GLFWwindow * window) |
| void | **[window_size_callback](/reference/Namespaces/namespacep6#window_size_callback)**(GLFWwindow * window, int width, int height) |
| void | **[mouse_button_callback](/reference/Namespaces/namespacep6#mouse_button_callback)**(GLFWwindow * window, int button, int action, int mods) |
| void | **[scroll_callback](/reference/Namespaces/namespacep6#scroll_callback)**(GLFWwindow * window, double x, double y) |
| void | **[key_callback](/reference/Namespaces/namespacep6#key_callback)**(GLFWwindow * window, int key, int scancode, int action, int mods) |
| [Image](/reference/Classes/classp6_1_1_image) | **[load_image](/reference/Namespaces/namespacep6#load_image)**(const char * file_path) |
| template <typename T \> <br/>T | **[map](/reference/Modules/group__math#map)**(T x, T from_min, T from_max, T to_min, T to_max)<br/>Maps x, which is in the range [from_mix, from_max], to the range [to_min, to_max].  |
| void | **[link_program](/reference/Namespaces/namespacep6#link_program)**(const glpp::ext::Program & program, const glpp::VertexShader & vertex_shader, const glpp::FragmentShader & fragment_shader) |
| template <typename T \> <br/>void | **[set_uniform](/reference/Namespaces/namespacep6#set_uniform)**(const glpp::ext::Program & program, const std::string & uniform_name, T && v) |

## Types Documentation

### Button

| Enumerator | Value | Description |
| ---------- | ----- | ----------- |
| Left | |   |
| Right | |   |
| Middle | |   |




### ImageSize

```cpp
using p6::ImageSize = typedef glpp::ImageSize;
```


### Texture

```cpp
using p6::Texture = typedef glpp::Texture;
```



## Functions Documentation

### get_context()

> **[get_context](/reference/Namespaces/namespacep6#get_context)**(GLFWwindow * window);



### window_size_callback()

> **[window_size_callback](/reference/Namespaces/namespacep6#window_size_callback)**(GLFWwindow * window, int width, int height);



### mouse_button_callback()

> **[mouse_button_callback](/reference/Namespaces/namespacep6#mouse_button_callback)**(GLFWwindow * window, int button, int action, int mods);



### scroll_callback()

> **[scroll_callback](/reference/Namespaces/namespacep6#scroll_callback)**(GLFWwindow * window, double x, double y);



### key_callback()

> **[key_callback](/reference/Namespaces/namespacep6#key_callback)**(GLFWwindow * window, int key, int scancode, int action, int mods);



### load_image()

> **[load_image](/reference/Namespaces/namespacep6#load_image)**(const char * file_path);



### map()

> **[map](/reference/Modules/group__math#map)**(T x, T from_min, T from_max, T to_min, T to_max);


Maps x, which is in the range [from_mix, from_max], to the range [to_min, to_max]. 

For example if x == from_min, then the function returns to_min if x == (from_min + from_max) / 2 then the function returns (to_min + to_max) / 2 if x is outside of the range [from_min, from_max] the result will be outside of [to_min, to_max], the same linear behaviour still applies 


### link_program()

> **[link_program](/reference/Namespaces/namespacep6#link_program)**(const glpp::ext::Program & program, const glpp::VertexShader & vertex_shader, const glpp::FragmentShader & fragment_shader);



### set_uniform()

> **[set_uniform](/reference/Namespaces/namespacep6#set_uniform)**(const glpp::ext::Program & program, const std::string & uniform_name, T && v);







-------------------------------

Updated on 2022 January 08