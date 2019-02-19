#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

import sys

import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str

print sys.argv[1]

# 关键字参数
# 1. 关键字参数(keyword)必须跟随在位置参数(positional argument)的后面
# 2. 关键字参数必须与函数接受的某个参数相匹配（例如 actor 不是 parrot 函数的有效参数）
# 3. 参数的顺序并不重要
def parrot(voltage, state='a stiff', action='voom', type='Norwegian Blue'):
    print "-- This parrot wouldn't", action,
    print "if you put", voltage, "volts through it."
    print "-- Lovely plumage, the", type
    print "-- It's", state, "!"

parrot('a thousand', state='pushing up the daisies')
