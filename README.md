# p6

[*p6*](https://github.com/JulesFouchy/p6) is designed to be very easy to use. Here is all the code you need to create a window:

```cpp
#include <p6/p6.h>

int main()
{
    auto ctx = p6::Context{{1280, 720, "Hello p6"}}; // Create a context with a window
    ctx.start();                                     // Start the p6 application
}
```

And with just a little more code you can draw a circle:

```cpp
#include <p6/p6.h>

int main()
{
    auto ctx   = p6::Context{{1280, 720, "Hello p6"}};
    ctx.update = [&]() {                    // Define the function that will be called in a loop once you call ctx.start()
        ctx.background({0.5f, 0.3f, 0.8f}); // Clear the background with some color (Try to comment out this line to see what happens)
        ctx.circle(p6::Center{ctx.mouse()}, // Draw a circle centered on the mouse cursor
                   p6::Radius{0.3f});       // with a radius of 0.3
    };
    ctx.start();
}
```

Check out [our website](https://julesfouchy.github.io/p6-docs/) to learn everything you need to know about *p6*!