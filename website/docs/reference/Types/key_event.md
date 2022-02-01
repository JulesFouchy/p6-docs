---
title: p6::KeyEvent

sidebar_position: 1
---

# p6::KeyEvent







## Summary

|                | Name           |
| -------------- | -------------- |
| std::string | **[logical_key](/reference/Types/key_event#logical_key)** <br/>The character that was pressed.  |
| int | **[physical_key](/reference/Types/key_event#physical_key)** <br/>The key at a given position on the keyboard. It is independent of the keyboard layout (e.g. GLFW_KEY_Q will correspond to the first key on the first row of your keyboard, no matter if you are using azerty instead of qwerty)  |

## Details


### logical_key

```cpp
std::string logical_key;
```

The character that was pressed. 

This depends on the keyboard layout (qwerty vs azerty). If the key pressed was not a character (for example ENTER, SHIFT etc.) then this is an empty string. 


### physical_key

```cpp
int physical_key;
```

The key at a given position on the keyboard. It is independent of the keyboard layout (e.g. GLFW_KEY_Q will correspond to the first key on the first row of your keyboard, no matter if you are using azerty instead of qwerty) 

-------------------------------

Updated on 2022 February 01