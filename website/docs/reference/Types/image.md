---
title: p6::Image
summary: An image can be drawn onto, and can be displayed. 

sidebar_position: 1
---

# p6::Image

**Section:** **[Image](/reference/image)**



An image can be drawn onto, and can be displayed.  [More...](#detailed-description)



## Summary

|                | Name           |
| -------------- | -------------- |
| | **[Image](/reference/Types/image#image)**(`ImageSize` size, `const uint8_t *` data = nullptr, `glpp::TextureLayout` texture_layout = {glpp::InternalFormat::RGBA16, glpp::Channels::RGBA, glpp::TexelDataType::UnsignedByte})<br/>data must be nullptr, or an array of size `size.width() * size.height() * 4`, with R, G, B and A channels, starting with the bottom left pixel, and going row by row.  |
| ImageSize | **[size](/reference/Types/image#size)**() const<br/>Returns the size in pixels of the image.  |
| float | **[aspect_ratio](/reference/Types/image#aspect_ratio)**() const<br/>Returns the aspect ratio of the image (`width / height`)  |
| const Texture & | **[texture](/reference/Types/image#texture)**() const<br/>Returns the internal texture, that you can use to do advanced stuff with custom shaders.  |
| void | **[resize](/reference/Types/image#resize)**(`ImageSize` size)<br/>Resizes the image.  |
| void | **[destructive_resize](/reference/Types/image#destructive_resize)**(`ImageSize` size)<br/>Resizes the image.  |
## Detailed Description

```cpp
class p6::Image;
```

An image can be drawn onto, and can be displayed. 

If you plan on drawing on the image, you can create it without data (it will create a black and transparent image). If you want to load an image, you can use [load_image()](/reference/image#load_image) instead of the constructor. 

## Details


### Image()

> **[Image](/reference/Types/image#image)**(`ImageSize` size, `const uint8_t *` data =nullptr, `glpp::TextureLayout` texture_layout ={glpp::InternalFormat::RGBA16, glpp::Channels::RGBA, glpp::TexelDataType::UnsignedByte});


data must be nullptr, or an array of size `size.width() * size.height() * 4`, with R, G, B and A channels, starting with the bottom left pixel, and going row by row. 

texture_layout is an advanced setting; it controls how the pixels are gonna be stored on the GPU. 


### size()

> `ImageSize` **[size](/reference/Types/image#size)**() const;


Returns the size in pixels of the image. 

### aspect_ratio()

> `float` **[aspect_ratio](/reference/Types/image#aspect_ratio)**() const;


Returns the aspect ratio of the image (`width / height`) 

### texture()

> `const Texture &` **[texture](/reference/Types/image#texture)**() const;


Returns the internal texture, that you can use to do advanced stuff with custom shaders. 

### resize()

> `void` **[resize](/reference/Types/image#resize)**(`ImageSize` size);


Resizes the image. 

### destructive_resize()

> `void` **[destructive_resize](/reference/Types/image#destructive_resize)**(`ImageSize` size);


Resizes the image. 

:warning: All of its content is lost. If you don't want that you can use [resize()](/reference/Types/image#resize) instead. 


-------------------------------

Updated on 2022 February 23