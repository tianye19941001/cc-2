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

	function movescroll(to) {
		$('html,body').animate({scrollTop: $(to).offset().top-60},600);
	}

	function customs(){
		$(".detialmains .on .text p").mCustomScrollbar({
			scrollButtons:{
				enable:true
			}
		});
	}
	// 内部数据
	var jidiArr = ['http://honghaier.huilang365.com/images/guanyu/jidi2.jpg','http://honghaier.huilang365.com/images/guanyu/jidi3.jpg','http://honghaier.huilang365.com/images/guanyu/jidi4.jpg','http://honghaier.huilang365.com/images/guanyu/jidi5.jpg']
	
	// 初始化
	
	var hrefLoc = window.location.href;
	var allHref = $('.red_new a,.red_new_top a,.red_index_main3IN .picword');
	if (hrefLoc.indexOf('www.')>0) {
		allHref.each(function(){
			var inhr = $(this).attr('href');
			if(typeof inhr == 'string'){
				var indexhr = inhr.indexOf('http://');
				if ($(this).attr('href').indexOf('www.')<0) {
					var ed = inhr.slice(indexhr+7);
					$(this).attr('href','http://www.'+ed)
				}
			}
		})
	}else{
		allHref.each(function(){
			var inhr = $(this).attr('href');
			if(typeof inhr == 'string'){
				var indexhr = inhr.indexOf('http://');
				if ($(this).attr('href').indexOf('www.')>0) {
					var ed = inhr.slice(indexhr+11);
					$(this).attr('href','http://'+ed)
				}
			}
		})
	}

	var localsearch = window.location.search;
	if (localsearch) {
		var className = localsearch.slice(1);
		movescroll(className);
	}

	$('.nav-to p').click(function(){
		var isOn = $(this).parents('li').hasClass('on');
		var className = $(this).data('class');

		if (!isOn) {
			var href = $(this).parents('li').find('a').attr('href') + "?" + className;
			$(this).parents('li').find('a').attr('href',href);
			$(this).parents('li').find('a span').trigger('click');
			return;
		}

		movescroll(className);
	})
	
	// $('.red_lun').height($(window).height());
	function setall(){
		var mainW = $('.red_main').width();
		$('.red_lun,.red_culIN').height(mainW/1676*890);

		var main3 = $('.red_index_main3IN .pic').width();
		$('.red_index_main3IN .picword').height(main3/396*425)

		var about1 = $('.product .proIN').width();
		$('.product .proIN img').height(about1/345*358)

		// var about2 = $('.gov .l').width();
		// $('.gov,.jidiIn .outer').height(about2)

		var intro2 = $('.wayin').width();
		$('.wayin .img').height(intro2/324*254)
	}
	setall();

	// iframe
	$('#ty_iframe').load(
        function(){
        	if ($(this).contents().find("body").find('.newframe_about').length > 0) {
	            $(this).height($(this).contents().find("body").find(".news-article").height() + 15);  
        	}else{
	            $(this).height($(this).contents().find("body").find(".news-article").height() + 50);  
        	}
			var minH = $(window).height();
			$(".ty_wrapbac").css('min-height',minH+'px');
			$(".ty_wrapbac").height($('#ty_iframe').height() + 70);
        }
    );
    var iframeit  = setInterval(function(){
    	
        $('#ty_iframe').contents().find(".inner-right").hide();
		if ($('#ty_iframe').length>0 && $('#ty_iframe').attr('src')!='#') {
			if ($('#ty_iframe').contents().find("body").find('.newframe_about').length > 0) {
				if ($('#ty_iframe').height()==($('#ty_iframe').contents().find("body").find(".news-article").height() + 55)) {
					return false;
				}else{
					$('#ty_iframe').height($('#ty_iframe').contents().find("body").find(".news-article").height() + 55); 
				}
	    	}else{
	            if ($('#ty_iframe').height()==($('#ty_iframe').contents().find("body").find(".news-article").height() + 55)) {
					return false;
				}else{
					$('#ty_iframe').height($('#ty_iframe').contents().find("body").find(".news-article").height() + 55); 
	    		}
	    	}
		}else if($('#ty_iframe').attr('src')=='#'){
			return false;
		}else if($('#ty_iframe').length=0){
			clearInterval(iframeit);
		}
		var minH = $(window).height();
		$(".ty_wrapbac").css('min-height',minH+'px');
		$(".ty_wrapbac").height($('#ty_iframe').height() + 70);
		var openH = $('.open-news').height();
		// var wwww = document.body.clientWidth;
		var wwww = $('.ty_wrapbac').width();
		var swww = $(window).width();
        $('.inner-right').css({'margin-left': "470px",'left': wwww/2 +'px'});
        // if (openH<minH) {
        //     var ttnn = $(".ty_wrapbac").height();
        //     if (ttnn>minH) {
        //         if(wwww ==swww) {
        //             $('.inner-right').css('margin-left',"470px");
        //         }else {
        //             $('.inner-right').css('margin-left', "462px");
        //         }
        //     }else{
        //         $('.inner-right').css('margin-left',"470px");
        //     }
        //
        // }else{
        // 	if(wwww ==swww) {
        //         $('.inner-right').css('margin-left',"470px");
        //     }else {
        //         $('.inner-right').css('margin-left', "462px");
        //     }
        // }
	},100);
	$(document).on("click",'.red_new a,.red_new_top a,.red_index_main3IN .picword', function(e){
		ty_public.stopDefault(e);
		$('#ty_iframe').attr('src',$(this).attr('href'));
		$('body').addClass('oh');
		$('.newframe').height("100%").addClass("show");

	});
	
	$('.newframe').on("click",'.close', function(e){
		ty_public.stopDefault(e);
		if ($(this).hasClass('ty_wrapbac')) {
			$(this).parent().removeClass("show");
		}else{
			$(this).parents('.newframe').removeClass("show");
		}
		$('body').removeClass('oh');
	});

	// 
	$('.red_add_more').on("click", function(e){
		ty_public.stopDefault(e);
		var stepMore = 3;
		var nums = parseInt($(".red_new_hide").length);
		if (nums >= stepMore) {
			for (var i = 0; i < stepMore; i++) {
				$(".red_new_hide").eq(0).removeClass('red_new_hide');
			}
		}else if(nums == 0){
			alert("没有更多啦！")
		}else{
			for (var i = 0; i < nums; i++) {
				$(".red_new_hide").eq(0).removeClass('red_new_hide');
			}
		}
	});

	$('.lbtn').click(function(){
		$('.hd .prev').trigger('click')
	})
	$('.rbtn').click(function(){
		$('.hd .next').trigger('click')
	})
	$('.picList img').hover(function(){
		var img1 = $(this).attr('src');
		var img2 = $(this).attr('alt');
		$(this).attr('src',img2);
		$(this).attr('alt',img1);
		// if ($(this).attr('src').indexOf('_hover')<=0) {
		// 	var nSrc = $(this).attr('src');
		// 	$(this).attr('alt',nSrc);
		// 	var mSrcArr =  nSrc.split('.');
		// 	var newSrc = mSrcArr[0]+"_hover."+mSrcArr[1];
		// 	$(this).attr('src',newSrc);
		// }
	})
	$('.picList img').mouseleave(function(){
		var img3 = $(this).attr('src');
		var img4 = $(this).attr('alt');
		$(this).attr('src',img3);
		$(this).attr('alt',img4);
		// $(this).attr('src',$(this).attr('alt'));
	})
	$('.red_index_main2T .tit').click(function(){
		$('.red_index_main2T .tit').removeClass('on');
		$('.red_index_main2_list>div').removeClass('on');
		var index = $('.red_index_main2T .tit').index($(this));
		$(this).addClass('on');
		$('.red_index_main2_list>div').eq(index).addClass('on');
	})
	$('.detialselect').click(function(){
		var index = $('.detialselect').index($(this));
		$('.detialselect').removeClass('on').eq(index).addClass('on');
		$('.detialmain').removeClass('on').eq(index).addClass('on');
		if ($('.detialmain').eq(index).find('.text p').hasClass('mCustomScrollbar')) {
			return false;
		}else{
			$('.detialmain').eq(index).find('.text p').mCustomScrollbar({
				scrollButtons:{
					enable:true
				}
			});
		}
	})
	if(window.parent.document){
		if(window.parent.document.body.clientWidth<1019) {
			$('.news-inner .text span').attr('style','font-size:12px !important')
        }
	}
	if (document.body.clientWidth>=768) {
		fnResize();
		window.addEventListener("resize", function() {
		    fnResize()
		}, false);
		function fnResize(){
		    var weHeight = $('.jidiIn .outer .l').height();
		    $('.jidiIn .outer .middle').height(weHeight);
		}
		$('.jidiIn .m .mIN').click(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.jidiIn .l h4').html($(this).find('h4').html());
			$('.jidiIn .l p').text($(this).find('p').text());
			var indexJidi = $('.jidiIn .m .mIN').index($(this));
            $('.jidiIn .l img').attr('src',jidiArr[indexJidi]);
		});
        $('.jidiIn .m .mIN').eq(0).trigger('click');
		if ($(".detialmains .on .text p").length>0) {
			customs();
		}
		if ($(window).height()<710) {
			$('.red_nav .nav li').css({
				'line-height': '46px',
				'height': '46px'
			})
			$('.red_nav .logo').css('margin','34px 0 20px')
		}
		if ($('.picScroll-left').length>0) {
			jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:5,trigger:"click"});
		}
	}else{
		fnResize();
		window.addEventListener("resize", function() {
		    fnResize()
		}, false);
		function fnResize(){
		    var docWidth = document.documentElement.clientWidth,
		            body = document.getElementsByTagName('html')[0];
		    body.style.fontSize = docWidth / 32 + 'px';
		}

		if ($('.jidiIn').length>0) {
			$('.jidiIn .m .mIN').each(function(){
				var indexdd = $('.jidiIn .m .mIN').index($(this));
				$(this).find('img').attr('src',jidiArr[indexdd]);
			})
		}
		if ($('.picScroll-left').length>0) {
			jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:3,trigger:"click"});
		}

		$('.logo .phone_menu').click(function(){
			$('.red_nav .nav,.red_nav .connect').fadeIn();
			$('.phone_top .close').css('display','inline-block');
			$('.red_nav .nav').addClass('now')
		})
		$('.phone_top .close').click(function(){
			$('.red_nav .nav,.red_nav .connect').fadeOut();
			$('.red_nav .nav').removeClass('now');
			$('.phone_top .close').css('display','none');
		})
		$('.phone_lun_control i').click(function() {
            var indexit = $('.detialselect').index($('.detialselects .on'));
            $('.detialselect').removeClass("on");
            $('.detialmain').removeClass("on");
			if($(this).hasClass('left')){
				if(indexit<=0){
                    $('.detialselect').eq(3).addClass("on");
                    $('.detialmain').eq(3).addClass("on");
				}else{
                    $('.detialselect').eq(indexit-1).addClass("on");
                    $('.detialmain').eq(indexit-1).addClass("on");
                }
			}else if($(this).hasClass('right')){
                if(indexit>=3){
                    $('.detialselect').eq(0).addClass("on");
                    $('.detialmain').eq(0).addClass("on");
                }else{
                    $('.detialselect').eq(indexit+1).addClass("on");
                    $('.detialmain').eq(indexit+1).addClass("on");

                }
			}
        })
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
		var toTop = '.red_index_main1 h2,.red_index_main1 h3,.red_index_main1 h4,.red_index_main2_list a, .jidiIn .middle, .gov .l,.red_intro1 img, .new_intro .pic_list, .time_list li, .pic_text li,.new_intro h2, .red_intro4 p, .intro_xm_text h2, .intro_xm_shop li';
		var toLeft = '.red_index_main1 img, .red_index_main3 h3, .red_index_main5In .l ,.about1Int h3, .jidiIn .l, .red_intro1 h3, .listpic li, .intro_xm_text h3';
		var toRight = '.red_index_main2 .tit, .Enterprise_intr p, .red_index_main5In .r ,.about1Int strong , .jidiIn .r, .red_intro1 p,.red_intro4 h2, .intro_xm_shop h2, .fengcai li';
		var toBottom = '.red_index_main1 p, .red_tit_o, .red_index_main5In .m, .about1Int p, .about1In .red_abouttit, .tob_bannar img,.red_introtit, .wayin, .fengcai h2';
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
