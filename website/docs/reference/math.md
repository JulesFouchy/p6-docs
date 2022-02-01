---
title: Math

sidebar_position: 1
---

# Math



## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| template <typename T \> <br/>T | **[map](/reference/math#map)**(T x, T from_min, T from_max, T to_min, T to_max)<br/>Maps x, which is in the range [from_mix, from_max], to the range [to_min, to_max].  |

### Attributes

|                | Name           |
| -------------- | -------------- |
| constexpr float | **[TAU](/reference/math#tau)**  |
| constexpr float | **[PI](/reference/math#pi)**  |


## Functions

### map()

> **[map](/reference/math#map)**(T x, T from_min, T from_max, T to_min, T to_max);


Maps x, which is in the range [from_mix, from_max], to the range [to_min, to_max]. 

For example if x == from_min, then the function returns to_min if x == (from_min + from_max) / 2 then the function returns (to_min + to_max) / 2 if x is outside of the range [from_min, from_max] the result will be outside of [to_min, to_max], the same linear behaviour still applies 



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

Updated on 2022 February 01