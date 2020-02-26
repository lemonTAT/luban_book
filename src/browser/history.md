# Histories

## 常用的 history 有三种形式

- browserHistory
- hashHistory
- createMemoryHistory

## browserHistory

Browser history 是使用 React Router 的应用推荐的 history。

## hashHistory

Hash history 使用 URL 中的 hash（#）部分去创建形如 example.com/#/some/path 的路由。

## createMemoryHistory

Memory history 不会在地址栏被操作或读取。这就解释了我们是如何实现服务器渲染的。同时它也非常适合测试和其他的渲染环境（像 React Native ）。
