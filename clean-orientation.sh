#!/bin/bash
for filename in content/media/*.jpg; do
    if (( $(identify -verbose "$filename" | grep -c "Orientation: LeftBottom") )); then
        convert "$filename" -auto-orient "$filename"
    fi
done