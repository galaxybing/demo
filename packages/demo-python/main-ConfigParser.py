#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

import sys  # sys.argv
import __builtin__
import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str
import math

import ConfigParser  # 标准库 ConfigParser 模块提供一套 API 来读取和操作配置文件
  
config = ConfigParser.ConfigParser()  
config.read("./assets/demo.conf")  
  
def get_db():  
    return config.get("db", "port")  
  
def get_ssh():  
    return config.get("ssh", "user")  

