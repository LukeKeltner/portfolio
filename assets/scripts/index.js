$(".project-image").on("click", function(event)
{
	var id = $(this).attr("id");
	$("#project-list").fadeOut(500)
	window.location="/#projects"
	setTimeout(function()
	{
		$("#specific-project").fadeIn()
		console.log(id)

		if (id==="riddle")
		{
			$('#project-image-insert').html('<h1><i class="fa fa-question fa-5x project-image" aria-hidden="true" id="riddle"></i></h1>')
			$('#project-description').html("This Riddle Game rewards players with game currency and level ups for successfully answering riddles correctly.")
			$('#project-features').html("<li>Individual user experience</li><li>SQL Database with secured user table, riddle table, and lookup table</li><li>Users never see a riddle they have gotten correct twice</li><li>Leaderboard that highlights the user and their rank among all other users. Rank based on amount of coins and level</li>")
			$('#project-tech').html("<li>Node and Express</li><li>Express Handlebars</li><li>SQL Database with custom made ORM</li><li>AES-js</li><li>Validator npm</li><li>mysql npm</li>")
			$('#heroku-link').html('<a href="http://riddlegame.herokuapp.com/" target="_blank"><i class="fa fa-gamepad fa-5x" aria-hidden="true"></i></a><h2>Try it out!</h2>')
			$('#github-link').html('<a href="https://github.com/riddle-dudes/riddle-project" target="_blank"><i class="fa fa-github-square fa-5x" aria-hidden="true"></i></a>')
		}
	},400)
})

$('#back').on("click", function(event)
{
	$("#specific-project").fadeOut(500)
	setTimeout(function()
	{
		$("#project-list").fadeIn()
	},400)	
})