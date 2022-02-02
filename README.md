# p6

[*p6*](https://github.com/JulesFouchy/p6) is designed to be very easy to use. Here is all the code you need to create a window:

```cpp
#include <p6/p6.h>

int main()
{
    auto ctx = p6::Context{{1280, 720, "p6 example"}}; // Creates a context with a window
    ctx.start(); // Start the p6 application
    return 0;
}
```

And with just a little more code you can draw a square:

```cpp
#include <p6/p6.h>

int main()
{
    auto ctx   = p6::Context{{1280, 720, "p6 example"}};
    ctx.update = [&]() {                            // Define the function that will be called in a loop once you call ctx.start()
        ctx.background({0.5f, 0.3f, 0.8f});         // Clear the background with some color (Try to comment out this line to see what happens)
        ctx.rectangle({ctx.mouse(), {0.3f, 0.3f}}); // Draw a square of size 0.3 under the mouse cursor
    };
    ctx.start();
    return 0;
}
```

Check out *examples/basic/CMakeLists.txt* to see how to integrate p6 into your project.

Check out *examples/complete/main.cpp* for a more complete example of what you can do with *p6*.
