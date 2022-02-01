---
title: Update Flow

sidebar_position: 1
---

# Update Flow



## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| void | **[start](/reference/update-flow#start)**()<br/>Starts the [update()](/reference/Types/context#update) loop.  |
| void | **[stop](/reference/update-flow#stop)**()<br/>Stops the [update()](/reference/Types/context#update) loop.  |
| void | **[pause](/reference/update-flow#pause)**()<br/>Pauses the [update()](/reference/Types/context#update) loop.  |
| void | **[resume](/reference/update-flow#resume)**()<br/>Resumes the [update()](/reference/Types/context#update) loop if it was paused with [pause()](/reference/update-flow#pause).  |
| bool | **[is_paused](/reference/update-flow#is_paused)**() const<br/>Returns true iff we are currently paused. See [pause()](/reference/update-flow#pause) and [resume()](/reference/update-flow#resume).  |


## Functions

### start()

> **[start](/reference/update-flow#start)**();


Starts the [update()](/reference/Types/context#update) loop. 

[update()](/reference/Types/context#update) will be called repeatedly, until you close the window or call [stop()](/reference/update-flow#stop)


### stop()

> **[stop](/reference/update-flow#stop)**();


Stops the [update()](/reference/Types/context#update) loop. 

This is the programatic equivalent of a user closing the window. 


### pause()

> **[pause](/reference/update-flow#pause)**();


Pauses the [update()](/reference/Types/context#update) loop. 

No [update()](/reference/Types/context#update) will be called, until you call [resume()](/reference/update-flow#resume). User inputs are still processed. 


### resume()

> **[resume](/reference/update-flow#resume)**();


Resumes the [update()](/reference/Types/context#update) loop if it was paused with [pause()](/reference/update-flow#pause). 

It has no effect if the loop was already playing. 


### is_paused()

> **[is_paused](/reference/update-flow#is_paused)**() const;


Returns true iff we are currently paused. See [pause()](/reference/update-flow#pause) and [resume()](/reference/update-flow#resume). 





-------------------------------

Updated on 2022 February 01