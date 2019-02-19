#!/bin/bash
# build.sh
#
# chmod +x  build/*.sh

python main.py

# -c 选项 只是声明python来执行命令
# RESULT=$(python -c 'import main; print main.get_db(), main.get_ssh()')
# echo $RESULT                 # 返回值：3306 galaxyw
# echo $RESULT | cut -d' ' -f2 # 取第2个函数执行的结果值
# 
# origin=$(git remote -v | grep origin | head -1 | awk '{print $2}')
# echo $origin