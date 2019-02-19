#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

import sys  # sys.argv
import __builtin__
import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str
import math
import re

# print re.findall(r'\bf[a-z]*', 'which foot or hand fell fastest')

# 去重 连续字符串
# print re.sub(r'(\b[a-z]+) \1', r'\1', 'cat in the the hat')

cars = ('subaru', 'bmw', 'audi', 'toyota', 'subaru')
cars.remove('subaru')
print(cars)
