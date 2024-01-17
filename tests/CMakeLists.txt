cmake_minimum_required(VERSION 3.20)
project(p6-tests)

set(P6_RAW_OPENGL_MODE OFF CACHE BOOL "") # You need to "CMake: Delete Cache and Reconfigure" when changing this option.
set(p6_ENABLE_WARNINGS_AS_ERRORS ON)
add_subdirectory(p6)

function(register_test filename)
    set(TARGET "${filename}")
    add_executable(${TARGET} ${filename})
    target_link_libraries(${TARGET} p6::p6)

    target_compile_features(${TARGET} PRIVATE cxx_std_20)

    if(MSVC)
        target_compile_options(${TARGET} PRIVATE /WX /W4)
    else()
        target_compile_options(${TARGET} PRIVATE -Werror -Wall -Wextra -Wpedantic -pedantic-errors -Wconversion -Wsign-conversion)
    endif()

    p6_copy_folder(${TARGET} res)
endfunction()

file(GLOB TESTS CONFIGURE_DEPENDS ./*.cpp)

foreach(TEST ${TESTS})
    get_filename_component(FILENAME ${TEST} NAME)
    register_test(${FILENAME})
endforeach()