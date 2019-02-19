#!/bin/bash
# build.sh
#
# chmod +x  build/*.sh

echo $1 $2

# awk '{print $3;}' assets/a.conf

# origin=$(git remote -v | grep origin | head -1 | awk '{print $2}')
# 
# $ git remote -v
# 
# origin	https://github.com/galaxybing/galaxyw.git (fetch)
# origin	https://github.com/galaxybing/galaxyw.git (push)

str=$(cat assets/a.conf | grep 'database' | head -1 | awk '{print $4}')
echo $str
