---
title: math.h

---

# math.h



## Namespaces

| Name           |
| -------------- |
| **[p6](/reference/Namespaces/namespacep6)**  |




## Source code

```cpp
#pragma once

namespace p6 {
/* ------------------------------- */
/* ------------------------------- */

template<typename T>
T map(T x, T from_min, T from_max, T to_min, T to_max)
{
    return (x - from_min) * (to_max - to_min) / (from_max - from_min) + to_min;
}
} // namespace p6
```


-------------------------------

Updated on 2022 January 08
