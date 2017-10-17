// 圆角按钮切换
$(function(){
	$('#btn1').click(function(){
		$(this).addClass('btn-focus');
		$('#btn2').removeClass('btn-focus');
		$('#content1').removeClass('active');
		$('#content').addClass('active');
	});
	$('#btn2').click(function(){
		$(this).addClass('btn-focus');
		$('#btn1').removeClass('btn-focus');
		$('#content1').addClass('active');
		$('#content').removeClass('active');
	});
});

// 日期导航栏
$(function(){
	$('#search').click(function(){
		if ($(this).css('right') == '0px') {
			$(this).animate({right:'85px'})
			$('#date').animate({right:'0px'})
		}
		else{
			$(this).animate({right:'0px'})
			$('#date').animate({right:'-87px'})
		}
	});
});

// 个人页
$(function(){
	$('#touxiang').click(function(){
		$('#center').animate({left:'0px'})
		$('#mask2').fadeIn()
		$('#main').animate({left:'287px'})
	});

	$('#mask2').click(function(){
		$('#center').animate({left:'-288px'})
		$('#mask2').fadeOut()
		$('#main').animate({left:'0px'})
	});
});


