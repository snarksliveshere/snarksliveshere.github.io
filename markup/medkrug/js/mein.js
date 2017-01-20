$(document).ready(function(){


$("select").selectbox();

//$("#hb_left_bottom").dropShadow({left: 1, top: 0, blur: 2,bottom:-1, opacity: 0.4});
$("#hb_lb_menu li:first").css({'marginLeft': '5px','textIndent' :'4px'});
if ($.browser.webkit) {
$("#hb_lb_menu li:first").css({'marginLeft': '5px','textIndent' :'7px'});
$("#li_bormental a span").css({'marginLeft':'7px' , 'marginRight' : '14px'});	
//$("#top_menu_front li").css({'marginLeft':'12px'});

}


$(".tests:first").css("borderBottom","none");
$(".com_wrap .test_main_type:first").css("marginBottom","30px");
$(".left_art:first").css("marginLeft","0");


//   form slide photo 
$(".sect_slide_img").hide();

$("#sect_weight .sect_type").toggle(function()
{	
$("#sect_weight .sect_icon").toggleClass("sect_icon_hover");
$(" #first_slide").slideDown('slow').show();
}, 
function()
{
$("#sect_weight .sect_icon").toggleClass("sect_icon_hover");	
$(" #first_slide").slideUp('slow').hide();		
}); 

// second 

$("#sect_korm .sect_type").toggle(function()
{	
$("#sect_korm .sect_icon").toggleClass("sect_icon_hover");
$(" #second_slide").slideDown('slow').show();
}, 
function()
{
$("#sect_korm .sect_icon").toggleClass("sect_icon_hover");	
$(" #second_slide").slideUp('slow').hide();		
}); 

// psyfamily
$("#sect_psyfamily .sect_type").toggle(function()
{	
$("#sect_psyfamily .sect_icon").toggleClass("sect_icon_hover");
$(" #third_slide").slideDown('slow').show();
}, 
function()
{
$("#sect_psyfamily .sect_icon").toggleClass("sect_icon_hover");	
$(" #third_slide").slideUp('slow').hide();		
}); 

// psychild
$("#sect_psychild .sect_type").toggle(function()
{	
$("#sect_psychild .sect_icon").toggleClass("sect_icon_hover");
$(" #fourth_slide").slideDown('slow').show();
}, 
function()
{
$("#sect_psychild .sect_icon").toggleClass("sect_icon_hover");	
$(" #fourth_slide").slideUp('slow').hide();		
}); 

// end slide photo

// slide article
// to right 
 
$(".s_to_right").click(function(){
$("#art_to_slide").stop().animate({"left":"-=416px"}, 1000);	
	
}); // to right

// to left
$(".s_to_left").click(function(){
$("#art_to_slide").stop().animate({"left":"+=416px"}, 1000);	
	
}); // to left
// end slide article

// community hover
$(".com_wrap").hover(function(){
$(this).toggleClass("com_wrap_hover");
}, function(){
$(this).toggleClass("com_wrap_hover");
});
// end community hover

// test hover
$(".ic_test").hide();
$(".tests").hover(function(){
$(this).toggleClass("tests_hover");	
$(this).find(".ic_test").show();
},function(){
$(this).toggleClass("tests_hover");
$(".ic_test").hide();	
}); // end test hover

// doc hover
$(".doc").hover(function(){
$(this).toggleClass("doc_hover");
$(this).find(".doc_ic").show();	
},function(){
$(this).toggleClass("doc_hover");
$(".doc_ic").hide();	
}); // end doc hover

// week hover
$(".week").hover(function(){
$(this).toggleClass("week_hover");
	
},function(){
$(this).toggleClass("week_hover");
	
}); // end week hover

// news
$(".news_wrap").hover(function(){
$(this).toggleClass("news_wrap_hover");
	
},function(){
$(this).toggleClass("news_wrap_hover");
	
}); // end news hover

// konkur


$(".all_konkur").hover(function(){

$(this).toggleClass("all_konkur_hover");
$(this).find(".k_h").show();

},function(){
$(this).toggleClass("all_konkur_hover");
$(this).find(".k_h").hide();
	
}); // end news hover

// photo hover
$(".ioga").hide();
$(".ph_icon").hover(function(){
$(this).animate({width:"115px",height:"76px",left:"-77px",top:"-50px"}, 800);
$(this).find(".ph_w").toggleClass("ph_wh");
$(this).find(".ioga").show(400);
},function(){
//$(this).find(".ph_w").toggleClass("ph_wh");
$(this).animate({width:"38px",height:"26px",left:"0",top:"0"}, 800);
//$(this).find(".ph_w").delay(800).toggleClass("ph_wh");	
$(this).find(".ioga").hide();
}); // end photo hover

// меню
//$("#top_menu_front ul li:last").hide(); 

//$("#top_menu_front ul.tpa_ul").dropShadow({left: 4, top: 4, blur: 2, opacity: 0.4, color: "black"});
// se ul
$("ul.se_ul li a:first-child").mouseover(function() {

 $(this).parent().find("ul.se_m").slideDown('slow').show();  
 
 $(this).parent().hover(function() {
 },  function(){
 $(this).parent().find("ul.se_m").slideUp('slow');
   });
 });
// end seul

$("#top_menu_front ul").hide(); 

// main menu

$("ul#top_menu_front li a:first-child").mouseover(function() {


 $(this).parent().find("ul.tpa_ul").fadeIn().show();  
$(this).parent().find("ul.tpa_ul").fadeIn().dropShadow({left: 4, top: 4, blur: 2, opacity: 0.4, color: "black"});
 $(this).parent().hover(function() {
		  
 },  function(){
 $("#top_menu_front .dropShadow").hide();
 $(this).parent().find("ul.tpa_ul").fadeOut();
 $(this).find("a").removeClass("li_left");
 $(this).parent().find("li").removeClass("li_right");
   });
 });// mouseover
 
/* 
 $("ul.#top_menu_front li ul li  a").mouseover(function() {

 $(this).parent().find("ul.subnav2").slideDown('fast').show();  

 $(this).parent().hover(function() {
 },  function(){
 $(this).parent().find("ul.subnav2").slideUp('slow');  

 });

 });

*/

$("#top_menu_front li a:first-child").hover(function(){
//$(this).parent().find("ul.tpa_ul").fadeIn().show();
$(this).addClass("li_left");
$(this).parent().addClass("li_right");

},function(){
//$(this).parent().find("ul.tpa_ul").fadeOut('slow');
//$(this).toggleClass("li_left");
//$(this).parent().toggleClass("li_right");


}); // end menu hover




$("#top_menu_front li ul li a").hover(function(){
$(this).removeClass("li_left");
$(this).parent().removeClass("li_right");	
	
	}, function(){
$(this).removeClass("li_left");
$(this).parent().removeClass("li_right");		
		
		});

// community
/*
$("#top_menu_community a:first-child").hover(function(){
$(this).toggleClass("li_right");
$(this).parent().toggleClass("li_left");	
	
},function(){
$(this).toggleClass("li_right");
$(this).parent().toggleClass("li_left");	
}); // community hover
*/
//$("#top_menu_front li ul li a:first").css("paddingTop","21px");

//$("..wrap_select select option:selected").addClass("forms_left_sel");
//$(".wrap_select:first").css("marginTop","20px");
//$("#hb_rb_orange").dropShadow({left: 2, top: -1, blur: 3, opacity: 0.4});




}); // end ready
