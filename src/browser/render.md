# 浏览器内核的理解？

主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。

渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

JS引擎则：解析和执行javascript来实现网页的动态效果。
  
最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。
 

一个页面的呈现，粗略的说会经过以下这些步骤：

- 1、DOM 树的构建（Parse HTML）
- 2、构建 CSSOM 树（Recaculate Style） 
- 3、合并 DOM 树与 CSSOM 树为 Render 树
- 4、布局（Layout）
- 5、绘制（Paint）
- 6、复合图层化（Composite）

其中布局（Layout）环节主要负责各元素尺寸、位置的计算，绘制（Paint）环节则是绘制页面像素信息，合成（Composite）环节是多个复合层的合成，最终合成的页面被用户看到。

当用户在浏览网页时进行交互或通过 js 脚本改变页面结构时，以上的部分操作有可能重复运行，此过程称为 Repaint 或 Reflow。

Repaint(重绘) 

当元素改变的时候，将不会影响元素在页面当中的位置（比如 background-color, border-color, visibility），浏览器仅仅会应用新的样式重绘此元素，此过程称为 Repaint。

Reflow(重排)
当元素改变的时候，将会影响文档内容或结构，或元素位置，此过程称为 Reflow。（ HTML 使用的是 flow based layout ，也就是流式布局，所以，如果某元件的几何尺寸发生了变化，需要重新布局，也就叫 Reflow。）

Reflow 的成本比 Repaint 的成本高得多的多。一个结点的 Reflow 很有可能导致子结点，甚至父点以及同级结点的 Reflow 。在一些高性能的电脑上也许还没什么，但是如果 Reflow 发生在手机上，那么这个过程是延慢加载和耗电的。

以下行为将有可能产生 Reflow

- 增加、删除、或改变 DOM 节点
- 增加、删除 ‘class’ 属性值
- 元素尺寸改变
- 文本内容改变 
- 浏览器窗口改变大小或拖动
- 动画效果进行计算和改变 CSS 属性值
- 伪类激活（:hover）

延伸阅读：

- 浏览器内核、JS 引擎、页面呈现原理及其优化
- chrome浏览器页面渲染工作原理浅析

[浏览器工作原理:从输入URL到页面加载完成](https://github.com/amandakelake/blog/issues/55)
