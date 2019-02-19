#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

import sys

import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str

print sys.argv[1]

# main-keyword-argument-destructor
# 使用 ** 操作符分拆关键字参数为字典

def parrot(voltage, state='a stiff', action='voom'):
    print "-- This parrot wouldn't", action,
    print "if you put", voltage, "volts through it.",
    print "E's", state, "!"
    
d = {"voltage": "four million", "state": "bleedin' demised", "action": "VOOM"}
parrot(**d)
