---
title: Text
summary: Write text to the screen. 

sidebar_position: 1
---

# Text

Write text to the screen. 

## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| void | **[text](/reference/text#text)**(`const std::u16string &` str, `Center` center, `Rotation` rotation = {}) |
| void | **[text](/reference/text#text)**(`const std::u16string &` str, `TopLeftCorner` corner, `Rotation` rotation = {}) |
| void | **[text](/reference/text#text)**(`const std::u16string &` str, `TopRightCorner` corner, `Rotation` rotation = {}) |
| void | **[text](/reference/text#text)**(`const std::u16string &` str, `BottomLeftCorner` corner, `Rotation` rotation = {}) |
| void | **[text](/reference/text#text)**(`const std::u16string &` str, `BottomRightCorner` corner, `Rotation` rotation = {}) |

### Attributes

|                | Name           |
| -------------- | -------------- |
| float | **[text_size](/reference/text#text_size)** <br/>Height of the text.  |
| float | **[text_inflating](/reference/text#text_inflating)** <br/>Gives some "boldness" to the text.  |


## Functions

### text()

> `void` **[text](/reference/text#text)**(`const std::u16string &` str, `Center` center, `Rotation` rotation ={});



### text()

> `void` **[text](/reference/text#text)**(`const std::u16string &` str, `TopLeftCorner` corner, `Rotation` rotation ={});



### text()

> `void` **[text](/reference/text#text)**(`const std::u16string &` str, `TopRightCorner` corner, `Rotation` rotation ={});



### text()

> `void` **[text](/reference/text#text)**(`const std::u16string &` str, `BottomLeftCorner` corner, `Rotation` rotation ={});



### text()

> `void` **[text](/reference/text#text)**(`const std::u16string &` str, `BottomRightCorner` corner, `Rotation` rotation ={});




## Attributes

### text_size

```
float text_size = 0.03f;
```

Height of the text. 

### text_inflating

```
float text_inflating = 0.01f;
```

Gives some "boldness" to the text. 




-------------------------------

Updated on 2022 May 18