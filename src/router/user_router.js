const express = require('express');

const router = express.Router();
//这段必须放前面 1. 第一个场景
router.use(function(req,res,next){
	console.log('log from router');
	next();
})

function valid_login_params(req,res,next){
	let { name, password } = req.query;
	if(!name || !password){
		res.json({
			message:'参数校验失败!'
		})
	} else {		
		req.formData = {
			name,
			password
		}
		next();
	}
}
//2. 路由内部写法
router.get('/login',[valid_login_params,/**middleware**/],(req,res)=>{
	let { formData } = req; 
	res.json({
		formData,
		message:'from router demo!'
	});
});



module.exports = router;