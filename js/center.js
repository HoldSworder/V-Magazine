$(function(){
	$('#menu').click(function(){
		if ($('.del').css('display')=='none') {
			$('.del').fadeIn()
		} 
		else {
			$('.del').fadeOut()
		}
	});
});

$(function(){
	$('.del').click(function(){
		$(this).parent().fadeToggle()
	});
});

// 点赞
$(function(){
	$('.good').click(function(){
		if ($(this).attr('src')=='images/点赞.svg') {
			$(this).attr('src','images/svg/留言板/点赞 (1).svg');
			$(this).siblings('.add1').slideToggle();
		} 
		else {
			$(this).attr('src','images/点赞.svg');
			$(this).siblings('.add1').slideToggle();
		}
	});
});

// 导航菜单
$(function(){
	$('.menu').click(function(){
		$('#nav-menu').slideToggle()
	});
});

$(function(){
	$('#mineImg,#mineP,#mineImg2').click(function(){
		if ($('#fold').css('display')=='none') {
			$('#fold').slideToggle()
			$('#mineImg2').removeClass('transform')
		} 
		else {
			$('#fold').slideToggle()
			$('#mineImg2').addClass('transform')
		}
	});
});


// 收藏

$(function(){
	function like(val1,val2,src1,src2){
		val1.click(function(){
			if (val2.attr('src') == src1) {
				val2.attr('src',src2) 
			} 
			else {
				val2.attr('src',src1)
			}
		});
	};

	var val1 = $('#navCol');
	var src1 = 'images/svg/菜单页/收藏.svg';
	var src2 = 'images/星.svg';
	var val2 = $('#colImg');

	like(val1,val2,src1,src2);
});