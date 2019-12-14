const express = require('express');

const router = express.Router();

router.get('/list',(req,res)=>{
	res.json({
		list:[{
			id:01,
			name:"John",
			skuId:1001,
			price:200
		},{
			id:02,
			name:"Tom",
			skuId:1002,
			price:100
		}]
	})
});

module.exports = router;