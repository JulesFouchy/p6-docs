cmake_minimum_required(VERSION 3.16)
project(p6-hello-world)

add_executable(${PROJECT_NAME} main.cpp)

# ---Add p6---
add_subdirectory(p6)
target_link_libraries(${PROJECT_NAME} p6)
# ------