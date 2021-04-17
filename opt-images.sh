#!/bin/bash
for filename in content/media/*.jpg; do
    convert "$filename" -resize 1920x -quality 70 "$filename"
done