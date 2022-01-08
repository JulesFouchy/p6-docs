---
title: p6::Shader

---

# p6::Shader





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[Shader](/reference/Classes/classp6_1_1_shader#shader)**(const std::string & fragment_source_code)<br/>Throws std::runtime_error if there is an error while compiling the shader source code.  |
| void | **[bind](/reference/Classes/classp6_1_1_shader#bind)**() const |
| void | **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, int v) const |
| void | **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, unsigned int v) const |
| void | **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, bool v) const |
| void | **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, float v) const |
| void | **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, const glm::vec2 & v) const |
| void | **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, const glm::vec3 & v) const |
| void | **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, const glm::vec4 & v) const |
| void | **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, const glm::mat2 & mat) const |
| void | **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, const glm::mat3 & mat) const |
| void | **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, const glm::mat4 & mat) const |

## Public Functions Documentation

### Shader()

```cpp
explicit Shader(
    const std::string & fragment_source_code
)
```

Throws std::runtime_error if there is an error while compiling the shader source code. 

### bind()

```cpp
void bind() const
```


### set()

```cpp
void set(
    const std::string & uniform_name,
    int v
) const
```


### set()

```cpp
void set(
    const std::string & uniform_name,
    unsigned int v
) const
```


### set()

```cpp
void set(
    const std::string & uniform_name,
    bool v
) const
```


### set()

```cpp
void set(
    const std::string & uniform_name,
    float v
) const
```


### set()

```cpp
void set(
    const std::string & uniform_name,
    const glm::vec2 & v
) const
```


### set()

```cpp
void set(
    const std::string & uniform_name,
    const glm::vec3 & v
) const
```


### set()

```cpp
void set(
    const std::string & uniform_name,
    const glm::vec4 & v
) const
```


### set()

```cpp
void set(
    const std::string & uniform_name,
    const glm::mat2 & mat
) const
```


### set()

```cpp
void set(
    const std::string & uniform_name,
    const glm::mat3 & mat
) const
```


### set()

```cpp
void set(
    const std::string & uniform_name,
    const glm::mat4 & mat
) const
```


-------------------------------

Updated on 2022-01-08 at 01:03:11 +0100