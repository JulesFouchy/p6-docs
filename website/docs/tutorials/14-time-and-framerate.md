---
title: Time and Framerate
---

## Querying time information

### time()

`ctx.time()` returns the time in seconds since the creation of the `Context`. It is useful for example if you want your drawing to be a direct function of time:
```cpp
ctx.circle(p6::Center{sin(ctx.time(),0.f)});
```

### delta_time()

`ctx.delta_time()` returns the time in seconds that elapsed since the last `update()` call. It is useful for example if you want to do incremental movements frame by frame: taking `delta_time()` into account will make sure that your animation is independent of the framerate and will be perceived the same even if your computer starts lagging a little bit, or if you change the framerate mode.

You really want to try and not depend on the framerate, for the framerate is an implementation detail and you would rather want to work at a conceptual level, with an animation that is continuous and only depends on the actual amount of time that elapses. This will also simplify your life when you will try to export your animation as a video.

For more details, see this article: [Understanding Time.deltaTime](https://medium.com/star-gazers/understanding-time-deltatime-6528a8c2b5c8).

```cpp
float x = 0.f;
ctx.update = [&]() {
    x += 0.001f; // Bad, if the framerate doubles x will change twice as fast.
    x += 0.06f * ctx.delta_time(); // Good, we express our speed in units per second and changing the framerate won't change the animation speed.
}
```

## Framerate

The framerate mode controls the speed at which `update()` will be called, a.k.a. the amount of physical time that elapses between two updates.

**NB:** all of these modes will *try* to satisfy your request but if your `update()` function takes too long to run we might not be able to call it as often as you would like.

### Synced with monitor

```cpp
ctx.framerate_synced_with_monitor();
```

This is the default mode. It makes sure that the framerate will be adapted to your monitor (which is 60 Hertz in most cases). This is known as *vsync* or *vertical synchronization*. This will ask less unnecessary work to your computer because it is pointless to render more frames than your monitor can display anyways. It also prevents visual artifacts like screen tearing.

### As high as possible

```cpp
ctx.framerate_as_high_as_possible();
```

This will remove any constraint on your framerate and call `update()` as fast as physically possible for your computer. This can be useful sometimes if you want to loop as fast as possible to see the end result of an animation.<br/>
Please note that an alternative solution would be to keep `framerate_synced_with_monitor()` and call your animation in your own loop:

```cpp
MyParticleSystem particles{};
ctx.update = [&]() {
    for (int _ = 0; _ < 100; ++_) { // Do 100 particle updates in each ctx.update() to speed up the simulation
        particles.update();
    }
};
```

### Capped at

```cpp
ctx.framerate_capped_at(5); // 5 fps
```

Allows you to decide what the framerate should be. This can be useful for example if you want to slow down your animation to see each frame better.

## Time perceived as

Controls what is returned by `ctx.time()` and `ctx.delta_time()`.

### Realtime

```cpp
ctx.time_perceived_as_realtime();
```

`ctx.time()` and `ctx.delta_time()` will correspond to the actual amount of time that elapses in the real world.

This is the default mode and **it is ideal for realtime rendering**.

### Constant delta time

```cpp
ctx.time_perceived_as_constant_delta_time(30.f); // I want to export a 30 fps video
```

`ctx.time()` and `ctx.delta_time()` will pretend that time elapses at exactly the framerate you asked.

**This is ideal for offline rendering** because it won't be affected by the time it actually takes to run your `update()` function.

## Pause and resume

Note that using `pause()` will not only prevent `update()` from beeing called, but also freeze the time (even if you use realtime mode). For example if `time()` was 10.f when you called `pause()`, and if you wait 5 seconds before calling `resume()`, time will still be 10.f after that and `delta_time()` will not be 5 seconds, it will be approximately 1/60 (if your framerate is set to 60 fps).
