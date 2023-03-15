---
title: p6::Image

sidebar_position: 1
---

# p6::Image

**Section:** **[Image](/reference/image)**





Inherits from [p6::ImageOrCanvas](/reference/Types/image_or_canvas)



## Summary

|                | Name           |
| -------------- | -------------- |
| | **[Image](/reference/Types/image#image)**(`ImageSize` size, `const uint8_t *` data, `glpp::TextureLayout` texture_layout = {glpp::InternalFormat::RGBA8, glpp::Channels::RGBA, glpp::TexelDataType::UnsignedByte})<br/>Creates an [Image](/reference/Types/image) filled with data.  |
| ImageSize | **[size](/reference/Types/image#size)**() const<br/>Returns the size in pixels.  |
| virtual float | **[aspect_ratio](/reference/Types/image#aspect_ratio)**() const override<br/>Returns the aspect ratio (`width / height`)  |
| float | **[inverse_aspect_ratio](/reference/Types/image#inverse_aspect_ratio)**() const<br/>Returns the inverse aspect ratio (`height / width`)  |
| virtual const glpp::Texture2D & | **[texture](/reference/Types/image#texture)**() const override |
## Details


### Image()

> **[Image](/reference/Types/image#image)**(`ImageSize` size, `const uint8_t *` data, `glpp::TextureLayout` texture_layout ={glpp::InternalFormat::RGBA8, glpp::Channels::RGBA, glpp::TexelDataType::UnsignedByte});


Creates an [Image](/reference/Types/image) filled with data. 

This is for advanded uses; prefer using [p6::load_image()](/reference/image#load_image). data must be an array of size `size.width() * size.height() * 4`, with R, G, B and A channels, starting with the bottom left pixel, and going row by row. texture_layout is an advanced setting; it controls how the pixels are gonna be stored on the GPU. 


### size()

> `ImageSize` **[size](/reference/Types/image#size)**() const;


Returns the size in pixels. 

### aspect_ratio()

> `float` **[aspect_ratio](/reference/Types/image#aspect_ratio)**() const override;


Returns the aspect ratio (`width / height`) 

**Reimplements**: [p6::ImageOrCanvas::aspect_ratio](/reference/Types/image_or_canvas#aspect_ratio)


### inverse_aspect_ratio()

> `float` **[inverse_aspect_ratio](/reference/Types/image#inverse_aspect_ratio)**() const;


Returns the inverse aspect ratio (`height / width`) 

### texture()

> `const glpp::Texture2D &` **[texture](/reference/Types/image#texture)**() const override;



**Reimplements**: [p6::ImageOrCanvas::texture](/reference/Types/image_or_canvas#texture)


-------------------------------

Updated on 2023 March 15