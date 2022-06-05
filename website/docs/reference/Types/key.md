---
title: p6::Key

sidebar_position: 1
---

# p6::Key







## Summary

|                | Name           |
| -------------- | -------------- |
| std::string | **[logical](/reference/Types/key#logical)** <br/>The character that was pressed.  |
| int | **[physical](/reference/Types/key#physical)** <br/>The key at a given position on the keyboard. It is independent of the keyboard layout (e.g. GLFW_KEY_Q will correspond to the first key on the first row of your keyboard, no matter if you are using azerty instead of qwerty)  |

## Details


### logical

```cpp
std::string logical;
```

The character that was pressed. 

This depends on the keyboard layout (qwerty vs azerty). If the key pressed was not a character (for example ENTER, SHIFT etc.) then this is an empty string. 


### physical

```cpp
int physical;
```

The key at a given position on the keyboard. It is independent of the keyboard layout (e.g. GLFW_KEY_Q will correspond to the first key on the first row of your keyboard, no matter if you are using azerty instead of qwerty) 

-------------------------------

Updated on 2022 June 06