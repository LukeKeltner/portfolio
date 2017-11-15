$(".project-image").on("click", function(event)
{
	window.location="/#projects"
	var id = $(this).attr("id");
	$("#project-list").fadeOut(100)
	setTimeout(function()
	{
		$("#specific-project").fadeIn()
		console.log(id)

		if (id === "riddle")
		{
			$('#project-image-insert').html('<h1><i class="fa fa-question fa-5x project-image" aria-hidden="true" id="riddle"></i></h1>')
			$('#project-description').html("This Riddle Game rewards players with game currency and level ups for successfully answering riddles correctly")
			$('#project-features').html("<li>Individual user experience</li><li>SQL Database with secured user table, riddle table, and lookup table</li><li>Users never see a riddle they have gotten correct twice</li><li>Leaderboard that highlights the user and their rank among all other users. Rank based on amount of coins and level</li>")
			$('#project-tech').html("<li>Node and Express</li><li>Express Handlebars</li><li>SQL Database with custom made ORM</li><li>AES-js</li><li>validator npm</li><li>mysql npm</li><li>Bootstrap</li>")
			$('#heroku-link').html('<a href="http://riddlegame.herokuapp.com/" target="_blank"><i class="fa fa-gamepad fa-5x" aria-hidden="true"></i></a><h2>Play me!</h2>')
			$('#github-link').html('<a href="https://github.com/riddle-dudes/riddle-project" target="_blank"><i class="fa fa-github-square fa-5x" aria-hidden="true"></i></a>')
		}

		if (id === "tom")
		{
			$('#project-image-insert').html('<h1><i class="fa fa-microphone fa-5x project-image" aria-hidden="true" id="riddle"></i></h1>')
			$('#project-description').html("Tom Keltner Sings the Classics - Singing biography website designed to promote the talents of Tom Keltner")
			$('#project-features').html("<li>Developed to have the classical look</li><li>A song table with over 80 entries searchable by title, artist, lyricist, genre, or year</li><li>Photo Gallery constructed using Bootstrap</li><li>Song List and Photo Gallery constructed from JSON objects easy maintance and updating.</li><li>Constact Me section constructed with nodemailer</li>")
			$('#project-tech').html("<li>Node and Express</li><li>nodemailer</li><li>Bootstrap for mobile friendly use</li><li>fs-extra</li>")
			$('#heroku-link').html('<a href="http://tomkeltner.herokuapp.com/" target="_blank"><i class="fa fa-eye fa-5x" aria-hidden="true"></i></a><h2>Check it out!</h2>')
			$('#github-link').html('<a href="https://github.com/LukeKeltner/tomkeltner-repo" target="_blank"><i class="fa fa-github-square fa-5x" aria-hidden="true"></i></a>')
		}

		if (id === "apifun")
		{
			$('#project-image-insert').html('<h1><i class="fa fa-globe fa-5x project-image" aria-hidden="true" id="riddle"></i></h1>')
			$('#project-description').html("API Fun was developed to demonstrate the ease, scope, and entertainment of APIs")
			$('#project-features').html("<li>Gif search function that produces a given amount of gifs searched by a user input, includes search history</li><li>Movie database search that plots movies' IMDB scores against each other. User chooses all movies and can reset graph at any time.</li><li>Map and Weather function where user clicks anywhere on the globe and receives the following information on where they clicked:<ul><li>Latitude and Longitude</li><li>Area</li><li>Weather</li><li>Temperature, Humidity, and Wind Speed</li></ul></li>")
			$('#project-tech').html("<li>Bootstrap for mobile friendly use</li><li>JQUERY ajax</li><li>c3.js</li><li>APIs include:<ul><li>GIPHY</li><li>OMDB</li><li>Mapbox</li><li>OpenWeatherMap</li></ul></li>")
			$('#heroku-link').html('<a href="/apifun" target="_blank"><i class="fa fa-eye fa-5x" aria-hidden="true"></i></a><h2>Check it out!</h2>')
			$('#github-link').html('<a href="https://github.com/LukeKeltner/API-Fun" target="_blank"><i class="fa fa-github-square fa-5x" aria-hidden="true"></i></a>')
		}

		if (id === "rf")
		{
			$('#project-image-insert').html('<h1><i class="fa fa-heartbeat fa-5x project-image" aria-hidden="true" id="riddle"></i></h1>')
			$('#project-description').html("Spinal Surgery Complication Predictor - developed for The Cleveland Medical Hackathon")
			$('#project-features').html("<li>Web app that lets doctors input patient information and predicts probability of patient having complications after a spinal surgery</li><li>Doctors can use from over 300 diagnoses and past medical complications from searchable tables to improve predictability<li>Implements a custom written Repeated Random Balanced Sub-Sampling Random Forest algorithm for appreciable accuracy</li>")
			$('#project-tech').html("<li>Node and Express</li><li>Child Process</li><li>Python<ul><li>pandas for data cleaning and processing</li><li>scikit-learn for Random Forest algorithm</li><li>Created Repeated Random Balanced Sub Sampling algorithm to account for low positive complication counts to increase accuracy.</li></ul></li>")
			$('#heroku-link').html('<a href="https://www.youtube.com/watch?v=FWMhkfqMGP8" target="_blank"><i class="fa fa-youtube-play fa-5x" aria-hidden="true"></i></a><h2>Watch the Demo!</h2>')
			$('#github-link').html('<a href="https://github.com/Medical-Hackathon/project" target="_blank"><i class="fa fa-github-square fa-5x" aria-hidden="true"></i></a>')
		}

		if (id === "bamazon")
		{
			$('#project-image-insert').html('<h1><i class="fa fa-shopping-bag fa-5x project-image" aria-hidden="true" id="riddle"></i></h1>')
			$('#project-description').html("Bamazon simulates an online store complete with customer, manager, and supervisor funtionality")
			$('#project-features').html("<li>CLI-table package allows for clean tables for client viewing</li><li>Interactive cli interface allows:<ul><li>Customers to buy items</li><li>Managers to view items with their departments and stock quantities and items in low stock, restock items, and add new items to current departments.</li><li>Supervisors to view the Product by Sales table showing them how much money each department has made, the over head costs of each department, and the total profits which is the subtraction of over head costs from product sales. They also are able to create new departments.</ul></li>")
			$('#project-tech').html("<li>Node</li><li>Inquirer</li><li>cli-table</li><li>mysql - Products and Departments tables with relational queries</li>")
			$('#heroku-link').html('<a href="https://www.youtube.com/watch?v=9YW2XWnSX3c&t=2s" target="_blank"><i class="fa fa-youtube-play fa-5x" aria-hidden="true"></i></a><h2>Watch the Demo!</h2>')
			$('#github-link').html('<a href="https://github.com/LukeKeltner/bamazon" target="_blank"><i class="fa fa-github-square fa-5x" aria-hidden="true"></i></a><h2>Clone and play!</h2>')
		}
	},100)
})

$('#back').on("click", function(event)
{
	$("#specific-project").fadeOut(100)
	window.location="/#projects"
	setTimeout(function()
	{
		$("#project-list").fadeIn()
	},100)	
})