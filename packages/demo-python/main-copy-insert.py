#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

import sys

import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str

print sys.argv[1]

# a, b = 0, 1
# 
# while b < 12:
#     print b,
#     a, b = b, a + b
# -> 1 1 2 3 5 8

words = ['cat', 'window', 'defenestrate']
for w in words[:]:
    if len(w) >= 6:
        words.insert(0, w)

print words
# print json.dumps(words, sort_keys=True)