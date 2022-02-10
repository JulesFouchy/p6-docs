---
title: Drawing
summary: Draw shapes and control the look of them. 

sidebar_position: 1
---

# Drawing

Draw shapes and control the look of them. 

## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| void | **[background](/reference/drawing#background)**(`Color` color)<br/>Sets the color and alpha of each pixel of the canvas.  |
| void | **[square](/reference/drawing#square)**(`FullScreen` )<br/>Draws a square.  |
| void | **[square](/reference/drawing#square)**(`Center` center = {}, `Radius` radius = {}, `Rotation` rotation = {}) |
| void | **[square](/reference/drawing#square)**(`TopLeftCorner` corner, `Radius` radius = {}, `Rotation` rotation = {}) |
| void | **[square](/reference/drawing#square)**(`TopRightCorner` corner, `Radius` radius = {}, `Rotation` rotation = {}) |
| void | **[square](/reference/drawing#square)**(`BottomLeftCorner` corner, `Radius` radius = {}, `Rotation` rotation = {}) |
| void | **[square](/reference/drawing#square)**(`BottomRightCorner` corner, `Radius` radius = {}, `Rotation` rotation = {}) |
| void | **[rectangle](/reference/drawing#rectangle)**(`FullScreen`  = {})<br/>Draws a rectangle.  |
| void | **[rectangle](/reference/drawing#rectangle)**(`Center` center, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[rectangle](/reference/drawing#rectangle)**(`TopLeftCorner` corner, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[rectangle](/reference/drawing#rectangle)**(`TopRightCorner` corner, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[rectangle](/reference/drawing#rectangle)**(`BottomLeftCorner` corner, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[rectangle](/reference/drawing#rectangle)**(`BottomRightCorner` corner, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[rectangle](/reference/drawing#rectangle)**(`Transform2D` transform) |
| void | **[circle](/reference/drawing#circle)**(`FullScreen` )<br/>Draws a circle.  |
| void | **[circle](/reference/drawing#circle)**(`Center` center = {}, `Radius` radius = {}) |
| void | **[ellipse](/reference/drawing#ellipse)**(`FullScreen`  = {})<br/>Draws an ellipse.  |
| void | **[ellipse](/reference/drawing#ellipse)**(`Center` center, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[ellipse](/reference/drawing#ellipse)**(`Transform2D` transform) |
| void | **[image](/reference/drawing#image)**(`const Image &` img, `Center` center = {}, `RadiusX` radiusX = {}, `Rotation` rotation = {})<br/>Draws an image. This will respect the aspect ratio of the image.  |
| void | **[image](/reference/drawing#image)**(`const Image &` img, `Center` center = {}, `RadiusY` radiusY = {}, `Rotation` rotation = {})<br/>Draws an image. This will respect the aspect ratio of the image.  |
| void | **[image](/reference/drawing#image)**(`const Image &` img, `Center` center = {}, `Radii` radii = {}, `Rotation` rotation = {})<br/>Draws an image. :warning: This might distort the image if radii doesn't have the same aspect ratio as the image.  |
| void | **[image](/reference/drawing#image)**(`const Image &` img, `Transform2D` transform = {}) |

### Attributes

|                | Name           |
| -------------- | -------------- |
| Color | **[fill](/reference/drawing#fill)** <br/>The color that is used for the interior of the shapes.  |
| bool | **[use_fill](/reference/drawing#use_fill)** <br/>Whether the shapes will have an interior.  |
| Color | **[stroke](/reference/drawing#stroke)** <br/>The color that is used for the boundary of the shapes.  |
| float | **[stroke_weight](/reference/drawing#stroke_weight)** <br/>The size of the boundary of the shapes.  |
| bool | **[use_stroke](/reference/drawing#use_stroke)** <br/>Whether there will be a boundary on the shape.  |


## Functions

### background()

> `void` **[background](/reference/drawing#background)**(`Color` color);


Sets the color and alpha of each pixel of the canvas. 

NB: No blending is applied; even if you specify an alpha of 0.5 the old canvas is completely erased. This means that setting an alpha here doesn't matter much. It is only meaningful if you export the canvas as a png, or if you later try to blend the canvas on top of another image. 


### square()

> `void` **[square](/reference/drawing#square)**(`FullScreen` );


Draws a square. 

### square()

> `void` **[square](/reference/drawing#square)**(`Center` center ={}, `Radius` radius ={}, `Rotation` rotation ={});



### square()

> `void` **[square](/reference/drawing#square)**(`TopLeftCorner` corner, `Radius` radius ={}, `Rotation` rotation ={});



### square()

> `void` **[square](/reference/drawing#square)**(`TopRightCorner` corner, `Radius` radius ={}, `Rotation` rotation ={});



### square()

> `void` **[square](/reference/drawing#square)**(`BottomLeftCorner` corner, `Radius` radius ={}, `Rotation` rotation ={});



### square()

> `void` **[square](/reference/drawing#square)**(`BottomRightCorner` corner, `Radius` radius ={}, `Rotation` rotation ={});



### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`FullScreen`  ={});


Draws a rectangle. 

### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`Center` center, `Radii` radii ={}, `Rotation` rotation ={});



### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`TopLeftCorner` corner, `Radii` radii ={}, `Rotation` rotation ={});



### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`TopRightCorner` corner, `Radii` radii ={}, `Rotation` rotation ={});



### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`BottomLeftCorner` corner, `Radii` radii ={}, `Rotation` rotation ={});



### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`BottomRightCorner` corner, `Radii` radii ={}, `Rotation` rotation ={});



### rectangle()

> `void` **[rectangle](/reference/drawing#rectangle)**(`Transform2D` transform);



### circle()

> `void` **[circle](/reference/drawing#circle)**(`FullScreen` );


Draws a circle. 

### circle()

> `void` **[circle](/reference/drawing#circle)**(`Center` center ={}, `Radius` radius ={});



### ellipse()

> `void` **[ellipse](/reference/drawing#ellipse)**(`FullScreen`  ={});


Draws an ellipse. 

### ellipse()

> `void` **[ellipse](/reference/drawing#ellipse)**(`Center` center, `Radii` radii ={}, `Rotation` rotation ={});



### ellipse()

> `void` **[ellipse](/reference/drawing#ellipse)**(`Transform2D` transform);



### image()

> `void` **[image](/reference/drawing#image)**(`const Image &` img, `Center` center ={}, `RadiusX` radiusX ={}, `Rotation` rotation ={});


Draws an image. This will respect the aspect ratio of the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const Image &` img, `Center` center ={}, `RadiusY` radiusY ={}, `Rotation` rotation ={});


Draws an image. This will respect the aspect ratio of the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const Image &` img, `Center` center ={}, `Radii` radii ={}, `Rotation` rotation ={});


Draws an image. :warning: This might distort the image if radii doesn't have the same aspect ratio as the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const Image &` img, `Transform2D` transform ={});




## Attributes

### fill

```
Color fill {1.f, 1.f, 1.f, 0.5f};
```

The color that is used for the interior of the shapes. 

### use_fill

```
bool use_fill = true;
```

Whether the shapes will have an interior. 

### stroke

```
Color stroke {0.f, 0.f, 0.f};
```

The color that is used for the boundary of the shapes. 

### stroke_weight

```
float stroke_weight = 0.01f;
```

The size of the boundary of the shapes. 

### use_stroke

```
bool use_stroke = true;
```

Whether there will be a boundary on the shape. 




-------------------------------

Updated on 2022 February 10