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
			$('#project-image-insert').html('<img src="images/riddle.png" style="height:600px;"></img>')
			$('#project-description').html("This is a Riddle Game.  Features include...")
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