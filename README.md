# koa-cross

koa cross 简易教程

  第一步：
	  我们需要两个域名，没域名怎么办，hosts来凑呗。我们吧www.static.com作为前端静态页面的域名。把www.server.com作为服务端的域名。我们只需要把这两条粘贴在hosts里面就可以了

  第二步:
    我们需要搭两个小服务。一个是后端接口：负责验证登陆，一个是前端页面服务：负责发送请求，显示给用户。

  第三步：
    在我们的小接口中，需要加上cross的信息，同时加上session信息，保证可以验证这个人的登陆信息（虽然实际的验证中，会用到加盐加密，数据库存储信息，内存redis存储，但是本次的例子主要为了讲解cross的问题，所以把以上问题统统省掉）

  第四步：
    现在有了接口，我们来看一看前端的渲染。主要分为三点：

      1在刚进入页面的时候，需要确认是否登陆成功。

      2在点击登陆的时候，需要确认是否登陆成功。

        成功时，隐藏登陆框，并显示服务端返回的信息

        失败时，不做操作，并弹窗提示请输入正确的信息

      3在点击推出登陆的时候，需要作出反应。

  第五步：

    测试一下，并得到结果
    
先期概念整理：

  http

  cross-origin

  session,cookie

  前后端分离,SPA

  静态服务与接口

  koa,generator,箭头函数

      