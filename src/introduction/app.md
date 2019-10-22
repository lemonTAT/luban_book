# 应用的构成

> 从本质上讲，所有Web应用都是一种运行在网页浏览器中的软件，这些软件的图形用户界面（Graphical User Interface，简称GUI）即为前端。

![GUI](https://raw.githubusercontent.com/fouber/blog/master/201508/assets/web_gui.png)

## Web应用是一种GUI软件

### 1、应用由页面构成

整个Web应用由页面组成

![Web 应用](https://github.com/fouber/blog/raw/master/201508/assets/constructor.png)

### 2、页面由组件组成

![页面由组件组成](https://github.com/fouber/blog/raw/master/201508/assets/modular_2.png)

### 3、一个组件一个目录，资源就近维护

![组件组成](https://github.com/fouber/blog/raw/master/201508/assets/modular-component.png)

### 4、组件可组合，组件的JS可依赖其他JS模块，CSS可依赖其他CSS单元

![组件可组合](https://github.com/fouber/blog/raw/master/201508/assets/modular_4.png)

> 3大框架定义了组件的开发和管理规范，应用往往由多功能、多页面、多状态、多系统构成。逻辑编排，数据拆包解包，最终通过JS(胶水)将这些逻辑，组件粘合在一起形成我们的页面。这带来了一下一些问题：

1、页面的组件无法做到可插拔，只能通过代码修改实现

2、逻辑编排、UI、数据拆解包通过JS粘合在一起，业务的变更和改动必须通过代码修改实现

3、当业务发生变更，我们往往又需要设计代码修改和发布

## 参考资料
- [前端工程——基础篇](https://github.com/fouber/blog/issues/10)

- [致我们终将组件化的 Web](http://www.alloyteam.com/2015/11/we-will-be-componentized-web-long-text/)
