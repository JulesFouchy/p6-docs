---
title: p6::Angle

sidebar_position: 1
---

# p6::Angle





Inherits from op::Addable< Angle >, op::Subtractable< Angle >, op::Negatable< Angle >, op::Scalable< Angle >



## Summary

|                | Name           |
| -------------- | -------------- |
| constexpr | **[Angle](/reference/Types/angle#angle)**() =default |
| constexpr | **[Angle](/reference/Types/angle#angle)**(`[Radians](/reference/Types/radians)` value) |
| constexpr | **[Angle](/reference/Types/angle#angle)**(`glm::vec2` direction)<br/>Constructs the angle that `direction` makes with the positive x axis.  |
| float | **[as_turns](/reference/Types/angle#as_turns)**() const |
| float | **[as_radians](/reference/Types/angle#as_radians)**() const |
| float | **[as_degrees](/reference/Types/angle#as_degrees)**() const |
| [Radians](/reference/Types/radians) | **[value](/reference/Types/angle#value)**  |

## Details


### Angle()

> `constexpr` **[Angle](/reference/Types/angle#angle)**() =default;



### Angle()

> `constexpr` **[Angle](/reference/Types/angle#angle)**(`[Radians](/reference/Types/radians)` value);



### Angle()

> `constexpr` **[Angle](/reference/Types/angle#angle)**(`glm::vec2` direction);


Constructs the angle that `direction` makes with the positive x axis. 

`direction` does not need to be normalized. 


### as_turns()

> `float` **[as_turns](/reference/Types/angle#as_turns)**() const;



### as_radians()

> `float` **[as_radians](/reference/Types/angle#as_radians)**() const;



### as_degrees()

> `float` **[as_degrees](/reference/Types/angle#as_degrees)**() const;





### value

```cpp
Radians value {};
```


-------------------------------

Updated on 2024 August 01