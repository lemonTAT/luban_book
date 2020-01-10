# node子进程spawn,exec

## child_process介绍

Nodejs是单线程单进程的，但是有了child_process模块，可以在程序中直接创建子进程，并使用主进程和子进程之间实现通信。

### child_process.spawn

spawn应该是创建子进程的一个基本的方法。该方法接受三个参数：

- command，表示要执行命令的字符串。
- args，表示执行命令的命令行参数，如果不提供默认值是一个空数组。
- options，可选配置。

其中options可以配置的属性有：

1、cwd，配置该命令执行的目录。

2、stdio，配置子进程跟父进程直接的输入输出方式。

3、env，配额子进程中的环境变量。

4、detached，配置子进程是否独立的。默认情况下父进程是需要等待子进程结束才能结束，当这个配置为true时，父进程不需要等待子进程结束，子进程会在后台继续执行。（子进程使用了父进程的io则这个配置始终都是默认情况。）

5、uid，配置执行子进程的用户id。

6、gid，配置执行子进程的用户组id。


### child_process.exec

exec是spawn的简化版本，三个参数：

- command，要执行的命令的字符串。
- options，可选的配置。
- callback，一个回调函数。当子进程结束的时候会被调用。

options跟spawn类似，有cwd、env，其他的配置如下：

1、encoding，输出流的编码，默认是utf8。

2、timeout，子进程执行的超时时间，默认是0,表示没有超时时间。

3、maxBuffer，输出流的缓冲区大小，<font color=red>默认是200×1024，注意，当输出的内容超过缓冲区的大小子进程会被杀掉。</font>

4、killSignal，子进程被杀的信号，默认是SIGTERM。

其中回调函数有三个输入参数：error、stdout和error，分别对应错误输出、正常输出和执行的错误对象。由于这个回调函数封装了两个输出的内容和错误对象，有大部分的场景都可以不去使用返回的ChildProcess对象，直接使用这个回调函数即可。


## 参考资料
- [Node中spawn和exec的区别](http://dafeizizhu.github.io/2013/08/26/node-child-process-spawn-and-exec/)
