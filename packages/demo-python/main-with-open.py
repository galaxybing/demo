#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

import sys
import __builtin__
import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str
import math

# f = open('README.md', 'r+') # r  w  a r+
# f 
# <open file 'README.md', mode 'r' at 0x106da45d0>

# print f.read()
# 
# 遍历文件对象来读取文件行。这是一种内存高效、快速，并且代码简洁的方式：
# for line in f: 
#     print(line + ''),
    
# f.write(str('\n...bing'))

# 用关键字 with 处理文件对象是个好习惯
with open('README.md', 'r') as f:
    read_data = f.read()

f.closed

print read_data
