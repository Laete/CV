$(function() {
	$(".accordion").accordion(
	{
		autoHeight: false,
		active: false,
		collapsible: true,
		header: '>h4'
	});
	
	$("input[type='text']").val('');
});

$(document).on("click", ".question", function(event){
	var id = $(event.target).attr("id").replace("question", "answer");
	$(this).parents(".content").find(".answer").hide();
	$(this).parents(".content").find("#"+id).show();
	var height = $("#general").height();
	$(".answer").height(height - 20);
});

$(document).on("click", ".tab-item", function(event){
	if ($(event.target).is("li")){
		var url = $(event.target).children("a").attr("href");
		window.location = url;
	}
});

$(window).resize(function(){
	var height = $("#general").height();
	$(".answer").height(height - 20);
});

$(document).on("click", "#getinfo", function(){
	$("#info").val(bmw.getInfo() + ", "+audi.getInfo()+", "+toyota.getInfo());
});

$(document).on("click", "#getsimpleinfo", function(){
	$("#simpleinfo").val("Car: "+bmw + ", "+audi+", "+toyota);
});

$(document).on("click", "#getdetailedinfo", function(){
	$("#detailedinfo").val(bmw.getDetailedInfo()+", "+audi.getDetailedInfo()+", "+toyota.getDetailedInfo());
});

$(document).on("click", "#getlist", function(){
	$("#list").val(yandex.list());
});

$(document).on("click", "#getgerlist", function(){
	$("#gerlist").val(yandex.listByCountry('Germany'));
});

$(document).on("click", "#getjaplist", function(){
	$("#japlist").val(yandex.listByCountry('Japan'));
});

$(document).on("click", "#getlistprice", function(){
	$("#listprice").val(yandex.listRubles());
});