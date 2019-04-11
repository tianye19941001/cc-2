
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
	var leftContent  = document.querySelector(".left-content");
	var rightContent  = document.querySelector(".right-content");

	//先是leftContent旋转角度从0增加到180度，
	//然后是rightContent旋转角度从0增加到180度
	if($(leftContent).length > 0){
		var num = $('#num').text();
		var angle = num/100*360;

		var timerId = setTimeout(function(){
			if(angle > 180){
				leftContent.setAttribute('style', 'transform: rotate(180deg) scale(1.1)');
				rightContent.setAttribute('style', 'transform: rotate('+(angle-180)+'deg) scale(1.1)');
			}else{
				leftContent.setAttribute('style', 'transform: rotate('+angle+'deg) scale(1.1)');
			}
		},0);
	}

	// 只显示表格前四个
	if($('.table tr').length && $('.table tr').length > 5){
		hide();
		function hide() {
			$('.table tr,.table .res p').show();
			$('.table tr').each(function(index){
				if(index > 4) {
					$(this).hide();
					$('.table .res p').eq(index).hide();
				}
			})
		}

		$('.show-all').click(function(){
			if($(this).hasClass('on')){
				hide();
				$(this).removeClass('on')
			} else {
				$('.table tr,.table .res p').show();
				$(this).addClass('on')
			}
		})
	}
});