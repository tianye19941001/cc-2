 $(document).ready(function(){
	var ty_public = { 
		brower: function(){
			var userAgent = navigator.userAgent; 
		    var isOpera = userAgent.indexOf("Opera") > -1;
		    if (isOpera) {
		        return "Opera"
		    }; 
		    if (userAgent.indexOf("Firefox") > -1) {
		        return "FF";
		    } 
		    if (userAgent.indexOf("Chrome") > -1){
			  return "Chrome";
			 }
		    if (userAgent.indexOf("Safari") > -1) {
		        return "Safari";
		    } 
		    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
		    	var IEMethod = userAgent.slice(userAgent.indexOf("MSIE")+5,userAgent.indexOf("MSIE")+6);
		        return IEMethod;
		    }
		},
		stopDefault:function(e){
			if ( e && e.preventDefault ){
				e.preventDefault(); 
			}else{
				window.event.returnValue = false; 
				return false;
			}
		},
		stopBubble:function(e){
			if ( e && e.stopPropagation ){
				e.stopPropagation(); 
			}else{
				window.event.cancelBubble = true;
				return false;
			}
		},
		setCookies: function (c_name,value,expiredays)
		{
			var exdate=new Date();
			exdate.setDate(exdate.getDate()+expiredays);
			document.cookie= c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
		},
		getCookies: function(c_name){
			if (document.cookie.length>0){
				c_start=document.cookie.indexOf(c_name + "=")
				if (c_start!=-1){ 
				    c_start=c_start + c_name.length+1 
				    c_end=document.cookie.indexOf(";",c_start)
			    	if (c_end==-1) c_end=document.cookie.length
			   		return unescape(document.cookie.substring(c_start,c_end))
			    } 
			}
			return ""
		}
	}
	$('.school_life_content').eq(0).show()

	$('.school_life_list a').click(function(){
		var index =  $('.school_life_list a').index($(this));
		$('.school_life_content').hide().eq(index).slideDown(500);
		$('.school_life_list a').removeClass('active').eq(index).addClass('active')
	})

	$('#student-right').click(function(){
		swiperStudent.slideNext()
	})

	$('#student-left').click(function(){
		swiperStudent.slidePrev()
	})

	$('.menu-and-close').click(function(){
		var height = $(window).height();
		if(!$(this).hasClass('close')){
			$('body').css({'overflow':'hidden', 'height': height});
			$('.nav_list').show(300);
			$(this).addClass('close');
			movescroll('body');
			$('.nav').css({'position': 'fixed', 'top': 0, 'left': 0})
		} else {
			$('body').css({'overflow':'auto', 'height': 'auto'});
			$('.nav_list').hide(300);
			$(this).removeClass('close');
			$('.nav').css({'position': 'relative'});
			movescroll('body');
		}
	})

	// 滚动到指定元素
	function movescroll(to) {
		$('html,body').animate({scrollTop: $(to).offset().top-60},600);
	}
	
	if (document.body.clientWidth >= 1024) {
		var swiperNews = new Swiper('.news-swiper-container', {
			slidesPerView: 2,
			spaceBetween: 30,
			pagination: {
				el: '.news-boll',
				clickable: true,
			},
			grabCursor: true,
			speed: 1000,
			paginationClickable: true,
			autoplay: {
				delay: 3000
			}
		});

		$('.nav_list').on('mouseenter', function(){
			$('.nav_list').append('<em></em>');
		})

		$('.nav_list').on('mouseleave', function(){
			$('.nav_list em').remove();
		})

		$('.nav_list a').on('mouseenter', function(){
			var index = $('.nav_list a').index($(this));
			var left = index * 93 + 14;
			setTimeout(function(){
				$('.nav_list em').css('left', left)
			},0)
		})
		
	}else{
		var swiperNews = new Swiper('.news-swiper-container', {
			slidesPerView: 1,
			pagination: {
				el: '.news-boll',
				clickable: true,
			},
			speed: 1000,
			paginationClickable: true,
			autoplay: {
				delay: 3000
			}
		});
	}

	// 动画延时函数
	function adddelay(obj,time){
		if (obj.length>0) {
			for (var i = 0; i < obj.length; i++) {
				obj.eq(i).addClass('an_delay'+(i*time+3));
			}
		}
	}

	// 动画增加函数
	function addAnimate(elem,Class,count,nums){
		if( elem.length > 0){
			var offsetT = elem.offset().top;
			var overHeight = $(document).scrollTop() + $(window).height() - 80;
			if (elem.length>=1){
				for( var i = 0; i < elem.length; i++ ){
					if (overHeight > elem.eq(i).offset().top){
						if (!elem.eq(i).hasClass(Class)) {
							elem.eq(i).addClass(Class);
						}
					}
				}
			}
		}
	}

	// 动画
	function animateInit(){
		var toTop = '.content,.student_life,footer';
		var toLeft = '.title,.ts-tit,.school_life_content';
		var toRight = '.newList,.school_life_list';
		var toBottom = '.e';
		addAnimate($(toTop),'an_toTop');
		addAnimate($(toLeft),'an_toLeft');
		addAnimate($(toRight),'an_toRight');
		addAnimate($(toBottom),'an_toBottom');
	}

	$(window).scroll(function() {
  	animateInit();
	});

	(function init(){
		animateInit();
	})();
});
