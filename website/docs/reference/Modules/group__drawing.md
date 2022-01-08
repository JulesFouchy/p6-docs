---
title: Drawing

---

# Drawing



## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[background](/reference/Modules/group__drawing#background)**(Color color) const<br/>Sets the color and alpha of each pixel of the canvas.  |
| void | **[rectangle](/reference/Modules/group__drawing#rectangle)**(RectangleParams params) const<br/>Draws a rectangle.  |
| void | **[ellipse](/reference/Modules/group__drawing#ellipse)**(RectangleParams params) const<br/>Draws an ellipse.  |
| void | **[image](/reference/Modules/group__drawing#image)**(const Image & img, RectangleParams params) const<br/>Draws an image.  |

## Attributes

|                | Name           |
| -------------- | -------------- |
| Color | **[fill](/reference/Modules/group__drawing#fill)**  |
| Color | **[stroke](/reference/Modules/group__drawing#stroke)**  |
| float | **[stroke_weight](/reference/Modules/group__drawing#stroke_weight)**  |


## Functions Documentation

### background()

> **[background](/reference/Modules/group__drawing#background)**(Color color) const;


Sets the color and alpha of each pixel of the canvas. 

NB: No blending is applied ; even if you specify an alpha of 0.5 the old canvas is completely erased. This means that setting an alpha here doesn't matter much. It is only meaningful if you export the canvas as a png, or if you try to blend the canvas on top of another image. 


### rectangle()

> **[rectangle](/reference/Modules/group__drawing#rectangle)**(RectangleParams params) const;


Draws a rectangle. 

**Parameters**: 

  * **params** Shape of the rect




```cpp
p6.fill = {0.f, 0.8f, 0.3f};
p6.rectangle({});
```


### ellipse()

> **[ellipse](/reference/Modules/group__drawing#ellipse)**(RectangleParams params) const;


Draws an ellipse. 

### image()

> **[image](/reference/Modules/group__drawing#image)**(const Image & img, RectangleParams params) const;


Draws an image. 


## Attributes Documentation

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

Updated on 2022 January 08