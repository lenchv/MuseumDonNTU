$(document).ready( function () {
	$('#main-area #linear li').hover( 
		function (e) {
			var el = $(this).children(':first-child');
			el.css({top:'0%', height:'100%', width: '100%'});
			$(this).css({width:'1em'});
			var percHi;
			var percLo;
			var elemNext = $(this).next();
			var elemPrev = $(this).prev();
			for (var i = 10; i < 60; i += 10) {
				percHi = 100 - i - 2 + '%';
				percLo = i + '%';
				elemNext.children(':first-child').css({top:percLo, height:percHi, width: percHi});
				elemPrev.children(':first-child').css({top:percLo, height:percHi, width: percHi});
				elemNext.css({width:'0.5em'});
				elemPrev.css({width:'0.5em'});
				elemNext = elemNext.next();
				elemPrev = elemPrev.prev();
			}
			/*var els = $(this).parent().children().children(':first-child');
			for (var i = el_ind; i > (((el_ind-10) > 0)? el_ind - 10 : 0); i--) {
				var exp = 0.9 /(el_ind - i);
				var h = parseInt(el.height()*exp);
				//els.eq(i).css('top' , 100-parseInt((h/60)*100) + '%');
				els.eq(i).animate({top : 100 - parseInt((h/60)*100) + '%' , height: h + 'px'}, 250); 
			}*/
		},
		function () {
			var el = $(this).children(':first-child');
			//$(this).parent().children().children(':first-child').css({top:'60%', height:'40%'});
			//el.animate({top:'60%'}, 100);
			el.css({top:'60%', height:'40%', width: '50%'});
			$(this).css({width:'1px'});
			var elemNext = $(this).next();
			var elemPrev = $(this).prev();
			for (var i = 10; i < 60; i += 10) {
				elemNext.children(':first-child').css({top:'60%', height:'40%', width: '50%'});
				elemNext.css({width:'1px'});
				elemPrev.children(':first-child').css({top:'60%', height:'40%', width: '50%'});
				elemPrev.css({width:'1px'});
				elemNext = elemNext.next();
				elemPrev = elemPrev.prev();
			}
		});
});