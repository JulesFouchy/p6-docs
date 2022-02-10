---
title: p6::Shader

sidebar_position: 1
---

# p6::Shader







## Summary

|                | Name           |
| -------------- | -------------- |
| | **[Shader](/reference/Types/shader#shader)**(`const std::string &` fragment_source_code)<br/>Throws std::runtime_error if there is an error while compiling the shader source code.  |
| void | **[bind](/reference/Types/shader#bind)**() const |
| void | **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `int` v) const |
| void | **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `unsigned int` v) const |
| void | **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `bool` v) const |
| void | **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `float` v) const |
| void | **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `const glm::vec2 &` v) const |
| void | **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `const glm::vec3 &` v) const |
| void | **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `const glm::vec4 &` v) const |
| void | **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `const glm::mat2 &` mat) const |
| void | **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `const glm::mat3 &` mat) const |
| void | **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `const glm::mat4 &` mat) const |
## Details


### Shader()

> **[Shader](/reference/Types/shader#shader)**(`const std::string &` fragment_source_code);


Throws std::runtime_error if there is an error while compiling the shader source code. 

### bind()

> `void` **[bind](/reference/Types/shader#bind)**() const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `int` v) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `unsigned int` v) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `bool` v) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `float` v) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `const glm::vec2 &` v) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `const glm::vec3 &` v) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `const glm::vec4 &` v) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `const glm::mat2 &` mat) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `const glm::mat3 &` mat) const;



### set()

> `void` **[set](/reference/Types/shader#set)**(`const std::string &` uniform_name, `const glm::mat4 &` mat) const;



-------------------------------

Updated on 2022 February 10