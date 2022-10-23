---
title: p6::Shader

sidebar_position: 1
---

# p6::Shader







## Summary

|                | Name           |
| -------------- | -------------- |
| | **[Shader](/reference/Types/shader#shader)**(`std::string_view` fragment_source_code)<br/>Throws std::runtime_error if there is an error while compiling the shader source code.  |
| void | **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `int` value) const |
| void | **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `unsigned int` value) const |
| void | **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `bool` value) const |
| void | **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `float` value) const |
| void | **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const glm::vec2 &` value) const |
| void | **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const glm::vec3 &` value) const |
| void | **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const glm::vec4 &` value) const |
| void | **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const glm::mat2 &` value) const |
| void | **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const glm::mat3 &` value) const |
| void | **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const glm::mat4 &` value) const |
| void | **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const [ImageOrCanvas](/reference/Types/image_or_canvas) &` image) const<br/>:warning: You can have at most 8 images set at once. This is a limitation of the GPUs.  |
## Details


### Shader()

> **[Shader](/reference/Types/shader#shader)**(`std::string_view` fragment_source_code);


Throws std::runtime_error if there is an error while compiling the shader source code. 

### set()

> `void` **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `int` value) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `unsigned int` value) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `bool` value) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `float` value) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const glm::vec2 &` value) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const glm::vec3 &` value) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const glm::vec4 &` value) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const glm::mat2 &` value) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const glm::mat3 &` value) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const glm::mat4 &` value) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`std::string_view` uniform_name, `const [ImageOrCanvas](/reference/Types/image_or_canvas) &` image) const;


:warning: You can have at most 8 images set at once. This is a limitation of the GPUs. 

-------------------------------

Updated on 2022 October 23