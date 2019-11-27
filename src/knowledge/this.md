# JavaScript 中的 this

## 全局

在全局作用域中它的 `this` 执行当前的全局对象（浏览器端是 `Window`，node 中是 `global`）。

## 函数中执行

### 纯粹的函数调用

函数被直接调用的时候，属于全局调用，这时候它的 `this` 指向 全局对象;

### 严格模式: 'use strict';

严格模式的情况下执行纯粹的函数调用，那么这里的的 `this` 并不会指向全局，而是 `undefined`，这样的做法是为了消除 js 中一些不严谨的行为。

## 对象的方法调用

`this` 指向当前的这个对象；

## 构造函数使用

当作构造函数调用时，`this` 指向了这个构造函数调用时候实例化出来的对象。

## 箭头函数

ES6箭头函数中的 this 只和定义它时候的作用域的 this 有关，而与在哪里以及如何调用它无关，同时它的 this 指向是不可改变。

## call, apply, bind

改变函数中的 `this` 指向

### call()

>语法：fun.call(thisArg, arg1, arg2, ...)

>call()调用一个函数，第一个参数为指定的this值，其他参数是分别的提供的参数，用逗号分隔

通俗来讲，call()把父函数在子函数中运行了一遍，但是this是子函数的实例

### apply()

>apply()和call()使用上是一致的，唯一的区别call()方法接受若干个参数的列表，而apply()方法接受的是一个包含多个参数的数组。

请注意，传递给call()和apply()的第一个参数是相同的(即绑定this值的对象)。

### bind()

bind()也是在函数上调用方法，不同于call()和apply()，它回返回一个新的函数，该函数将this设置为我们赋给它的值。

## 参考资料
- [JavaScript 中的 this](https://zhuanlan.zhihu.com/p/24107744)
- [call(), apply(), bind() 应用与区别](https://zhuanlan.zhihu.com/p/62293617)
