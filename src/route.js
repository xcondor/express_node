const express = require('express');

const app = express();


app.get('/index',(req,res)=>{
	//req 请求对象
	//res 服务响应对象
	res.json({
		message:'hello get express '
	})
})

app.post('/index',(req,res)=>{
	//req 请求对象
	//res 服务响应对象
	res.json({
		message:'hello post express '
	})
})

//uri
//http://localhost:3000/index/byname?name=John
app.get('/index/byname',(req,res)=>{

	let { name } = req.query;

	res.json({
		name:name
	})
});
//http://localhost:3000/index/byId?id=1010121
app.get('/index/byId',(req,res)=>{

	let { id } = req.query;

	res.json({
		id:id
	})
});
//1. 需要满足客户端无论使用什么请求方式，都可以得到响应

app.all('/all',(req,res)=>{
	res.json({
		message:'demo',
		method: req.method
	})
})
//2. 无论客户端使用任何的uri，都可以响应
app.all('/user/*',(req,res)=>{
	res.json({
		message:'userdeom',
		method: req.method,
		uri:req.path
	})
})
//app.user 路由中间件
app.use('/useMethod/',(req,res)=>{
	res.json({
		message:'demo',
		method:req.method
	})
});
//如何做路由的拆分 express.Router
//member
//skuId
//spuId




app.listen(3000,()=>{
	console.log('server restart success')
})