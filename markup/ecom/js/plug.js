$(function(){



$(".sidebar__nav_resp").click(function(){
	$(".sidebar__menu-link").slideToggle();
	
});

$(".review_resp").click(function(){
	$(".review").slideToggle();
	$(".review__more").toggle();
});
var widthIphone = $(window).width();
if(widthIphone < 340){
	$(".popular__img").attr('width', '145');
	
}else if(widthIphone<969){
	$(".popular__img").attr('width', '150');
}
if (widthIphone<767){
	$(".sidebar__menu-link").hide();	
}


});