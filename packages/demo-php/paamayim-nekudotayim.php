<?php
/*
 * 范围解析操作符 （::）
 * 把 Paamayim Nekudotayim 选作双冒号操作符的名字似乎有些奇怪。
 * 然而，这是 Zend 开发小组在写 Zend Engine 0.5（被用于 PHP 3 中）时所作出的决定。事实上这个词在希伯莱文就是双冒号的意思。
 * 
 * [PHP双冒号::的用法](http://php.net/manual/zh/language.oop5.paamayim-nekudotayim.php)
 * 可以用于访问静态成员，类常量，还可以用于覆盖类中的属性和方法。
 * 
 */
class Fruit{
    static function color(){
        return "fruit color ...";
    }

    static function showColor(){
        echo "show " . self::color();
    }
}

class Apple extends Fruit{
    static function color(){
        return "red";
    }
}

Apple::showColor();
// output is "show color"!