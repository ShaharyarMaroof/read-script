#!/bin/bash

# Check if a file path is provided as a parameter
if [ $# -eq 0 ]; then
  echo "file path is required to execute the script"
  exit 1
fi

# Store the first parameter (file path) in a variable
file_path="$1"

# Check if the file exists
if [ -e "$file_path" ]; then
  # Read and display the content of the file
  cat "$file_path"
else
  echo "File does not exist: $file_path"
fi
