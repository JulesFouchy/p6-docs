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
| int | **[integer](/reference/random#integer)**(`int` max)<br/>Returns a random integer between 0 (included) and `max` (excluded).  |
| int | **[integer](/reference/random#integer)**(`int` min, `int` max)<br/>Returns a random integer between `min` (included) and `max` (excluded).  |
| size_t | **[size_type](/reference/random#size_type)**(`size_t` max)<br/>Returns a random size_t between 0 (included) and `max` (excluded).  |
| size_t | **[size_type](/reference/random#size_type)**(`size_t` min, `size_t` max)<br/>Returns a random size_t between `min` (included) and `max` (excluded).  |
| template <typename T \> <br/>const T & | **[among](/reference/random#among)**(`const std::vector< T > &` collection)<br/>Randomly returns one of the elements of the `collection`.  |
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


### integer()

> `int` **[integer](/reference/random#integer)**(`int` max);


Returns a random integer between 0 (included) and `max` (excluded). 

Throws a `std::invalid_argument` exception if `max <= 0`. 


### integer()

> `int` **[integer](/reference/random#integer)**(`int` min, `int` max);


Returns a random integer between `min` (included) and `max` (excluded). 

Throws a `std::invalid_argument` exception if `min >= max`. 


### size_type()

> `size_t` **[size_type](/reference/random#size_type)**(`size_t` max);


Returns a random size_t between 0 (included) and `max` (excluded). 

### size_type()

> `size_t` **[size_type](/reference/random#size_type)**(`size_t` min, `size_t` max);


Returns a random size_t between `min` (included) and `max` (excluded). 

Throws a `std::invalid_argument` exception if `min >= max`. 


### among()

> `const T &` **[among](/reference/random#among)**(`const std::vector< T > &` collection);


Randomly returns one of the elements of the `collection`. 

Throws a `std::invalid_argument` exception if the `collection` is empty. 


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

Updated on 2024 August 01