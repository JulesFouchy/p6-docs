---
title: p6::Image
summary: An image can be drawn onto, and can be displayed. 

---

# p6::Image



An image can be drawn onto, and can be displayed.  [More...](#detailed-description)


`#include <Image.h>`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Image](/reference/Classes/classp6_1_1_image#image)**(ImageSize size, const uint8_t * data =nullptr)<br/>data must be nullptr, or an array of size size.width() * size.height() * 4, with R, G, B and A channels, starting with the bottom left pixel, and going row by row  |
| ImageSize | **[size](/reference/Classes/classp6_1_1_image#size)**() const<br/>Returns the size in pixels of the image.  |
| const Texture & | **[texture](/reference/Classes/classp6_1_1_image#texture)**() const<br/>Returns the internal texture, that you can use to do advanced stuff with custom shaders.  |
| void | **[destructive_resize](/reference/Classes/classp6_1_1_image#destructive_resize)**(ImageSize size)<br/>Resizes the image /!\ All of its content is lost.  |
| void | **[resize](/reference/Classes/classp6_1_1_image#resize)**(ImageSize size)<br/>Resizes the image.  |

## Friends

|                | Name           |
| -------------- | -------------- |
| class | **[Context](/reference/Classes/classp6_1_1_image#context)**  |

## Detailed Description

```cpp
class p6::Image;
```

An image can be drawn onto, and can be displayed. 

If you plan on drawing on the image, you can create it without data (it will create a black and transparent image). If you want to load an image, you can use load_image() instead of the constructor 

## Public Functions Documentation

### Image()

```cpp
explicit Image(
    ImageSize size,
    const uint8_t * data =nullptr
)
```

data must be nullptr, or an array of size size.width() * size.height() * 4, with R, G, B and A channels, starting with the bottom left pixel, and going row by row 

### size()

```cpp
inline ImageSize size() const
```

Returns the size in pixels of the image. 

### texture()

```cpp
inline const Texture & texture() const
```

Returns the internal texture, that you can use to do advanced stuff with custom shaders. 

### destructive_resize()

```cpp
inline void destructive_resize(
    ImageSize size
)
```

Resizes the image /!\ All of its content is lost. 

If you don't want that you can use [resize()](/reference/Classes/classp6_1_1_image#resize) instead 


### resize()

```cpp
inline void resize(
    ImageSize size
)
```

Resizes the image. 

## Friends

### friend Context

```cpp
friend class Context(
    Context 
);
```


-------------------------------

Updated on 2022-01-08 at 01:03:11 +0100