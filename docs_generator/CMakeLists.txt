cmake_minimum_required(VERSION 3.8)
project(p6-docs LANGUAGES NONE)

find_package(Doxygen REQUIRED)

set(DOXYGEN_INPUT_DIR ../tests/p6/src)
set(DOXYGEN_OUTPUT_DIR ${CMAKE_CURRENT_SOURCE_DIR}/Doxygen)
set(DOXYGEN_INDEX_FILE ${DOXYGEN_OUTPUT_DIR}/xml/index.xml)
set(DOXYFILE_IN ${CMAKE_CURRENT_SOURCE_DIR}/Doxyfile.in)
set(DOXYFILE_OUT ${DOXYGEN_OUTPUT_DIR}/Doxyfile)

# Set the Doxygen input and output directories in the Doxyfile
configure_file(${DOXYFILE_IN} ${DOXYFILE_OUT} @ONLY)

# Doxygen won't create this for us
file(MAKE_DIRECTORY ${DOXYGEN_OUTPUT_DIR}) 

# Run Doxygen
execute_process(COMMAND ${DOXYGEN_EXECUTABLE} ${DOXYFILE_OUT}
        	    COMMENT "Generating docs with Doxygen"
		        VERBATIM)