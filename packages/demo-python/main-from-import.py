#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

# 类名用 驼峰命名，函数和方法名用 小写_和_下划线。总是用 self 作为方法的第一个参数
# 
import sys

import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str

from fibo import fib, fib2

print sys.argv[1]

print "-" * 40
    
print fib(500)
