---
title: Math
summary: Mathematical functions and numerical constants. 

sidebar_position: 1
---

# Math

Mathematical functions and numerical constants. 

## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| template <typename T \> <br/>T | **[map](/reference/math#map)**(`T` x, `T` from_min, `T` from_max, `T` to_min, `T` to_max)<br/>Maps x, which is in the range `[from_mix, from_max]` to the range `[to_min, to_max]`.  |
| glm::vec2 | **[rotated_by](/reference/math#rotated_by)**(`Angle` angle, `glm::vec2` vector)<br/>Returns a new vector equal to `vector` rotated by `angle` |

### Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr float | **[TAU](/reference/math#tau)**  |
| constexpr float | **[PI](/reference/math#pi)**  |


## Functions

### map()

> `T` **[map](/reference/math#map)**(`T` x, `T` from_min, `T` from_max, `T` to_min, `T` to_max);


Maps x, which is in the range `[from_mix, from_max]` to the range `[to_min, to_max]`. 

For example if `x == from_min` then the function returns `to_min`.

If `x == (from_min + from_max) / 2` then the function returns `(to_min + to_max) / 2`.

If x is outside of the range `[from_min, from_max]` the result will be outside of `[to_min, to_max]`, the same linear behaviour still applies. 


### rotated_by()

> `glm::vec2` **[rotated_by](/reference/math#rotated_by)**(`Angle` angle, `glm::vec2` vector);


Returns a new vector equal to `vector` rotated by `angle`


## Attributes

### TAU

```
static constexpr float TAU = 6.2831853f;
```


### PI

```
static constexpr float PI = TAU / 2.f;
```





-------------------------------

Updated on 2022 April 09