# 本项目示例:

- 可以 nodejs 为执行环境，npm run start
- 也可处理 nodejs 调用 shell ，再执行 python 代码，请执行： npm run start:sh


1. 类名用 驼峰命名，函数和方法名用 小写_和_下划线。总是用 self 作为方法的第一个参数
2. 包含 __init__.py 文件，让 Python 将目录当做内容包；里面也可以执行包的初始化代码，或者定义稍后介绍的 __all__ 变量
  - __all__ = ["echo", "surround", "reverse"]   
3. import item.subitem.subsubitem 这样的语法时，这些子项必须是包
4. from package import item 方式导入包时，这个子项(item)既可以是包中的一个子模块(或一个子包)，也可以是包中定义的其它命名，像函数、类或变量


# 标准模块列表：

* import shutil
  - 文件和目录管理任务
* import glob
  - 提供了一个函数用于从目录通配符搜索中生成文件列表
* import re
  - 为高级字符串处理提供了正则表达式工具
  - 当只需简单的操作时，字符串方法最好用，因为它们易读，又容易调试
    - 'tea for too'.replace('too', 'two')
* import math
* import random
* import urllib2
* from datetime import date
* import zlib
* from timeit import Timer
* import doctest
* import unittest
* import repr
* import pprint
* import textwrap
* from string import Template
* import struct
* import threading, zipfile
* import logging
  - logging.debug('Debugging information')
  - logging.info('Informational message')
  - logging.warning('Warning:config file %s not found', 'server.conf')
  - logging.error('Error occurred')
  - logging.critical('Critical error -- shutting down')
* from array import array
* from collections import deque
* import bisect
* from decimal import *
  - round(Decimal('0.70') * Decimal('1.05'), 2)
  
  
***

# list
lists.append() # 添加列表元素
len(lists) # 计算列表长度
del lists[2]
lists.pop(2)
lists.remove('删除指定值的列表元素') # 如果有相同元素，则仅删除的是第一位的
lists[起始索引:终止前一个索引]
lists[:]  # 复制列表

# tuple 不可变的列表被称为元组

# and or in

# if age >= 18:
# elif age < 10:
# else:

# {} 字典，即对象

# 执行 linux shell 命令
- os模块
  * os.system()和os.popen()
- python自带的commands模块
- python的进程管理模块subprocess
  * commands模块在python3.x被subprocess取代 subprocess可以执行shell命令
