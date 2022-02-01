---
title: Drawing

sidebar_position: 1
---

# Drawing



## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| void | **[background](/reference/drawing#background)**(Color color) const<br/>Sets the color and alpha of each pixel of the canvas.  |
| void | **[rectangle](/reference/drawing#rectangle)**(Transform2D transform) const<br/>Draws a rectangle.  |
| void | **[circle](/reference/drawing#circle)**(Center center, Radius radius) const<br/>Draws a circle.  |
| void | **[ellipse](/reference/drawing#ellipse)**(Center center, Radii radii, Rotation rotation) const<br/>Draws an ellipse.  |
| void | **[ellipse](/reference/drawing#ellipse)**(Center center, Radius radius) const |
| void | **[ellipse](/reference/drawing#ellipse)**(Transform2D transform) const |
| void | **[image](/reference/drawing#image)**(const Image & img, Transform2D transform) const<br/>Draws an image.  |

### Attributes

|                | Name           |
| -------------- | -------------- |
| Color | **[fill](/reference/drawing#fill)**  |
| Color | **[stroke](/reference/drawing#stroke)**  |
| float | **[stroke_weight](/reference/drawing#stroke_weight)**  |


## Functions

### background()

> **[background](/reference/drawing#background)**(Color color) const;


Sets the color and alpha of each pixel of the canvas. 

NB: No blending is applied; even if you specify an alpha of 0.5 the old canvas is completely erased. This means that setting an alpha here doesn't matter much. It is only meaningful if you export the canvas as a png, or if you later try to blend the canvas on top of another image. 


### rectangle()

> **[rectangle](/reference/drawing#rectangle)**(Transform2D transform) const;


Draws a rectangle. 

**Parameters**: 

  * **params** Shape of the rect




```cpp
p6.fill = {0.f, 0.8f, 0.3f};
p6.rectangle({});
```


### circle()

> **[circle](/reference/drawing#circle)**(Center center, Radius radius) const;


Draws a circle. 

### ellipse()

> **[ellipse](/reference/drawing#ellipse)**(Center center, Radii radii, Rotation rotation) const;


Draws an ellipse. 

### ellipse()

> **[ellipse](/reference/drawing#ellipse)**(Center center, Radius radius) const;



### ellipse()

> **[ellipse](/reference/drawing#ellipse)**(Transform2D transform) const;



### image()

> **[image](/reference/drawing#image)**(const Image & img, Transform2D transform) const;


Draws an image. 


## Attributes

### fill

```
Color fill {1.f, 1.f, 1.f, 0.5f};
```


### stroke

```
Color stroke {0.f, 0.f, 0.f};
```


### stroke_weight

```
float stroke_weight = 0.01f;
```





-------------------------------

Updated on 2022 February 01