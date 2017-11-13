$(document).on("click", ".project-image", function(event)
{
	$("#project-list").fadeOut(500)
	setTimeout(function()
	{
		$("#specific-project").fadeIn()
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