# 原型(prototype)和原型链(__proto__)

>道生一，一生二，二生三，三生万物。万物负阴而抱阳，冲气以为和。

>-- 老子 《道德经》

原型是函数对象的属性，不是所有对象的属性，对象经过构造函数new出来，那么这个new出来的对象的构造函数有一个属性叫原型。

## 道：空值

理解Javascript（以下简称“JS”）之道，需要先理解undefined与null的区别。

在JS中，undefined是全局对象的一个属性，它的初始值就是原始数据类型undefined，并且无法被配置，也无法被改变。undefined从字面意思上理解为“未定义”，即表示一个变量没有定义其值。

而null是一个JS字面量，表示空值，即没有对象。与undefined相比，null被认为是“期望一个对象，但是不引用任何对象的值”，而undefined是纯粹的“没有值”。

null是对象原型链的终点，其值既有（是一个对象）又无（不引用任何对象），代表着对象本源的一种混沌、虚无的状态,正与老子《道德经》中的“道”，有着同等的意义。

## 道生一：原型

JS中的所有事物都是对象：字符串、数字、数组、日期，等等。在JS中，对象是拥有属性和方法的数据。

为了描述这些事物，JS便有了“原型（prototype）”的概念。

显式原型（explicit prototype property） 每一个函数在创建之后都会拥有一个名为prototype的属性，这个属性指向函数的原型对象。用来实现基于原型的继承与属性的共享。

隐式原型 （implicit prototype link） JS中任意对象都有一个内置属性__proto__（部分浏览器为[[prototype]]），指向创建这个对象的函数（即构造函数）constructor的prototype。用来构成原型链，同样用于实现基于原型的继承。

对象的原型Object.prototype用来描述最基本的对象。万物皆对象，所有的对象均具有隐式原型__proto__，对象的原型也不例外。因为它生于虚无，所以它的__proto__属性指向null，即原型链的最顶端。而该原型，就是JS中万物之始。

## 一生二：对象与函数

拥有了描述事物的能力，却没有创造事物的能力，显然是不完整的，因此需要一个Object的生成器来进行对象的生成。

JS将生成器以构造函数constructor来表示，构造函数是一个指针，指向了一个函数。

函数（function） 函数是指一段在一起的、可以做某一件事的程序。构造函数是一种创建对象时使用的特殊函数。

对象的构造函数function Object同时也是一个对象，因此需要一个能够描述该对象的原型，该原型便是Function.prototype，函数的原型用来描述所有的函数。对象的构造函数的__proto__指向该原型。

函数的原型本身也是对象，因此其__proto__指向了对象的原型。同样，该对象也需要一个对应的生成器，即其构造函数function Function。

函数与对象相互依存，分别定义了事物的描述方法和事物的生成方法，在生成JS万物的过程中缺一不可。

### 二生三：类

类（Class）是面向对象程序设计（OOP，Object-Oriented Programming）实现信息封装的基础。类是一种用户定义类型，也称类类型。每个类包含数据说明和一组操作数据或传递消息的函数。类的实例称为对象。

在ECMAScript 2015 中引入的JS类（classes）之前，要在JS中实现类便是采用原型继承的方式。

当把一个函数作为构造函数，使用new关键字来创建对象时，便可以把该函数看作是一个类，创建出来的对象则是该类的实例，其隐式原型__proto__指向的是该构造函数的原型。

在访问该对象的属性或方法时，JS会先搜索该对象中是否定义了该属性或方法，若没有定义，则会回溯到其__proto__指向的原型对象去搜索，若仍然未搜索到，则会继续回溯该原型的原型，直到搜索到原型链的终点null;

这种特性可以理解为：构造函数生成的实例，继承于该构造函数的原型。

得益于这种特性，我们可以使用定义构造函数的方式来定义类。

以上定义了Person类，该构造函数是由Function构造而来，所以其隐式原型指向函数的原型，而为了描述该事物，同时生成了该类的原型Person.prototype，该原型又是由Object构造而来，所以其隐式原型指向了对象的原型。

### 三生万物：实例

通过定义不同的类，可以对万物进行描述。而每个类对应的构造函数，即为万物的生成器。通过new构造函数，可以得到类对应的实例，该实例可以理解为实实在在的事物，而不同于前述函数和对象这种抽象的定义了。

#### 定义属性

通过属性，我们更加详细地去描述它。this是JS中的一个关键字，代表了函数运行时生成的一个内部对象，该对象通常指的是调用该函数的那个对象。该对象只能在函数中使用。如果该函数是以构造函数的方式被调用，则this指的是通过该构造函数实例化的实例对象。

#### 定义方法

在属性定义后，还应该拥有行为。行为可以被抽象成函数，我们称之为“方法”。

我们通过将函数作为构造函数参数的传递进去的方式，给实例添加方法，在调用这些方法时，这些方法内部的this指向的是调用其的对象。

### 公共属性&方法

通过上述方式定义方法，必须在实例化一个对象的时候来定义方法的实现，这样显然不是很可取。大多数情况下，我们需要定义的方法应该是该类的所有实例都共用的方法。

通过给该构造函数的原型添加方法，这些方法定义在原型中，所有实例对象都是原型的继承，同样会将原型的属性和方法继承下来。

## 总结

万物皆实例，实例又都是由类来进行描述，而实例的属性即为对象，实例的方法即为函数，由此可见，万物都是由对象和函数相依相生来进行定义的。而对象又定义了函数，函数又构造了对象，这种关系又由“原型”的方式进行链接，组成了JS的多态世界。

JS之道，万物自成一体，理解了这个道理，掌握JS的原型便不成问题。

个人理解：你一直在用，只是你不知道。本质上是为了实现OOP。

### 是什么

- 显式原型
 - 函数在创建之后都会拥有一个名为prototype的属性，这个属性指向函数的原型对象。
- 隐式原型
 - JavaScript中任意对象都有一个内置属性[[prototype]]，在ES5之前没有标准的方法访问这个内置属性，但是大多数浏览器都支持通过__proto__来访问。ES5中有了对于这个内置属性标准的Get方法Object.getPrototypeOf()。 Object.prototype 这个对象是个例外，它的__proto__值为null。
 
 隐式原型指向创建这个对象的函数(constructor)的prototype
 
 ### 作用是什么
 
- 显式原型的作用：用来实现基于原型的继承与属性的共享。
- 隐式原型的作用：构成原型链，同样用于实现基于原型的继承。举个例子，当我们访问obj这个对象中的x属性时，如果在obj中找不到，那么就会沿着__proto__依次查找。 

## 参考资料
- [道生万物,理解Javascript原型链](https://zhuanlan.zhihu.com/p/31822475)
- [进阶必读：深入理解 JavaScript 原型](https://zhuanlan.zhihu.com/p/87667349)
- [说说原型（prototype）、原型链和原型继承](https://zhuanlan.zhihu.com/p/35790971)
- [深入理解javascript中的原型](https://liuchi.coding.me/2017/01/25/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3javascript%E4%B8%AD%E7%9A%84%E5%8E%9F%E5%9E%8B/)
