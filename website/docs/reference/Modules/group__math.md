---
title: Math

---

# Math



## Functions

|                | Name           |
| -------------- | -------------- |
| template <typename T \> <br/>T | **[map](/reference/Modules/group__math#map)**(T x, T from_min, T from_max, T to_min, T to_max)<br/>Maps x, which is in the range [from_mix, from_max], to the range [to_min, to_max].  |


## Functions Documentation

### function map

```
template <typename T >
T map(
    T x,
    T from_min,
    T from_max,
    T to_min,
    T to_max
)
```

Maps x, which is in the range [from_mix, from_max], to the range [to_min, to_max]. 

For example if x == from_min, then the function returns to_min if x == (from_min + from_max) / 2 then the function returns (to_min + to_max) / 2 if x is outside of the range [from_min, from_max] the result will be outside of [to_min, to_max], the same linear behaviour still applies 






-------------------------------

Updated on 2022-01-08 at 01:03:11 +0100