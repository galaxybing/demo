#! /usr/local/bin/python
# -*- coding: iso-8859-15 -*-
# 
# 1. 一个 try 语句可能包含多个 except 子句，分别指定处理不同的异常
# 2. 最后一个 except 子句可以省略异常名称，以作为通配符使用
# 3. try ... except 语句可以带有一个 else子句 ，该子句只能出现在所有 except 子句之后。当 try 语句没有抛出异常时，需要执行一些代码，可以使用这个子句
# 4. except 子句可以在括号中列出多个异常的名字时，括号是必需要的；否则 将等同于 except RuntimeError as TypeError:

while True:
    try:
        x = int(raw_input("Please enter a number: "))
        break
    except ValueError:
        print "Oops!  That was no valid number.  Try again..."
