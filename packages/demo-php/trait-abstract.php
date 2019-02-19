<?php
// 为了对使用的类施加强制要求，trait 支持抽象方法(abstract)的使用
trait Hello {
    public function sayHelloWorld() {
        echo 'Hello '.$this->getWorld();
    }
    abstract public function getWorld();
}

class MyHelloWorld {
    private $world;
    use Hello;
    public function getWorld() {
        return $this->world;
    }
    public function setWorld($val) {
        $this->world = $val;
    }
}

$person = new MyHelloWorld();
$person->setWorld('galaxyw');
$person->sayHelloWorld();
