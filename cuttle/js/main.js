$(document).ready(function() {
            
//скорость вращения и таймер
	    var speed = 500;
	   // var run = setInterval('rotate()', speed);  
	 
	    //захватите ширину и вычислите оставленное значение
	 
	    var item_width = $('#carousel_inner li').outerWidth();
	    var left_value = item_width * (-1);
	 
	    //переместите последний элемент перед первым элементом, на всякий случай пользователь нажимает предыдущую кнопку
	 
    $('#carousel_inner li:first').before($('#carousel_inner li:last'));
	 
	    //установите элемент по умолчанию в корректную позицию
	 
	    $('#carousel_inner ul').css({'left' : left_value});
	 
	    //если пользователь щелкнул по предыдущей кнопке
	    $('#left_scroll').click(function() {
	 
	        //получите правильную позицию
	        var left_indent = parseInt($('#carousel_inner ul').css('left')) + item_width;
	 
	        //двигайте элемент
	        $('#carousel_inner ul').animate({'left' : left_indent}, 200,function(){   
	 
	            //переместите последний элемент и поместите его как первый элемент
	            $('#carousel_inner li:first').before($('#carousel_inner li:last'));          
 
	            //установите элемент по умолчанию, чтобы исправить позицию
	 
	            $('#carousel_inner ul').css({'left' : left_value});
	 
	        });
	 
	        //отмените поведение ссылки
	        return false;
	 
	    });
	 
	    //если пользователь щелкнул по следующей кнопке
	    $('#right_scroll').click(function() {
	 
	        //получите правильную позицию
	        var left_indent = parseInt($('#carousel_inner ul').css('left')) - item_width;
	 
	        //двигайте элемент
	        $('#carousel_inner ul').animate({'left' : left_indent}, 200, function () {
	 
            //переместите первый элемент и поместите его как последний элемент
	            $('#carousel_inner li:last').after($('#carousel_inner li:first'));                 
	 
	            //установите элемент по умолчанию, чтобы исправить позицию
	            $('#carousel_inner ul').css({'left' : left_value});
	 
	        });
	 
	        //отмените поведение ссылки
	        return false;
	 
	    });       
	 
	    //если парение мыши, приостановите автоматическое вращение, иначе поверните это
	 /*   $('#carousel_inner').hover(
	 
	        function() {
	            clearInterval(run);
	        },
	        function() {
	            run = setInterval('rotate()', speed);
	        }
	    );*/
	 
	
	$('#content').append('<div class="clear"> </div>');
	
	//простая функция, чтобы щелкнуть по следующей ссылке
	//таймер вызовет эту функцию, и вращение начнется <img src="http://pradscript.ru/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley">
	/*function rotate() {
	    $('#right_scroll').click();
	}*/

	var heiNow = $('#content').height();
	var heiSlash =  Math.ceil(heiNow/165);
	var contHeight = heiSlash*165 -45;
	$('#content').height(contHeight);
	//var elseFeed = contHeight;
	//$('body.bar #content, body.feed #content').height(elseFeed);
	
	});
	
			
			
			
			


		
