#!/bin/bash
for filename in content/media/*.jpg; do
    convert "$filename" -resize 2440x "$filename"
done