# p6-examples

*p6* is designed to be very easy to use. Here is all the code you need to create a window:

```cpp
#include <p6/p6.h>

int main()
{
    auto p6 = p6::Context{{1280, 720, "p6 example"}}; // Creates a context with a window
    // ... Potentially do more setup here
    p6.run(); // Start the p6 application
    return 0;
}
```

And with just a little more code you can draw a square:

```cpp
#include <p6/p6.h>

int main()
{
    auto p6   = p6::Context{{1280, 720, "p6 example"}};
    p6.update = [&]() {                           // Define the function that will be called in a loop once you call p6.run()
        p6.background({0.5f, 0.3f, 0.8f});        // Clear the background with some color (Try to comment out this line to see what happens)
        p6.rectangle({p6.mouse(), {0.3f, 0.3f}}); // Draw a square of size 0.3 under the mouse cursor
    };
    p6.run();
    return 0;
}
```

Check out *CMakeLists.txt* to see how to ingreate p6 into your project.

Check out *main.cpp* for a more complete example of what you can do with *p6*.