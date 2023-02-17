---
title: Text
---

## Rendering text

You can use the `ctx.text()` function.<br/>
The color of the text is controlled by `ctx.fill`.<br/>
The size of the text is controlled by `ctx.text_size`.

```cpp
#include <p6/p6.h>

int main()
{
    auto ctx   = p6::Context{};
    ctx.update = [&]() {
        ctx.background(p6::NamedColor::Black);
        ctx.fill = p6::NamedColor::Red;
        ctx.text_size = 0.04f;
        ctx.text(u"Some unicode text: éç", p6::Center{});
    };
    ctx.start();
}
```

:::info
We support unicode characters (a.k.a. every character you could possibly ever want), but the default C++ strings only support ASCII. This is why `text()` takes a `std::u16string`, that you can create by adding the `u` prefix to your strings: `u"Some unicode text: éç"`.
:::