# Redux数据流

![](https://img.alicdn.com/tps/TB1kYfaNVXXXXcLaXXXXXXXXXXX-604-352.png)

所谓 Redux，就是将动作(action) 变换成 state 转换函数(reducer)，然后放到一个统一的地方(store)来 setState 而已。

- 单向性
  - 单向数据流其实并不是redux的特性，而是react本身的思想。这个下面有例子会说明。
- 唯一性
  - 指的是应用的数据都会集中存储在一个地方，这个数据Store就像一个池子，任何组件都可以通过固定的管道来传输或者获取这个池子里面的数据
- 时间旅行
  - 这个“时间旅行”另外的意思是可预测（predictable），即容易理解的代码。在redux里，任何一个数据都有状态。一个用户操作或者程序需要去修改数据，都必须触发Action，这时在redux看来，其实数据是从一个状态，变化成另一个状态。这么一来，数据就变得可预测，可以知道数据的前置状态(prev state)和后置状态(next state)分别是什么，如果在这里加上单元测试，也是极其容易的一件事情。
  
 ## Redux权衡方案
 
- 用简单的对象和数组来描述应用状态
- 用简单的对象来描述应用中的状态变化
- 用纯函数来描述应用中逻辑变化

这意味着你必须遵循一定的规则才可以让你的程序走通。对应的三个文件分别是Action，Reducer，Store，同时也是Redux最重要的3个概念。

### Action(电报员)

Actions 是把数据从应用传到 store 的有效载荷。它是 store 数据的唯一来源。用法是通过 store.dispatch() 把 action 传到 store。

### Dispatch(接线员)

分发

### Reducer(秘书长)

协助处理数组

### Store(总司令)

真正的状态存储地方

![](https://img.alicdn.com/tps/TB1NzjHNVXXXXa6XpXXXXXXXXXX-1399-581.png)

![](https://img.alicdn.com/tps/TB1tRDBNVXXXXX9XFXXXXXXXXXX-799-391.png)

- View触发dispatch
- 进入reducer，修改store中的state
- 将新的state和props传入handleChange中，生成更符合页面的props
- 传给原始根节点重新render

Redux的优点：

- Redux把流程规范了，统一渲染根节点虽然对代码管理上规范了一些,只要有需要显示数据的组件，当相关数据更新时都会自动进行更新。
- 减少手动编码量，提高编码效率。
- Redux 会更加注重数据的单一流向性，所有的 Component
