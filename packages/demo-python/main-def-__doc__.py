#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

import sys

import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str

print sys.argv[1]

# fn.__doc__
# 1. 语法限制，它们只能有一个单独的表达式

def fn():
    """Do nothing, but document it.
    
No, really, it doesn't do anything.
    """
    pass

print fn.__doc__
