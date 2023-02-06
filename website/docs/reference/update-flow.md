---
title: Update Flow
summary: Control the update() loop and query information about it. 

sidebar_position: 1
---

# Update Flow

Control the [update()](/reference/events#update) loop and query information about it. 

## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| void | **[start](/reference/update-flow#start)**()<br/>Starts the [update()](/reference/events#update) loop.  |
| void | **[stop](/reference/update-flow#stop)**()<br/>Stops the [update()](/reference/events#update) loop.  |
| void | **[pause](/reference/update-flow#pause)**()<br/>Pauses the [update()](/reference/events#update) loop.  |
| void | **[resume](/reference/update-flow#resume)**()<br/>Resumes the [update()](/reference/events#update) loop if it was paused with [pause()](/reference/update-flow#pause).  |
| bool | **[is_paused](/reference/update-flow#is_paused)**() const<br/>Returns true iff the [update()](/reference/events#update) loop is currently paused.  |


## Functions

### start()

> `void` **[start](/reference/update-flow#start)**();


Starts the [update()](/reference/events#update) loop. 

[update()](/reference/events#update) will be called repeatedly, until you close the window or call [stop()](/reference/update-flow#stop). 


### stop()

> `void` **[stop](/reference/update-flow#stop)**();


Stops the [update()](/reference/events#update) loop. 

This is the programatic equivalent of a user closing the window. 


### pause()

> `void` **[pause](/reference/update-flow#pause)**();


Pauses the [update()](/reference/events#update) loop. 

No [update()](/reference/events#update) will be called, until you call [resume()](/reference/update-flow#resume). User inputs are still processed. 


### resume()

> `void` **[resume](/reference/update-flow#resume)**();


Resumes the [update()](/reference/events#update) loop if it was paused with [pause()](/reference/update-flow#pause). 

It has no effect if the loop was already playing. 


### is_paused()

> `bool` **[is_paused](/reference/update-flow#is_paused)**() const;


Returns true iff the [update()](/reference/events#update) loop is currently paused. 





-------------------------------

Updated on 2023 February 06