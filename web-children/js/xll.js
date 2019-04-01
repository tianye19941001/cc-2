
$(document).ready(function(){
	// 公共方法
	var publicFuc = {
		stophref: function(e){
			if ( e && e.preventDefault ){
				e.preventDefault(); 
			}else{
				window.event.returnValue = false; 
				return false;
			}
		},
		stopbubble: function(e){
			if ( e && e.stopPropagation ){
				e.stopPropagation(); 
			}else{
				window.event.cancelBubble = true;
				return false;
			}
		},
		movescroll: function(btn,to) {
			$('html,body').animate({scrollTop: $(to).offset().top-60},600);
		}
	}

	$('.case>span').click(function(){
		$(this).parent('.case').toggleClass('open')
	})

	$('.open-why').click(function(){
		$(this).parent('.hide-why').toggleClass('open')
	})

	$('.tabs-list>li').click(function(){
		var index = $('.tabs-list>li').index($(this));
		$('.tabs-boxs>ul').removeClass('active').eq(index).addClass('active');
		$('.tabs-list>li').removeClass('active').eq(index).addClass('active');
	})

	$('.report-res').each(function(){
		var text = $(this).html();
		if(text && text.indexOf('br') > 0) {
			$(this).addClass('double');
		}
	})
});