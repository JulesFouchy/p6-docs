---
title: Update Flow

---

# Update Flow



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[run](/reference/Modules/group__update-flow#run)**()<br/>Starts the [update()](/reference/Classes/classp6_1_1_context#update) loop.  |
| void | **[exit](/reference/Modules/group__update-flow#exit)**()<br/>Stops the [run()](/reference/Modules/group__update-flow#run) loop.  |
| void | **[pause](/reference/Modules/group__update-flow#pause)**()<br/>Pauses the [run()](/reference/Modules/group__update-flow#run) loop.  |
| void | **[resume](/reference/Modules/group__update-flow#resume)**()<br/>Starts the [run()](/reference/Modules/group__update-flow#run) loop again if it was paused with [pause()](/reference/Modules/group__update-flow#pause).  |
| bool | **[is_paused](/reference/Modules/group__update-flow#is_paused)**() const<br/>Returns true iff we are currently paused. See [pause()](/reference/Modules/group__update-flow#pause) and [resume()](/reference/Modules/group__update-flow#resume).  |


## Functions Documentation

### function run

```
void run()
```

Starts the [update()](/reference/Classes/classp6_1_1_context#update) loop. 

[update()](/reference/Classes/classp6_1_1_context#update) will be called repeatedly, until you close the window or call [exit()](/reference/Modules/group__update-flow#exit)


### function exit

```
void exit()
```

Stops the [run()](/reference/Modules/group__update-flow#run) loop. 

This is the programatic equivalent of a user closing the window. 


### function pause

```
void pause()
```

Pauses the [run()](/reference/Modules/group__update-flow#run) loop. 

No [update()](/reference/Classes/classp6_1_1_context#update) will be called, until you call [resume()](/reference/Modules/group__update-flow#resume). User inputs are still processed. 


### function resume

```
void resume()
```

Starts the [run()](/reference/Modules/group__update-flow#run) loop again if it was paused with [pause()](/reference/Modules/group__update-flow#pause). 

### function is_paused

```
bool is_paused() const
```

Returns true iff we are currently paused. See [pause()](/reference/Modules/group__update-flow#pause) and [resume()](/reference/Modules/group__update-flow#resume). 





-------------------------------

Updated on 2022-01-08 at 01:03:11 +0100