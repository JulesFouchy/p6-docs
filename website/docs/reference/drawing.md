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
| void | **[equilateral_triangle](/reference/drawing#equilateral_triangle)**(`Center` center, `Radius` radius = {}, `Rotation` rotation = {})<br/>Draws an equilateral triangle. `[Radius](/reference/Types/radius)` is the distance between the `[Center](/reference/Types/center)` and one of the tips of the triangle.  |
| void | **[triangle](/reference/drawing#triangle)**(`Point2D` p1, `Point2D` p2, `Point2D` p3, `Center` center = {}, `Rotation` rotation = {})<br/>Draws a triangle between the three points, translated by `[Center](/reference/Types/center)` and rotated by `Rotation`.  |
| void | **[triangle](/reference/drawing#triangle)**(`Point2D` p1, `Point2D` p2, `Point2D` p3, `Transform2D` transform)<br/>Draws a triangle between the three points, and applies the [Transform2D](/reference/Types/transform2_d) to the triangle.  |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `Fit`  = {})<br/>Draws an image as big as possible on the screen. This will respect the aspect ratio of the image.  |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `FitX` ) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `FitY` ) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `Center` center, `RadiusX` radiusX = {}, `Rotation` rotation = {})<br/>Draws an image. This will respect the aspect ratio of the image.  |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `TopLeftCorner` corner, `RadiusX` radiusX = {}, `Rotation` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `TopRightCorner` corner, `RadiusX` radiusX = {}, `Rotation` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `BottomLeftCorner` corner, `RadiusX` radiusX = {}, `Rotation` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `BottomRightCorner` corner, `RadiusX` radiusX = {}, `Rotation` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `Center` center, `RadiusY` radiusY = {}, `Rotation` rotation = {})<br/>Draws an image. This will respect the aspect ratio of the image.  |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `TopLeftCorner` corner, `RadiusY` radiusY = {}, `Rotation` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `TopRightCorner` corner, `RadiusY` radiusY = {}, `Rotation` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `BottomLeftCorner` corner, `RadiusY` radiusY = {}, `Rotation` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `BottomRightCorner` corner, `RadiusY` radiusY = {}, `Rotation` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `FullScreen` )<br/>Draws an image that takes the entire window. :warning: This might distort the image if the window doesn't have the same aspect ratio as the image.  |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `Center` center, `Radii` radii = {}, `Rotation` rotation = {})<br/>Draws an image. :warning: This might distort the image if radii doesn't have the same aspect ratio as the image.  |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `TopLeftCorner` corner, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `TopRightCorner` corner, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `BottomLeftCorner` corner, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `BottomRightCorner` corner, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `Transform2D` transform) |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `FullScreen`  = {})<br/>Draws a rectangle using a custom fragment shader.  |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `Center` center, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `TopLeftCorner` corner, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `TopRightCorner` corner, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `BottomLeftCorner` corner, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `BottomRightCorner` corner, `Radii` radii = {}, `Rotation` rotation = {}) |
| void | **[square_with_shader](/reference/drawing#square_with_shader)**(`const Shader &` shader, `Center` center = {}, `Radius` radius = {}, `Rotation` rotation = {}) |
| void | **[square_with_shader](/reference/drawing#square_with_shader)**(`const Shader &` shader, `TopLeftCorner` corner, `Radius` radius = {}, `Rotation` rotation = {}) |
| void | **[square_with_shader](/reference/drawing#square_with_shader)**(`const Shader &` shader, `TopRightCorner` corner, `Radius` radius = {}, `Rotation` rotation = {}) |
| void | **[square_with_shader](/reference/drawing#square_with_shader)**(`const Shader &` shader, `BottomLeftCorner` corner, `Radius` radius = {}, `Rotation` rotation = {}) |
| void | **[square_with_shader](/reference/drawing#square_with_shader)**(`const Shader &` shader, `BottomRightCorner` corner, `Radius` radius = {}, `Rotation` rotation = {}) |
| void | **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `Transform2D` transform) |
| void | **[line](/reference/drawing#line)**(`glm::vec2` start, `glm::vec2` end)<br/>Draws a line between two points.  |

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



### equilateral_triangle()

> `void` **[equilateral_triangle](/reference/drawing#equilateral_triangle)**(`Center` center, `Radius` radius ={}, `Rotation` rotation ={});


Draws an equilateral triangle. `[Radius](/reference/Types/radius)` is the distance between the `[Center](/reference/Types/center)` and one of the tips of the triangle. 

### triangle()

> `void` **[triangle](/reference/drawing#triangle)**(`Point2D` p1, `Point2D` p2, `Point2D` p3, `Center` center ={}, `Rotation` rotation ={});


Draws a triangle between the three points, translated by `[Center](/reference/Types/center)` and rotated by `Rotation`. 

### triangle()

> `void` **[triangle](/reference/drawing#triangle)**(`Point2D` p1, `Point2D` p2, `Point2D` p3, `Transform2D` transform);


Draws a triangle between the three points, and applies the [Transform2D](/reference/Types/transform2_d) to the triangle. 

### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `Fit`  ={});


Draws an image as big as possible on the screen. This will respect the aspect ratio of the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `FitX` );



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `FitY` );



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `Center` center, `RadiusX` radiusX ={}, `Rotation` rotation ={});


Draws an image. This will respect the aspect ratio of the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `TopLeftCorner` corner, `RadiusX` radiusX ={}, `Rotation` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `TopRightCorner` corner, `RadiusX` radiusX ={}, `Rotation` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `BottomLeftCorner` corner, `RadiusX` radiusX ={}, `Rotation` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `BottomRightCorner` corner, `RadiusX` radiusX ={}, `Rotation` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `Center` center, `RadiusY` radiusY ={}, `Rotation` rotation ={});


Draws an image. This will respect the aspect ratio of the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `TopLeftCorner` corner, `RadiusY` radiusY ={}, `Rotation` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `TopRightCorner` corner, `RadiusY` radiusY ={}, `Rotation` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `BottomLeftCorner` corner, `RadiusY` radiusY ={}, `Rotation` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `BottomRightCorner` corner, `RadiusY` radiusY ={}, `Rotation` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `FullScreen` );


Draws an image that takes the entire window. :warning: This might distort the image if the window doesn't have the same aspect ratio as the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `Center` center, `Radii` radii ={}, `Rotation` rotation ={});


Draws an image. :warning: This might distort the image if radii doesn't have the same aspect ratio as the image. 

### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `TopLeftCorner` corner, `Radii` radii ={}, `Rotation` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `TopRightCorner` corner, `Radii` radii ={}, `Rotation` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `BottomLeftCorner` corner, `Radii` radii ={}, `Rotation` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `BottomRightCorner` corner, `Radii` radii ={}, `Rotation` rotation ={});



### image()

> `void` **[image](/reference/drawing#image)**(`const ImageOrCanvas &` img, `Transform2D` transform);



### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `FullScreen`  ={});


Draws a rectangle using a custom fragment shader. 

### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `Center` center, `Radii` radii ={}, `Rotation` rotation ={});



### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `TopLeftCorner` corner, `Radii` radii ={}, `Rotation` rotation ={});



### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `TopRightCorner` corner, `Radii` radii ={}, `Rotation` rotation ={});



### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `BottomLeftCorner` corner, `Radii` radii ={}, `Rotation` rotation ={});



### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `BottomRightCorner` corner, `Radii` radii ={}, `Rotation` rotation ={});



### square_with_shader()

> `void` **[square_with_shader](/reference/drawing#square_with_shader)**(`const Shader &` shader, `Center` center ={}, `Radius` radius ={}, `Rotation` rotation ={});



### square_with_shader()

> `void` **[square_with_shader](/reference/drawing#square_with_shader)**(`const Shader &` shader, `TopLeftCorner` corner, `Radius` radius ={}, `Rotation` rotation ={});



### square_with_shader()

> `void` **[square_with_shader](/reference/drawing#square_with_shader)**(`const Shader &` shader, `TopRightCorner` corner, `Radius` radius ={}, `Rotation` rotation ={});



### square_with_shader()

> `void` **[square_with_shader](/reference/drawing#square_with_shader)**(`const Shader &` shader, `BottomLeftCorner` corner, `Radius` radius ={}, `Rotation` rotation ={});



### square_with_shader()

> `void` **[square_with_shader](/reference/drawing#square_with_shader)**(`const Shader &` shader, `BottomRightCorner` corner, `Radius` radius ={}, `Rotation` rotation ={});



### rectangle_with_shader()

> `void` **[rectangle_with_shader](/reference/drawing#rectangle_with_shader)**(`const Shader &` shader, `Transform2D` transform);



### line()

> `void` **[line](/reference/drawing#line)**(`glm::vec2` start, `glm::vec2` end);


Draws a line between two points. 

It uses the `stroke` color, and `stroke_weight` as its thickness. 



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

Updated on 2023 February 15