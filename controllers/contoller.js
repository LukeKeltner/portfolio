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

router.get("/giphy", function(req, res)
{
	res.render("giphy");
})

router.get("/omdb", function(req, res)
{
	res.render("omdb");
})

router.get("/mapbox", function(req, res)
{
	res.render("mapbox");
})

module.exports = router;