---
title: Random
summary: Pick random numbers, points, directions, etc. 

sidebar_position: 1
---

# Random

Pick random numbers, points, directions, etc. 

## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| float | **[number](/reference/random#number)**()<br/>Returns a random number between 0 and 1.  |
| float | **[number](/reference/random#number)**(`float` max)<br/>Returns a random number between 0 and `max`.  |
| float | **[number](/reference/random#number)**(`float` min, `float` max)<br/>Returns a random number between `min` and `max`.  |
| glm::vec2 | **[point](/reference/random#point)**(`const [p6::Context](/reference/Types/context) &` ctx)<br/>Returns a point inside the main canvas of the context.  |
| glm::vec2 | **[point](/reference/random#point)**(`const [p6::Canvas](/reference/Types/canvas) &` canvas)<br/>Returns a point inside the given canvas.  |
| glm::vec2 | **[point](/reference/random#point)**()<br/>Returns a random point in a square between (-1, -1) and (1, 1).  |
| glm::vec2 | **[point](/reference/random#point)**(`glm::vec2` min, `glm::vec2` max)<br/>Returns a random point in a rectangle between `min` and `max`.  |
| glm::vec2 | **[point](/reference/random#point)**(`float` aspect_ratio)<br/>Returns a random point in a rectangle between (-aspect_ratio, -1) and (aspect_ratio, 1).  |
| glm::vec2 | **[direction](/reference/random#direction)**()<br/>Returns a random direction (vector of length 1).  |
| Angle | **[angle](/reference/random#angle)**()<br/>Returns a random angle.  |


## Functions

### number()

> `float` **[number](/reference/random#number)**();


Returns a random number between 0 and 1. 

### number()

> `float` **[number](/reference/random#number)**(`float` max);


Returns a random number between 0 and `max`. 

Throws a `std::invalid_argument` exception if `max < 0`. 


### number()

> `float` **[number](/reference/random#number)**(`float` min, `float` max);


Returns a random number between `min` and `max`. 

Throws a `std::invalid_argument` exception if `min > max`. 


### point()

> `glm::vec2` **[point](/reference/random#point)**(`const [p6::Context](/reference/Types/context) &` ctx);


Returns a point inside the main canvas of the context. 

### point()

> `glm::vec2` **[point](/reference/random#point)**(`const [p6::Canvas](/reference/Types/canvas) &` canvas);


Returns a point inside the given canvas. 

### point()

> `glm::vec2` **[point](/reference/random#point)**();


Returns a random point in a square between (-1, -1) and (1, 1). 

### point()

> `glm::vec2` **[point](/reference/random#point)**(`glm::vec2` min, `glm::vec2` max);


Returns a random point in a rectangle between `min` and `max`. 

Throws a `std::invalid_argument` exception if `min.x > max.x || min.y > max.y`. 


### point()

> `glm::vec2` **[point](/reference/random#point)**(`float` aspect_ratio);


Returns a random point in a rectangle between (-aspect_ratio, -1) and (aspect_ratio, 1). 

### direction()

> `glm::vec2` **[direction](/reference/random#direction)**();


Returns a random direction (vector of length 1). 

### angle()

> `Angle` **[angle](/reference/random#angle)**();


Returns a random angle. 





-------------------------------

Updated on 2023 January 07