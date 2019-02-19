#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

import sys

import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str

print sys.argv[1]

# 匿名小函数
# 1. 语法限制，它们只能有一个单独的表达式

def make_incrementor(n):
    return lambda x: x + n

f = make_incrementor(42)
print f(0)
print f(1)
