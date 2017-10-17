
// 左侧目录栏
$(function(){
	$('#catalog').click(function(){
		if ($('#menuPop').css('left') == '0px') {
			$('#menuPop').animate({'left':'-75%'})
			$(this).animate({'left':'0px'})
			$('#mask').fadeOut()
		} 
		else {
			$('#menuPop').animate({'left':'0px'})
			$(this).css({'z-index':'2','color':'white','background':'white'}).animate({'left':'75%' })
			$('#mask').fadeIn()
		}
	});
});

// 分享弹窗
$(function(){
	$('#share').click(function(){
		$('#sharePop').slideToggle()
	});

	$('#cancel').click(function(){
		$('#sharePop').slideToggle()
	});
});

// 收藏

// $(function(){
// 	$('#like').click(function(){
// 		if ($(this).attr('src')=='images/心.svg') {
// 			$(this).attr('src','images/svg/文字内容页/收藏.svg') 
// 		} 
// 		else {
// 			$(this).attr('src','images/心.svg')
// 		}
// 	});
// })





$(function(){
	
	function like(val,src1,src2){
	val.click(function(){
		if ($(this).attr('src') == src1) {
			$(this).attr('src',src2) 
		} 
		else {
			$(this).attr('src',src1)
		}
	});
};

	var src1 = 'images/心.svg';
	var src2 = 'images/svg/文字内容页/收藏.svg';
	var val = $('#like')

	like(val,src1,src2);
});

var isMobile=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
var events={
	touchStart:isMobile?"touchstart":"mousedown",
	touchMove:isMobile?"touchmove":"mousemove",
	touchEnd:isMobile?"touchend":"mouseup"
};
window.onload=function () {
	var epubReader=document.getElementById("epub-reader");
	var je=$(epubReader);
	je.height(window.innerHeight-90);
	var mask=document.createElement("div");
	mask.className="content-mask";
	var book = window.ePub("http://123.56.16.245:3000/test.epub", {
		restore: true
	});
	book.renderTo(epubReader);
	book.on('book:ready',function () {
		epubReader.appendChild(mask)
	});
	var moveHandler,changeTime;
	mask.addEventListener(events.touchStart,function (e) {
		var x1=isMobile?e.touches[0].clientX:e.clientX;
		var t1=new Date().getTime();
		mask.addEventListener(events.touchMove,moveHandler=function (ev) {
			var x2=isMobile?ev.touches[0].clientX:ev.clientX,t2=new Date().getTime();
			var deltaX=x2-x1,deltaT=t2-t1;
			if(Math.abs(deltaX/deltaT)>0.75){
				if(new Date().getTime()-changeTime<500){
					return
				}
				deltaX>0?book.prevPage():book.nextPage();
				changeTime=new Date().getTime();
			}
		})
	});
	window.addEventListener(events.touchEnd,function () {
		mask.removeEventListener(events.touchMove,moveHandler)
	});
	function init() {
		var header = $(".top"),
			footer = $(".footer"),
			catalogBtn = $(".catalog"),
			flip = $(".flip"),
			timer,
			shown = true;

		function hides() {
			if (!shown) {
				return
			}
			shown = false;
			header.animate({top: -40});
			footer.animate({bottom: -40});
			catalogBtn.animate({left: -30});
			flip.animate({right: -35});
			je.animate({
				marginTop: 30
			});

		}

		function shows() {
			if (shown) {
				return
			}
			shown = true;
			header.stop();
			footer.stop();
			catalogBtn.stop();
			flip.stop();
			header.animate({top: 0});
			footer.animate({bottom: 0});
			catalogBtn.animate({left: 0});
			flip.animate({right: 0});
			je.animate({
				marginTop: 45
			})
		}

		$(".content-mask").on("click", function () {
			clearTimeout(timer);
			shows();
			timer = setTimeout(function () {
				hides()
			}, 4000)
		});
		setTimeout(function () {
			hides();
		}, 500)
	}

	$('#confirm').click(function(){
		$('#mask,#pay').hide();
		init()
	});
};

