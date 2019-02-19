#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 

# 1. 类名用 驼峰命名，函数和方法名用 小写_和_下划线。总是用 self 作为方法的第一个参数
# 2. 包含 __init__.py 文件，让 Python 将目录当做内容包；里面也可以执行包的初始化代码，或者定义稍后介绍的 __all__ 变量
#   __all__ = ["echo", "surround", "reverse"]
#   
# 3. import item.subitem.subsubitem 这样的语法时，这些子项必须是包
# 4. from package import item 方式导入包时，这个子项(item)既可以是包中的一个子模块(或一个子包)，也可以是包中定义的其它命名，像函数、类或变量
# 
import sys
import __builtin__
import json # import the module of json，
            # json.loads(params) # str to obj
            # json.dumps(jsonobj, sort_keys=True) # obj to str
import math

x = 10 * 3.25
y = 200 * 200
print repr((x, y, ('spam', 'eggs')))

# '!s' (应用 str() )和 '!r' (应用 repr())可以在格式化之前转换值:
print 'The value of PI is approximately {!r}.'.format(math.pi)
print('The value of PI is approximately {0:.3f}.'.format(math.pi))