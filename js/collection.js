$(function(){
	$('#btn1').click(function(){
		$(this).addClass('btn-focus');
		$('#btn2').removeClass('btn-focus');
		$('#content').removeClass('active');
		$('#article').addClass('active');
	});
	$('#btn2').click(function(){
		$(this).addClass('btn-focus');
		$('#btn1').removeClass('btn-focus');
		$('#content').addClass('active');
		$('#article').removeClass('active');
	});
});

