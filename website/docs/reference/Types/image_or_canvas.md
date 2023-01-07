---
title: p6::ImageOrCanvas

sidebar_position: 1
---

# p6::ImageOrCanvas





Inherited by [p6::Canvas](/reference/Types/canvas), [p6::Image](/reference/Types/image)



## Summary

|                | Name           |
| -------------- | -------------- |
| virtual const glpp::Texture2D & | **[texture](/reference/Types/image_or_canvas#texture)**() const =0 |
| virtual float | **[aspect_ratio](/reference/Types/image_or_canvas#aspect_ratio)**() const =0 |
## Details


### texture()

> `const glpp::Texture2D &` **[texture](/reference/Types/image_or_canvas#texture)**() const =0;



**Reimplemented by**: [p6::Canvas::texture](/reference/Types/canvas#texture), [p6::Image::texture](/reference/Types/image#texture)


### aspect_ratio()

> `float` **[aspect_ratio](/reference/Types/image_or_canvas#aspect_ratio)**() const =0;



**Reimplemented by**: [p6::Canvas::aspect_ratio](/reference/Types/canvas#aspect_ratio), [p6::Image::aspect_ratio](/reference/Types/image#aspect_ratio)


-------------------------------

Updated on 2023 January 07