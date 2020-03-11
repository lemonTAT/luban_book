# Redux 设计思想

Redux是JavaScript状态容器，能提供可预测化的状态管理。

- Web应用是一个状态机，视图与状态是一一对应的。
- 所有的状态，保存在一个对象里面。

几个核心概念：

- Store(快递公司)：保存数据的地方，你可以把它看成一个容器，整个应用只能有一个Store。
- State(快递物件)：Store对象包含所有数据，如果想得到某个时点的数据，就要对Store生成快照，这种时点的数据集合，就叫做State。
- Action(快递单)：State的变化，会导致View的变化。但是，用户接触不到State，只能接触到View。所以，State的变化必须是View导致的。Action就是View发出的通知，表示State应该要发生变化了。
- Action Creator：View要发送多少种消息，就会有多少种Action。如果都手写，会很麻烦，所以我们定义一个函数来生成Action，这个函数就叫Action Creator。
-Reducer(包装货物)：Store收到Action以后，必须给出一个新的State，这样View才会发生变化。这种State的计算过程就叫做Reducer。Reducer是一个函数，它接受Action和当前State作为参数，返回一个新的State。
- dispatch：是View发出Action的唯一方法。

工作流程：

- 用户（通过View）发出Action，发出方式就用到了dispatch方法。
- Store自动调用Reducer，并且传入两个参数：当前State和收到的Action，Reducer会返回新的State
- State一旦有变化，Store就会调用监听函数，来更新View。

到这儿为止，一次用户交互流程结束。可以看到，在整个流程中数据都是单向流动的，这种方式保证了流程的清晰。

![](https://awps-assets.meituan.net/mit-x/blog-images-bundle-2017/adc95a4c.png)

- [深入浅出 Redux 的设计思想](https://juejin.im/entry/58cf445cb123db3f6b43adcc)
- [Redux从设计到源码](https://tech.meituan.com/2017/07/14/redux-design-code.html)
