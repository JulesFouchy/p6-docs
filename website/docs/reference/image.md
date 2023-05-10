---
title: Image
summary: Load and query information about images. 

sidebar_position: 1
---

# Image

Load and query information about images. 

## Summary

### Classes

|                | Name           |
| -------------- | -------------- |
| class | **[p6::Image](/reference/Types/image)**  |

### Functions

|                | Name           |
| -------------- | -------------- |
| Image | **[load_image](/reference/image#load_image)**(`std::filesystem::path` file_path, `bool` flip_vertically = true)<br/>Loads an image from a file.  |
| img::Image | **[load_image_buffer](/reference/image#load_image_buffer)**(`std::filesystem::path` file_path, `bool` flip_vertically = true)<br/>For advanced uses only.  |


## Functions

### load_image()

> `Image` **[load_image](/reference/image#load_image)**(`std::filesystem::path` file_path, `bool` flip_vertically =true);


Loads an image from a file. 

If the path is relative, it will be relative to the directory containing your executable. Throws a `std::runtime_error` if the file doesn't exist or isn't a valid image file. Set `flip_vertically` to false if your image appears upside-down. 


### load_image_buffer()

> `img::Image` **[load_image_buffer](/reference/image#load_image_buffer)**(`std::filesystem::path` file_path, `bool` flip_vertically =true);


For advanced uses only. 

Loads an image from a file and returns the buffer of pixels and the size. If the path is relative, it will be relative to the directory containing your executable. Throws a `std::runtime_error` if the file doesn't exist or isn't a valid image file. Set `flip_vertically` to false if your image appears upside-down. 






-------------------------------

Updated on 2023 May 10