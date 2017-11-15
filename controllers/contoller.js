var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport(
{

	host: "smtp.gmail.com",
	secure: false,
	port: 587,
	auth:
	{
		user: 'luketotom@gmail.com',
		pass: 'cvoyhqbnalkvltlr'
	}
});

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

router.post("/submit", function(req, res)
{
	console.log(req.body)

	var message = req.body.message+"\n"
	+"Contact's Name: "+req.body.name+"\n"
	+"Contact's Email: "+req.body.email

	var mailOptions = 
	{
		from: 'luketotom@gmail.com',
		to: 'lkeltner87@gmail.com',
		subject: req.body.subject,
		text: message
	};

	transporter.sendMail(mailOptions, function(error, info)
	{
		if (error) 
		{
			console.log(error);
			res.send("Error")
		} 

		else 
		{
			console.log('Email sent: ' + info.response);
			res.send("Success")
		}
	});
})

module.exports = router;