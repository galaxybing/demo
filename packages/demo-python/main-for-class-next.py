#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

import sys
import __builtin__
import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str
import math

class Reverse:
    """Iterator for looping over a sequence backwards."""
    def __init__(self, data):
        self.data = data
        self.index = len(data)
    def __iter__(self):
        return self
    # def __next__(self):  # python3
    def next(self): # python
        if self.index == 0:
            raise StopIteration
        self.index = self.index - 1
        return self.data[self.index]

rev = Reverse('spam')
iter(rev) # <__main__.Reverse instance at 0x10c293908>
          # 后续可调 rev.next()


# for … in… 这个语句其实做了两件事
#   1. 第一件事是获得一个可迭代器，即调用了__iter__()函数。 
#   2. 第二件事是循环的过程，循环调用__next__()函数

try
for char in Reverse('galaxyw'):
    print(char)

# Reference:
# https://blog.csdn.net/liweibin1994/article/details/77374854