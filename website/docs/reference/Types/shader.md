---
title: p6::Shader

sidebar_position: 1
---

# p6::Shader







## Summary

|                | Name           |
| -------------- | -------------- |
| | **[Shader](/reference/Types/shader#shader)**(`std::string_view` fragment_source_code)<br/>Throws std::runtime_error if there is an error while compiling the shader source code.  |
| | **[Shader](/reference/Types/shader#shader)**(`std::string_view` vertex_source_code, `std::string_view` fragment_source_code)<br/>Throws std::runtime_error if there is an error while compiling the shader source code.  |
| | **[Shader](/reference/Types/shader#shader)**(`[ShaderSources](/reference/Types/shader_sources) const &` sources)<br/>Throws std::runtime_error if there is an error while compiling the shader source code.  |
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
| void | **[use](/reference/Types/shader#use)**() const<br/>Sets this as the current shader that will be used for rendering.  |
| GLuint | **[id](/reference/Types/shader#id)**() const<br/>Returns the OpenGL id of the program.  |
| void | **[check_for_errors_before_rendering](/reference/Types/shader#check_for_errors_before_rendering)**() const<br/>You can call this just before a draw call (e.g. `glDrawArrays`) to check if your shader is set up properly (all textures have been set, etc.)  |
## Details


### Shader()

> **[Shader](/reference/Types/shader#shader)**(`std::string_view` fragment_source_code);


Throws std::runtime_error if there is an error while compiling the shader source code. 

### Shader()

> **[Shader](/reference/Types/shader#shader)**(`std::string_view` vertex_source_code, `std::string_view` fragment_source_code);


Throws std::runtime_error if there is an error while compiling the shader source code. 

### Shader()

> **[Shader](/reference/Types/shader#shader)**(`[ShaderSources](/reference/Types/shader_sources) const &` sources);


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

### use()

> `void` **[use](/reference/Types/shader#use)**() const;


Sets this as the current shader that will be used for rendering. 

### id()

> `GLuint` **[id](/reference/Types/shader#id)**() const;


Returns the OpenGL id of the program. 

This is for advanced uses only. 


### check_for_errors_before_rendering()

> `void` **[check_for_errors_before_rendering](/reference/Types/shader#check_for_errors_before_rendering)**() const;


You can call this just before a draw call (e.g. `glDrawArrays`) to check if your shader is set up properly (all textures have been set, etc.) 

-------------------------------

Updated on 2024 January 17