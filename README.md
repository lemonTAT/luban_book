# 通用gitbook初始化模板

```
安装依赖和gitbook插件

npm run init

本地服务启动

npm run dev

本地编译

npm run build

申请虚拟机之后，可以直接clone仓库实现自动热更新

pm2 start app.js -i max --name fed-doc

通过job可以实现自动检出

pm2 start job.js --watch --name fed-doc-job

也可以将_book电子书发布到github上，通过

npm run publish

先执行build,在执行git 提交，最后把指定的_book文件提交到gh-pages分支上

git subtree push --prefix=_book origin gh-pages
```
