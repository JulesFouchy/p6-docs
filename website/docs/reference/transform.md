---
title: Transform
summary: Allows you to translate / rotate / scale all your drawings at once. 

sidebar_position: 1
---

# Transform

Allows you to translate / rotate / scale all your drawings at once. 

## Summary

### Functions

|                | Name           |
| -------------- | -------------- |
| void | **[translate](/reference/transform#translate)**(`glm::vec2` translation)<br/>Applies a translation to all the future drawings. To undo this, see `[push_transform()](/reference/transform#push_transform)` and `[pop_transform()](/reference/transform#pop_transform)`.  |
| void | **[rotate](/reference/transform#rotate)**(`[p6::Angle](/reference/Types/angle)` angle)<br/>Applies a rotation to all the future drawings. To undo this, see `[push_transform()](/reference/transform#push_transform)` and `[pop_transform()](/reference/transform#pop_transform)`.  |
| void | **[scale](/reference/transform#scale)**(`glm::vec2` scale_factor)<br/>Applies a scale to all the future drawings. To undo this, see `[push_transform()](/reference/transform#push_transform)` and `[pop_transform()](/reference/transform#pop_transform)`.  |
| void | **[reset_transform](/reference/transform#reset_transform)**()<br/>Undoes all the translate / rotate / scale / apply_transform / set_transform.  |
| void | **[apply_transform](/reference/transform#apply_transform)**(`glm::mat3` additional_transform)<br/>Applies a custom transform matrix to all the future drawings. To undo this, see `[push_transform()](/reference/transform#push_transform)` and `[pop_transform()](/reference/transform#pop_transform)`.  |
| void | **[set_transform](/reference/transform#set_transform)**(`glm::mat3` transform)<br/>Sets the current transform matrix. This will override all the previous translate / rotate / scale / apply_transform. To undo this, see `[push_transform()](/reference/transform#push_transform)` and `[pop_transform()](/reference/transform#pop_transform)`.  |
| void | **[push_transform](/reference/transform#push_transform)**()<br/>Saves the current transform state.  |
| void | **[pop_transform](/reference/transform#pop_transform)**()<br/>Restores the transform to the state it had during the last `[push_transform()](/reference/transform#push_transform)` that has not been popped yet.  |
| TransformScopeGuard | **[transform_scope_guard](/reference/transform#transform_scope_guard)**()<br/>Will call [push_transform()](/reference/transform#push_transform) and [pop_transform()](/reference/transform#pop_transform) automatically.  |
| glm::mat3 | **[current_transform](/reference/transform#current_transform)**() const<br/>Returns the current transform matrix that is the combination of all the translate / rotate / scale / apply_transform / set_transform that have been applied.  |


## Functions

### translate()

> `void` **[translate](/reference/transform#translate)**(`glm::vec2` translation);


Applies a translation to all the future drawings. To undo this, see `[push_transform()](/reference/transform#push_transform)` and `[pop_transform()](/reference/transform#pop_transform)`. 

### rotate()

> `void` **[rotate](/reference/transform#rotate)**(`[p6::Angle](/reference/Types/angle)` angle);


Applies a rotation to all the future drawings. To undo this, see `[push_transform()](/reference/transform#push_transform)` and `[pop_transform()](/reference/transform#pop_transform)`. 

### scale()

> `void` **[scale](/reference/transform#scale)**(`glm::vec2` scale_factor);


Applies a scale to all the future drawings. To undo this, see `[push_transform()](/reference/transform#push_transform)` and `[pop_transform()](/reference/transform#pop_transform)`. 

### reset_transform()

> `void` **[reset_transform](/reference/transform#reset_transform)**();


Undoes all the translate / rotate / scale / apply_transform / set_transform. 

### apply_transform()

> `void` **[apply_transform](/reference/transform#apply_transform)**(`glm::mat3` additional_transform);


Applies a custom transform matrix to all the future drawings. To undo this, see `[push_transform()](/reference/transform#push_transform)` and `[pop_transform()](/reference/transform#pop_transform)`. 

### set_transform()

> `void` **[set_transform](/reference/transform#set_transform)**(`glm::mat3` transform);


Sets the current transform matrix. This will override all the previous translate / rotate / scale / apply_transform. To undo this, see `[push_transform()](/reference/transform#push_transform)` and `[pop_transform()](/reference/transform#pop_transform)`. 

### push_transform()

> `void` **[push_transform](/reference/transform#push_transform)**();


Saves the current transform state. 

### pop_transform()

> `void` **[pop_transform](/reference/transform#pop_transform)**();


Restores the transform to the state it had during the last `[push_transform()](/reference/transform#push_transform)` that has not been popped yet. 

### transform_scope_guard()

> `TransformScopeGuard` **[transform_scope_guard](/reference/transform#transform_scope_guard)**();


Will call [push_transform()](/reference/transform#push_transform) and [pop_transform()](/reference/transform#pop_transform) automatically. 

Assign the result of this function to a variable and [pop_transform()](/reference/transform#pop_transform) will be called when the variable goes out of scope. [push_transform()](/reference/transform#push_transform) is called when [transform_scope_guard()](/reference/transform#transform_scope_guard) is called. 


### current_transform()

> `glm::mat3` **[current_transform](/reference/transform#current_transform)**() const;


Returns the current transform matrix that is the combination of all the translate / rotate / scale / apply_transform / set_transform that have been applied. 





-------------------------------

Updated on 2024 January 17