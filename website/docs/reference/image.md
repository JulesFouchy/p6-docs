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
| Image | **[load_image](/reference/image#load_image)**(`std::filesystem::path` file_path)<br/>Loads an image from a file.  |


## Functions

### load_image()

> `Image` **[load_image](/reference/image#load_image)**(`std::filesystem::path` file_path);


Loads an image from a file. 

If the path is relative, it will be relative to the directory containing your executable. Throws a `std::runtime_error` if the file doesn't exist or isn't a valid image file. 






-------------------------------

Updated on 2022 May 18