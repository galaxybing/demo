#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

# 类名用 驼峰命名，函数和方法名用 小写_和_下划线。总是用 self 作为方法的第一个参数
# 
import sys
import __builtin__
import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str

import fibo

# 搜索模块定义，相当于 console 查看模块的定义方法、属性

print dir(fibo)

print '-' * 40

print dir(sys)

print '-' * 40
# 标准模块 __builtin__ 定义内置模块
print dir(__builtin__)  
