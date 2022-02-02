cmake_minimum_required(VERSION 3.8)
project(p6-example-complete)

add_executable(${PROJECT_NAME} main.cpp)
target_compile_features(${PROJECT_NAME} PRIVATE cxx_std_17)

if (MSVC)
    target_compile_options(${PROJECT_NAME} PRIVATE /WX /W4)
else()
    target_compile_options(${PROJECT_NAME} PRIVATE -Werror -Wall -Wextra -Wpedantic -pedantic-errors -Wconversion -Wsign-conversion)
endif()

# ---Add p6---
add_subdirectory(p6)
target_link_libraries(${PROJECT_NAME} p6::p6)
p6_copy_folder(img) # CMake utility provided by p6 to make sure our resources are always available alongside our executable
                    # This means that you can use paths as if they were relative to this root directory
                    # For example "img/1.png" will be a valid file path