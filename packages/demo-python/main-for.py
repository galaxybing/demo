#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

import sys
import __builtin__
import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str
import math

# for 语句在容器对象中调用 iter()：
#   1. 该函数返回一个定义了 next() 方法的迭代器对象，它在容器中逐一访问元素。
#   2. 没有后续的元素时，next() 抛出一个 StopIteration 异常通知 for 语句循环结束

data = {'one':1, 'two':2}
for key in data:
    print key, data[key]
