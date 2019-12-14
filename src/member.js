const express = require('express');

const router = express.Router();

router.get('/list',(req,res)=>{
	res.json({
		list:[{
			id:01,
			name:"John"
		},{
			id:02,
			name:"Tom"
		}]
	})
});

module.exports = router;