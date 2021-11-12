cmake_minimum_required(VERSION 3.0)
project(p6-hello-world)

add_executable(${PROJECT_NAME} main.cpp)

if(MSVC)
    target_compile_options(${PROJECT_NAME} PRIVATE /WX /W4)
else()
    target_compile_options(${PROJECT_NAME} PRIVATE -Werror -Wall -Wextra -Wpedantic -pedantic-errors -Wconversion -Wsign-conversion)
endif()

# ---Add p6---
add_subdirectory(p6)
target_link_libraries(${PROJECT_NAME} PRIVATE p6)
# ------