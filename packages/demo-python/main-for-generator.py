#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

import sys
import __builtin__
import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str
import math

print list(i*i for i in range(10))
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# reverse 返回迭代器  <generator object reverse at 0x10e9b2960>
# 自动创建了 __iter__() 和 next() 方法
# 
# def reverse(data):
#     for index in range(len(data)-1, -1, -1):
#         # print 这里打印操作会失效
#         yield data[index]
# 
# for char in reverse('galaxyw'):
#     print char

# generator 表达式形式: reverse
data = 'golf'
print(list(data[i] for i in range(len(data)-1, -1, -1)))

