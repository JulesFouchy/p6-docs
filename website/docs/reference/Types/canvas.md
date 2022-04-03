---
title: p6::Canvas
summary: A canvas is an image that can be drawn onto. 

sidebar_position: 1
---

# p6::Canvas

**Section:** **[Canvas](/reference/canvas)**



A canvas is an image that can be drawn onto. 

Inherits from [p6::ImageOrCanvas](/reference/Types/image_or_canvas)



## Summary

|                | Name           |
| -------------- | -------------- |
| | **[Canvas](/reference/Types/canvas#canvas)**(`ImageSize` size, `glpp::TextureLayout` texture_layout = {glpp::InternalFormat::RGBA16, glpp::Channels::RGBA, glpp::TexelDataType::UnsignedByte})<br/>Creates an empty canvas texture_layout is an advanced setting; it controls how the pixels are gonna be stored on the GPU.  |
| ImageSize | **[size](/reference/Types/canvas#size)**() const<br/>Returns the size in pixels.  |
| virtual float | **[aspect_ratio](/reference/Types/canvas#aspect_ratio)**() const override<br/>Returns the aspect ratio (`width / height`)  |
| float | **[inverse_aspect_ratio](/reference/Types/canvas#inverse_aspect_ratio)**() const<br/>Returns the inverse aspect ratio (`height / width`)  |
| virtual const Texture & | **[texture](/reference/Types/canvas#texture)**() const override<br/>Returns the internal texture, that you can use to do advanced stuff with custom shaders.  |
| const glpp::RenderTarget & | **[render_target](/reference/Types/canvas#render_target)**() const<br/>Returns the internal render target, that you can use to do advanced stuff.  |
| glpp::RenderTarget & | **[render_target](/reference/Types/canvas#render_target)**()<br/>Returns the internal render target, that you can use to do advanced stuff.  |
| void | **[resize](/reference/Types/canvas#resize)**(`ImageSize` size)<br/>Resizes the canvas.  |
| void | **[destructive_resize](/reference/Types/canvas#destructive_resize)**(`ImageSize` size)<br/>Resizes the canvas.  |
## Details


### Canvas()

> **[Canvas](/reference/Types/canvas#canvas)**(`ImageSize` size, `glpp::TextureLayout` texture_layout ={glpp::InternalFormat::RGBA16, glpp::Channels::RGBA, glpp::TexelDataType::UnsignedByte});


Creates an empty canvas texture_layout is an advanced setting; it controls how the pixels are gonna be stored on the GPU. 

### size()

> `ImageSize` **[size](/reference/Types/canvas#size)**() const;


Returns the size in pixels. 

### aspect_ratio()

> `float` **[aspect_ratio](/reference/Types/canvas#aspect_ratio)**() const override;


Returns the aspect ratio (`width / height`) 

**Reimplements**: [p6::ImageOrCanvas::aspect_ratio](/reference/Types/image_or_canvas#aspect_ratio)


### inverse_aspect_ratio()

> `float` **[inverse_aspect_ratio](/reference/Types/canvas#inverse_aspect_ratio)**() const;


Returns the inverse aspect ratio (`height / width`) 

### texture()

> `const Texture &` **[texture](/reference/Types/canvas#texture)**() const override;


Returns the internal texture, that you can use to do advanced stuff with custom shaders. 

**Reimplements**: [p6::ImageOrCanvas::texture](/reference/Types/image_or_canvas#texture)


### render_target()

> `const glpp::RenderTarget &` **[render_target](/reference/Types/canvas#render_target)**() const;


Returns the internal render target, that you can use to do advanced stuff. 

### render_target()

> `glpp::RenderTarget &` **[render_target](/reference/Types/canvas#render_target)**();


Returns the internal render target, that you can use to do advanced stuff. 

### resize()

> `void` **[resize](/reference/Types/canvas#resize)**(`ImageSize` size);


Resizes the canvas. 

### destructive_resize()

> `void` **[destructive_resize](/reference/Types/canvas#destructive_resize)**(`ImageSize` size);


Resizes the canvas. 

:warning: All of its pixel content is lost. If you don't want that you can use [resize()](/reference/Types/canvas#resize) instead. 


-------------------------------

Updated on 2022 April 03