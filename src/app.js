const express = require('express');

const app = express();
//注册路由

const memberRoute = require('./member.js');
const skuRoute = require('./sku.js');
app.use('/member',memberRoute);
app.use('/sku',skuRoute);
// app.use((req,res)=>{
// 	res.json({
// 		name:'张三',
// 		id:202301,
// 		school:'衡水第三中学'
// 	});
// })

app.get('/user/:age',(req,res)=>{
	let { age } = req.params;

	res.json({
		name:'Tom',
		age
	})
})
app.post('/user',(req,res)=>{
	res.send({
		name:'John',
		age:21
	})
})



app.listen(3000,()=>{
	console.log('server 启动成功')
});

// const http = require('http');

// const server = http.createServer((req,res)=>{

// })