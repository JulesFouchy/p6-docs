---
title: Time
summary: Query time information and control how the time evolves. 

sidebar_position: 1
---

# Time

Query time information and control how the time evolves. 

## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| float | **[time](/reference/time#time)**() const<br/>Returns the time in seconds since the creation of the [Context](/reference/Types/context).  |
| float | **[delta_time](/reference/time#delta_time)**() const<br/>Returns the time in seconds since the last [update()](/reference/events#update) call (or 0 if this is the first update).  |
| void | **[set_time_mode_realtime](/reference/time#set_time_mode_realtime)**()<br/>Sets the time mode as _realtime_.  |
| void | **[set_time_mode_fixedstep](/reference/time#set_time_mode_fixedstep)**(`float` framerate)<br/>Sets the time mode as _fixedstep_.  |


## Functions

### time()

> `float` **[time](/reference/time#time)**() const;


Returns the time in seconds since the creation of the [Context](/reference/Types/context). 

### delta_time()

> `float` **[delta_time](/reference/time#delta_time)**() const;


Returns the time in seconds since the last [update()](/reference/events#update) call (or 0 if this is the first update). 

### set_time_mode_realtime()

> `void` **[set_time_mode_realtime](/reference/time#set_time_mode_realtime)**();


Sets the time mode as _realtime_. 

This means that what is returned by [time()](/reference/time#time) and [delta_time()](/reference/time#delta_time) corresponds to the actual time that elapsed in the real world. This is ideal when you want to do realtime animation and interactive sketches. 


### set_time_mode_fixedstep()

> `void` **[set_time_mode_fixedstep](/reference/time#set_time_mode_fixedstep)**(`float` framerate);


Sets the time mode as _fixedstep_. 

This means that what is returned by [time()](/reference/time#time) and [delta_time()](/reference/time#delta_time) corresponds to an ideal world where there is exactly `1/framerate` seconds between each updates. This is ideal when you are exporting a video and don't want the long export time to influence your animation. `framerate` is expressed in frames per second 






-------------------------------

Updated on 2022 March 06