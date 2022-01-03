---
title: p6::Shader

---

# p6::Shader





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Shader](/api/Classes/classp6_1_1_shader#function-shader)**(const std::string & fragment_source_code)<br/>Throws std::runtime_error if there is an error while compiling the shader source code.  |
| void | **[bind](/api/Classes/classp6_1_1_shader#function-bind)**() const |
| void | **[set](/api/Classes/classp6_1_1_shader#function-set)**(const std::string & uniform_name, int v) const |
| void | **[set](/api/Classes/classp6_1_1_shader#function-set)**(const std::string & uniform_name, unsigned int v) const |
| void | **[set](/api/Classes/classp6_1_1_shader#function-set)**(const std::string & uniform_name, bool v) const |
| void | **[set](/api/Classes/classp6_1_1_shader#function-set)**(const std::string & uniform_name, float v) const |
| void | **[set](/api/Classes/classp6_1_1_shader#function-set)**(const std::string & uniform_name, const glm::vec2 & v) const |
| void | **[set](/api/Classes/classp6_1_1_shader#function-set)**(const std::string & uniform_name, const glm::vec3 & v) const |
| void | **[set](/api/Classes/classp6_1_1_shader#function-set)**(const std::string & uniform_name, const glm::vec4 & v) const |
| void | **[set](/api/Classes/classp6_1_1_shader#function-set)**(const std::string & uniform_name, const glm::mat2 & mat) const |
| void | **[set](/api/Classes/classp6_1_1_shader#function-set)**(const std::string & uniform_name, const glm::mat3 & mat) const |
| void | **[set](/api/Classes/classp6_1_1_shader#function-set)**(const std::string & uniform_name, const glm::mat4 & mat) const |

## Public Functions Documentation

### function Shader

```cpp
explicit Shader(
    const std::string & fragment_source_code
)
```

Throws std::runtime_error if there is an error while compiling the shader source code. 

### function bind

```cpp
void bind() const
```


### function set

```cpp
void set(
    const std::string & uniform_name,
    int v
) const
```


### function set

```cpp
void set(
    const std::string & uniform_name,
    unsigned int v
) const
```


### function set

```cpp
void set(
    const std::string & uniform_name,
    bool v
) const
```


### function set

```cpp
void set(
    const std::string & uniform_name,
    float v
) const
```


### function set

```cpp
void set(
    const std::string & uniform_name,
    const glm::vec2 & v
) const
```


### function set

```cpp
void set(
    const std::string & uniform_name,
    const glm::vec3 & v
) const
```


### function set

```cpp
void set(
    const std::string & uniform_name,
    const glm::vec4 & v
) const
```


### function set

```cpp
void set(
    const std::string & uniform_name,
    const glm::mat2 & mat
) const
```


### function set

```cpp
void set(
    const std::string & uniform_name,
    const glm::mat3 & mat
) const
```


### function set

```cpp
void set(
    const std::string & uniform_name,
    const glm::mat4 & mat
) const
```


-------------------------------

Updated on 2022-01-03 at 19:40:53 +0100