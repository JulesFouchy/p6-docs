---
title: Transform
---

## Basics

Transforms allow you to move all your drawings at once. You can use [`ctx.translate(...)`](../reference/transform.md#translate), [`ctx.rotate(...)`](../reference/transform.md#rotate) and [`ctx.scale(...)`](../reference/transform.md#scale).

```cpp
#include <p6/p6.h>

int main()
{
    auto ctx = p6::Context{{1280, 720, "Transform"}};

    ctx.update = [&]() {
        const auto transform_sg = ctx.transform_scope_guard(); // Makes sure that, when `transform_sg` will go out of scope,
                                                               // the transform will be reset to the state it had when `transform_sg` was created.
        ctx.translate({0.5f, 0.f});
        ctx.rotate(0.1_turn);
        ctx.scale({0.85f});
        // This square and this circle will both be translated by {0.5f, 0.f}, rotated by 0.1 turn and scaled by 0.85
        ctx.square(p6::Center{0.f, 0.f}, p6::Radius{0.3f});
        ctx.circle(p6::Center{0.f, 0.f}, p6::Radius{0.3f});
    };

    ctx.start();
}
```

## Restoring the previous transform

### `push_transform()` / `pop_transform()`

[`push_transform()`](../reference/transform.md#push_transform) saves the current transform on a stack, and [`pop_transform()`](../reference/transform.md#pop_transform) goes back one step into the stack of transforms saved by `push_transform()`.

```cpp
ctx.push_transform(); // Push 1
    ctx.translate({0.5f, 0.f});
    ctx.push_transform(); // Push 2
        ctx.rotate(0.1_turn);
    ctx.pop_transform(); // Goes back to the Push 2, i.e. undoes the `rotate()`
ctx.pop_transform(); // Goes back to the Push 1, i.e. undoes the `translate()`
```

### `transform_scope_guard()`

[`transform_scope_guard()`](../reference/transform.md#transform_scope_guard) calls `push_transform()` and creates a variable that will call `pop_transform()` when it goes out of scope. This is a means of automatically calling the pop that logically follows the push. It is the recommended way to manage your transforms.

```cpp
{
    const auto sg1 = ctx.transform_scope_guard(); // Scope Guard 1
    ctx.translate({0.5f, 0.f});
    {
        const auto sg2 = ctx.transform_scope_guard(); // Scope Guard 2
        ctx.rotate(0.1_turn);
    } // `sg2` is destroyed here so we go back to the state of Scope Guard 2, i.e. we undo the `rotate()`
} // `sg1` is destroyed here so we go back to the state of Scope Guard 1, i.e. we undo the `translate()`
```

### `reset_transform()`

[`reset_transform()`](../reference/transform.md#reset_transform) undoes all the transforms that have ever been applied.

## Advanced

You also have access to [`ctx.apply_transform(...)`](../reference/transform.md#apply_transform), [`ctx.set_transform(...)`](../reference/transform.md#set_transform) and [`ctx.current_transform()`](../reference/transform.md#current_transform) if you want to manipulate the transform matrix directly.

## More examples

[See here.](https://github.com/JulesFouchy/p6-docs/blob/main/tests/transform.cpp)