#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

import sys

import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str

print sys.argv[1]

# enumerate - https://docs.python.org/2.7/library/functions.html#enumerate
seasons = ['Spring', 'Summer', 'Fall', 'Winter']
# print list(enumerate(seasons))
# -> [(0, 'Spring'), (1, 'Summer'), (2, 'Fall'), (3, 'Winter')]
for i, v in enumerate(seasons):
    print i, '=>', v,
    
