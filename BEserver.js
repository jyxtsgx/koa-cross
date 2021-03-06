var _ = require('koa-route');
var koa = require('koa');
var app = new koa();
var cors = require('koa-cors');
var session = require('koa-session');

app.keys = ['x132jkflsaj'];

//增加跨域请求头
app.use(cors({
  origin:'http://www.static.com:3001',
  credentials:true
}))

var CONFIG = {
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  maxAge: 5000, /** (number) maxAge in ms (default is 1 days) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
};

app.use(session(CONFIG, app));

//增加接口
app.use(_.get('/crossLoginWithCookie',function *(){
	console.log(this.request.query);
  var logInfo=this.request.query;
  if(logInfo.username==="K"&&logInfo.password==="zhangdeshuai"){
    this.session.login=true;
    this.session.username=logInfo.username;
    this.response.body={
      status:'success',
      data:this.session.username+'` 你好，欢迎回来'
    }
  }else{
    this.response.body={
      status:'fail',
      data:'请输入正确的用户名密码'
    }
  }
}));

app.use(_.get('/logOut',function *(){
  console.log(this.request.query);
  this.session.login=false;
  this.response.body={
    status:'toLogin',
    data:''
  }
}));

app.use(_.get('/getData',function *(){
  console.log(this.session);
  if(this.session.login==true){
    this.response.body={
      status:'success',
      data:this.session.username+'同志你好，欢迎回来'
    }
  }else{
    this.response.body={
      status:'please login',
      data:'请登录'
    }
  }
}));

app.listen(3000);
console.log('listening on port 3000');