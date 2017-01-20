$(document).ready(function(){



var screenWidth = $("body").width();

$(window).resize(function(){
var ssw = $("body").width();
if (ssw != screenWidth ){
$("ul#main_nav li a").css("fontSize","13px");
}

else {
$("ul#main_nav li a").css("fontSize","1.2em");
}
}); 




$("select").hide();


$("#formIn").hide();
$("#ilog").click(function(){
$("#formIn").fadeIn();
});
$("#img_but").click(function(){
$("#formIn").fadeOut();
});
//$("select").selectbox();


$("#naturemort > div").css({"float":"left",
"width":"224px",
"height":"133px"

});

$("ul.ebook li a:last").css("fontWeight","bold");


$("#fm_menu").dropShadow({left: 1, top: 3, blur: 2, opacity: 0.1, color: "black"});





$("#sidecol ul li:first").addClass("side_top");
$("#sidecol ul li:last").addClass("side_bottom");



$("#news p:first").css("marginTop","25px");

$("#salt_com p:first").css("marginTop","60px");


$(".jquery-custom-selectboxes-replaced").width("141px");
$(".jquery-custom-selectboxes-replaced-list").width("155px").height("100px").addClass("style_select");

// count


var sideHeight = $("#sidecol").height();
var panno = $("#panno").height();
var nature = $("#naturemort").height();
var main= $("#main").height();
var mainWidth = $("#main").width();
var rightPull = $("#right_pull").width();
var liStart = $("ul#main_nav li").width();
var imgWidth = $("#salt_itself #wrapImg .iAmImg").width();


$("#wrapImg").width(imgWidth);

	var imgHeight = $("#salt_itself #wrapImg .iAmImg").width();
	var saltItselfHeight = $("#salt_itself").height();
	var padTop = (saltItselfHeight - imgHeight)  + 'px';
	$("#salt_itself").css("paddingTop", padTop);

//var widrp = (screenWidth - mainWidth) / 2 ;
//$("#right_pull").width(widrp);
//var ef = main - nature;
//$("#panno").height(ef);
//$("#main").height(sideHeight);


//$(".cot_third").height(mainCot);
/*
$(".cot").each(function(){
var mainCot = $(this).height();
$(this).find(".cot_third").height(mainCot);
var basketMarg = (mainCot - 60) + 'px';
$(this).find(".basket_cot").css("marginTop", basketMarg);

});
*/


if(screenWidth < 1050){
$("#left_fleas").hide();
$("#right_pull").hide();
}
if(screenWidth < 1700){
$("#right_pull").css("left","500px");
}
else {
$("#right_pull").css("right","-300px");
}
if(screenWidth < 1500){
$("#right_pull").css("left","450px");
}
if(screenWidth < 1300){
$("#right_pull").css("left","200px");
$("#right_pull").hide();
}






if ($.browser.msie) {
$("#sidecol ul").dropShadow({left: 1, top: 3, blur: 2, opacity: 0.3, color: "black"});
$("#ds4650").height(sideHeight);

}

else {
$("#sidecol ul").dropShadow({left: 1, top: 3, blur: 2, opacity: 0.3, color: "black"});
}

$("#sidecol #news").dropShadow({left: 1, top: 3, blur: 1, opacity: 0.3, color: "black"});


$("#panno").dropShadow({left: 1, top: 3, blur: 1, opacity: 0.2, color: "black"});
/*
var itsme = location.href;
if (itsme.split('/')[3]!=0){

$.each($("#sidecol ul a[href*=/"+itsme.split('/')[3]+"]"),
function(){$(this).addClass('itsme');});
}
*/
$("#sidecol ul li a:has(b)").addClass("itsme");

var mrg = $("body").attr("id");
$("#fm_menu ul li").filter('.' + mrg).addClass("tofm");




});