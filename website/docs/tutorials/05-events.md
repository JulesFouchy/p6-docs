---
title: Mouse and Keyboard Events
---

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