#!/bin/bash

cd "$(dirname "$0")/img"

count=1

for f in *.jpg *.png; do
    if [ $count -le 16 ]; then
        if [ $count -lt 10 ]; then
            name="img0$count"
        else
            name="img$count"
        fi

        mv "$f" "$name.jpg"

        count=$((count + 1))
    else
        break
    fi
done
