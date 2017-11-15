var express = require('express');
var router = express.Router();

router.get("/", function(req, res)
{
	res.render("index");
})

router.get("/apifun", function(req, res)
{
	res.render("api-index");
})

module.exports = router;