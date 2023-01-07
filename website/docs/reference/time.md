---
title: Time
summary: Query time information and control how it elapses. 

sidebar_position: 1
---

# Time

Query time information and control how it elapses. 

## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| float | **[time](/reference/time#time)**() const<br/>Returns the time in seconds since the creation of the [Context](/reference/Types/context).  |
| float | **[delta_time](/reference/time#delta_time)**() const<br/>Returns an estimate of the time that elapses between two [update()](/reference/events#update) calls.  |
| void | **[time_perceived_as_realtime](/reference/time#time_perceived_as_realtime)**()<br/>Sets the time mode as _realtime_.  |
| void | **[time_perceived_as_constant_delta_time](/reference/time#time_perceived_as_constant_delta_time)**(`float` framerate)<br/>Sets the time mode as _constant delta time_.  |
| void | **[framerate_synced_with_monitor](/reference/time#framerate_synced_with_monitor)**()<br/>Makes sure that the framerate is adapted to your monitor: it will be 60 fps if you have a 60 Hertz monitor (which is the most common), or 120 fps if you have a 120 Hertz monitor, etc.  |
| void | **[framerate_as_high_as_possible](/reference/time#framerate_as_high_as_possible)**()<br/>Removes any limit on the framerate. [update()](/reference/events#update) will be called as fast as possible.  |
| void | **[framerate_capped_at](/reference/time#framerate_capped_at)**(`float` framerate)<br/>Keeps the framerate at the given value.  |


## Functions

### time()

> `float` **[time](/reference/time#time)**() const;


Returns the time in seconds since the creation of the [Context](/reference/Types/context). 

### delta_time()

> `float` **[delta_time](/reference/time#delta_time)**() const;


Returns an estimate of the time that elapses between two [update()](/reference/events#update) calls. 

### time_perceived_as_realtime()

> `void` **[time_perceived_as_realtime](/reference/time#time_perceived_as_realtime)**();


Sets the time mode as _realtime_. 

This means that what is returned by [time()](/reference/time#time) and [delta_time()](/reference/time#delta_time) corresponds to the actual time that elapsed in the real world. This is ideal when you want to do realtime animation and interactive sketches. 


### time_perceived_as_constant_delta_time()

> `void` **[time_perceived_as_constant_delta_time](/reference/time#time_perceived_as_constant_delta_time)**(`float` framerate);


Sets the time mode as _constant delta time_. 

This means that what is returned by [time()](/reference/time#time) and [delta_time()](/reference/time#delta_time) corresponds to an ideal world where there is exactly `1/framerate` seconds between each updates. This is ideal when you are exporting a video and don't want the long export time to influence your animation. `framerate` is expressed in frames per second 


### framerate_synced_with_monitor()

> `void` **[framerate_synced_with_monitor](/reference/time#framerate_synced_with_monitor)**();


Makes sure that the framerate is adapted to your monitor: it will be 60 fps if you have a 60 Hertz monitor (which is the most common), or 120 fps if you have a 120 Hertz monitor, etc. 

This is the default framerate mode. 


### framerate_as_high_as_possible()

> `void` **[framerate_as_high_as_possible](/reference/time#framerate_as_high_as_possible)**();


Removes any limit on the framerate. [update()](/reference/events#update) will be called as fast as possible. 

### framerate_capped_at()

> `void` **[framerate_capped_at](/reference/time#framerate_capped_at)**(`float` framerate);


Keeps the framerate at the given value. 





-------------------------------

Updated on 2023 January 07