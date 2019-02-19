#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

import sys

import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str

print sys.argv[1]

# 数值序列 - 链表
num = range(4, 19, 3)   # 链表中不包括范围中的结束值
                        # 当有多个参数时，第1个参数指定，初始数值
                        #               第2个参数为，链表值范围
                        #               第3个参数为，步进大小
print num
