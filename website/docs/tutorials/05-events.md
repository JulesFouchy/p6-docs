---
title: Mouse and Keyboard
---

## Events

`update()` is only one of the several functions you can define on the `Context`.<br/>
There are also a few available that allow you to react to all the mouse and keyboard events: `mouse_pressed`, `mouse_moved`, `key_released`, and more!

```cpp
int main()
{
    auto ctx   = p6::Context{};
    ctx.update = [&]() {
        ctx.background({});
    };
    ctx.mouse_pressed = [](p6::MouseButton button) {
        std::cout << button.position.x << " " << button.position.y << "\n"
                  << (button.button == p6::Button::Left  ? "Left" :
                      button.button == p6::Button::Right ? "Right"
                                                         : "Middle")
                  << "\n";
    };
    ctx.start();
}
```

You can find the complete list [in the Reference](/reference/events).

## Queries

You can also directly query at any moment to know if a given key or mouse button is pressed:
```cpp
if (ctx.key_is_pressed(GLFW_KEY_Q))
    // ...
```
```cpp
if (ctx.mouse_button_is_pressed(p6::Button::Left))
    // ...
```