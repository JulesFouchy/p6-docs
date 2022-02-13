---
title: Image
summary: Create, modify and query information about images. 

sidebar_position: 1
---

# Image

Create, modify and query information about images. 

## Summary

### Classes

|                | Name           |
| -------------- | -------------- |
| class | **[p6::Image](/reference/Types/image)** <br/>An image can be drawn onto, and can be displayed.  |

### Functions

|                | Name           |
| -------------- | -------------- |
| Image | **[load_image](/reference/image#load_image)**(`const char *` file_path)<br/>Loads an image from a file.  |


## Functions

### load_image()

> `Image` **[load_image](/reference/image#load_image)**(`const char *` file_path);


Loads an image from a file. 

Throws a `std::runtime_error` if the file doesn't exist or isn't a valid image file. 






-------------------------------

Updated on 2022 February 13