
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


	$('.third-tit').each(function(){
		var text = $(this).text();
		$(this).html(text + '<span>' + text +'</span>');
	})

	$('.case>span').click(function(){
		$(this).parent('.case').toggleClass('open')
	})

	$('.open-why').click(function(){
		$(this).parent('.hide-why').toggleClass('open')
	})

	$('.table-public tr').each(function(){
		console.log(1)
		var index = $(this).parent().find('tr').index($(this));
		var height = $(this).height();

		var divs = $(this).parents('.table-public-warp').find('.left-icons > div');
		divs.eq(index).height(height+ 1)
	})
});