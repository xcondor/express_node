const express = require('express');
const userRouter = require('./router/user_router.js');

const app = express();
//中间件完整的结构
//1. 是一个函数
//2. err,req,res,next --> function
function log_middleware(req,res,next){
	console.log('请求来了');
	next();
}

function demo_middleware(err,req,res,next){
	//1.异常处理
	//2.功能函数处理业务功能，转交控制器劝 --next
	//3.响应请求--结束响应--当做路由的处理函数

};

function vaild_name_middleware(req,res,next){
	let { name } = req.query;
	if(!name || !name.length){
		res.json({
			message:'缺少参数',
		})
	} else {
		next();
	}
}
app.use(log_middleware);
//加载一个static中间件
app.use(express.static('static',{
	extensions:['html','htm']
}));

app.use('/user',userRouter);



app.all('*',vaild_name_middleware);
app.get('/test',(req,res)=>{
	res.json({
		message:'middleware',
	})
})

app.listen(3000,(req,res)=>{
	console.log('server started!')
})