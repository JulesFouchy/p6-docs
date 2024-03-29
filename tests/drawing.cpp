#include <p6/p6.h>

int main()
{
    // Create some objects
    auto       ctx      = p6::Context{{1280, 720, "Drawing"}};
    const auto image    = p6::load_image("res/p5.png");
    p6::Angle  rotation = 0.0_turn;
    // Draws an initial background.
    // Since we don't clear the background in our update loop this one will be visible throughout the execution of the program.
    // And objects that are drawn during the update() will remain there too.
    ctx.background({0.5f, 0.3f, 0.8f});
    // Define the mouse_scrolled function. We will rotate an ellipse when we scroll.
    ctx.mouse_scrolled = [&](p6::MouseScroll event) {
        rotation += event.dy * 0.025_turn;
    };
    // Define the update function. It will be called repeatedly.
    ctx.update = [&]() {
        // Uncomment this if you want to clear the objects that were drawn during the previous update:
        // ctx.background({0.5f, 0.3f, 0.8f});

        // Set the colors and size of the stroke that will be used to draw our objects
        ctx.fill          = p6::Color{1.f, 0.f, 0.f};      // Red interior
        ctx.stroke        = p6::Color{0.f, 0.f, 0.f, 1.f}; // Black outline
        ctx.stroke_weight = 0.1f;                          // Size of the outline
        // Draw our first square
        ctx.square(p6::Center{0.f, 0.f},     // Center on the middle of the window
                   p6::Radius{0.98f},        // A radius of 1 would fit the entire window so this is quite a big square
                   p6::Rotation{0.01_turn}); // Slightly tilt the square
        // Draw an image
        ctx.image(image,
                  p6::Center{0.f, 0.f}, // Center on the middle of the window
                  p6::RadiusY{0.2f});   // Give it a height of 0.4 The width will be deduced based on that and the aspect_ratio of the image
        // Change the colors
        ctx.fill          = p6::Color{1.f, 1.f, 1.f, 0.5f};
        ctx.stroke        = p6::Color{0.2f, 0.95f, 0.95f, 1.f};
        ctx.stroke_weight = 0.02f;
        // Draw an ellipse
        ctx.ellipse(p6::Center{ctx.mouse()}, // Center on the current mouse position
                    p6::Radii{0.8f, 0.4f},   // An ellipse has two radii: one in the x direction and the second in the y direction
                    p6::Rotation{rotation}); // An ellipse can be rotated
        // Draw a circle
        ctx.circle(p6::Center{ctx.mouse()}, // Center on the current mouse position
                   p6::Radius{0.5f});       // A circle has one single radius
    };
    // Start the program
    ctx.start();
}