import os, glob, shutil

def modify_file_content(filename, functor):
    with open(filename, 'r+') as f:
        text = f.read()
        f.seek(0)
        f.write(functor(text))
        f.truncate()

def remove_extra_text_in_filepaths(output_folder, extra_text):
    for filename in glob.glob(f"{output_folder}/**", recursive=True):
        if os.path.isfile(filename):
            modify_file_content(filename, lambda text : text.replace(extra_text, ""))
            os.rename(filename, filename.replace(extra_text, ""))

def generate_documentation(output_folder):
    # Clean the output folder
    for filename in glob.glob(f"{output_folder}/*"):
        if os.path.isdir(filename):
            shutil.rmtree(filename)
        else:
            os.remove(filename)

    # Run Doxygen
    os.system(f"cmake . -B/dummy") # -B/xxx prevents CMake from generating all the build files

    # Run doxybook2
    os.system(f"doxybook2.exe --input Doxygen/xml --output {output_folder} --config doxybook_config.json --templates doxybook_templates")

    # Remove unwanted folders
    for filename in glob.glob(f"{output_folder}/*"):
        if os.path.isdir(filename) and os.path.basename(os.path.normpath(filename)) in ["Pages", "Examples", "Files", "Namespaces"]:
            shutil.rmtree(filename)

    # Create the summary file
    summary_content = """---
title: Summary 
slug: /reference 
---

Welcome to the reference! In here you can find all the details about everything that is available in *p6*.
"""
    with open(f"{output_folder}/Modules/index_groups.md", 'r') as f:
        summary_content += f.read()
    with open(f"{output_folder}/Types/index_classes.md", 'r') as f:
        summary_content += f.read()
    with open(f"{output_folder}/00-summary.md", 'a') as f:
        f.write(summary_content)

    # Remove index files
    for filename in glob.glob(f"{output_folder}/**", recursive=True):
        if "index_" in filename:
            os.remove(filename)

    # Remove ugly extra text in filepaths
    remove_extra_text_in_filepaths(output_folder, "group__")
    remove_extra_text_in_filepaths(output_folder, "classp6_1_1_")
    remove_extra_text_in_filepaths(output_folder, "structp6_1_1_")

    # Move the files of Modules at the root
    for filename in glob.glob(f"{output_folder}/Modules/**", recursive=True):
        if os.path.isfile(filename):
            os.rename(filename, filename.replace("Modules", ""))
    os.rmdir(f"{output_folder}/Modules")
    # Fix links by removing /Modules
    for filename in glob.glob(f"{output_folder}/**", recursive=True):
        if os.path.isfile(filename):
            modify_file_content(filename, lambda text : text.replace("/Modules", ""))

generate_documentation(output_folder = "../website/docs/reference")