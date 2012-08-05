$(function() {
	$(".accordion").accordion(
	{
		autoHeight: false,
		active: false,
		collapsible: true,
		header: '>h4'
	});
});

$(document).on("click", ".question", function(event){
	var id = $(event.target).attr("id").replace("question", "answer");
	$(this).parents(".content").find(".answer").hide();
	$(this).parents(".content").find("#"+id).show();
	var height = $("#general").height();
	$(".answer").height(height - 20);
});

$(window).resize(function(){
	var height = $("#general").height();
	$(".answer").height(height - 20);
});

$(document).on("click", ".tab-item > a", function(event){
	event.preventDefault();	
	$(".tab-item").removeClass("active");
	$(this).parent().addClass("active");
	
	var id = "#"+$(this).attr("id").replace("tab-", "");
	$(".content").hide();
	$(id).show();
	$(id).find(".accordion").accordion({
		autoHeight: false,
		active: false,
		collapsible: true,
		header: '>h4'
	});
});