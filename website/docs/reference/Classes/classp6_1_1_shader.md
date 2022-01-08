---
title: p6::Shader

---

# p6::Shader





## Summary


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
## Details


### Shader()

> **[Shader](/reference/Classes/classp6_1_1_shader#shader)**(const std::string & fragment_source_code);


Throws std::runtime_error if there is an error while compiling the shader source code. 

### bind()

> **[bind](/reference/Classes/classp6_1_1_shader#bind)**() const;



### set()

> **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, int v) const;



### set()

> **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, unsigned int v) const;



### set()

> **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, bool v) const;



### set()

> **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, float v) const;



### set()

> **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, const glm::vec2 & v) const;



### set()

> **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, const glm::vec3 & v) const;



### set()

> **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, const glm::vec4 & v) const;



### set()

> **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, const glm::mat2 & mat) const;



### set()

> **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, const glm::mat3 & mat) const;



### set()

> **[set](/reference/Classes/classp6_1_1_shader#set)**(const std::string & uniform_name, const glm::mat4 & mat) const;



-------------------------------

Updated on 2022 January 08