 $(document).ready(function () {
 	// 事件操作
 	$('#search-inp').on('input', function () {

 		$('.for-onload').slideUp(300);
 		$('.for-search').slideDown(300);
 		$('.for-search li').remove();
 		var text = $(this).val();

 		if (text == '') {
 			$('.for-search').slideUp(300);
 			$('.for-onload').slideDown(300);
 		}


 		$('.for-onload li').each(function () {
 			var name = $(this).find('.name').text();
 			var newList = $(this).clone(true);

 			if (name.indexOf(text) >= 0) {
 				$('.for-search ul').append(newList);
 			}
 		})
 	})

 	$('.ty-disease-list li').on('click', function () {
 		var index = $('.ty-disease-list li').index($(this));
 		$('.ty-disease-list li').removeClass('active').eq(index).addClass('active');
 		$('.for-onload ul').removeClass('active').eq(index).addClass('active');
 	})

 	var number = Number($('#number span').text());
 	var warp = $('#progesss');
 	//  设置为<0.3(10%)，<=0.3-0.6(30%)，0.6-1(40%)，1(50%)，1-1.3(60%)，(1.3-2)70%，>2(90%)，
 	if (number < 0.3) {
 		warp.addClass('style-1');
 	}
 	if (0.6 > number && number >= 0.3) {
 		warp.addClass('style-2');
 	}
 	if (1 > number && number >= 0.6) {
 		warp.addClass('style-3');
 	}
 	if (number == 1) {
 		warp.addClass('style-4');
 	}
 	if (1.3 > number && number >= 1) {
 		warp.addClass('style-5');
 	}
 	if (2 > number && number >= 1.3) {
 		warp.addClass('style-6');
 	}
 	if (number >= 2) {
 		warp.addClass('style-7');
	 }


	 if($('.table-body li').length && $('.table-body li').length > 4){
		$('.table-div').addClass('scroll-add')
	 }
 });