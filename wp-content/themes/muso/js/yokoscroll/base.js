/*===============================================================

	load event

===============================================================*/

$(window).on('load', function(){

  var scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'horizontal',
    multiplier: 1, // スクロールの速度（値が小さいほど遅くなる）
    horizontalGesture: true
  });
  
 
  
});


/*===============================================================

	resize event

===============================================================*/

$(window).on('load resize', function(){
	
	w_width = $(window).width();
	w_height = $(window).height();
	header_h = $('.contents-header').outerHeight();

	
	if( w_width < 769 ) {
		$('.contents-main').attr('style','');
    
		// set gnav triggers
    $('.gnav').each(function(index){
      if($(document).find('.gnav-trigger').length < 1) {
        $('.gnav').before('<div class="gnav-trigger"><span class="label"></span></div>');
      }
    });	
	}
	else {
		$('.gnav.active').remove('active');
		modal_close();
    
		if($(document).find('.gnav-trigger').length > 0) {   
			$(document).find('.gnav-trigger:not(.hold)').remove();
		}
    
	}
	
});



/*===============================================================

	gnav

===============================================================*/

$(document).on('click', '.gnav-trigger', function(){
	if(!$(document).find('.gnav').hasClass('active')) {
		
		modal_close();
    window_lock();
		$(document).find('.gnav').addClass('active');
		$(this).addClass('active');
    $('.contents-wrapper').addClass('modal-gnav');
		
	}
	else {
		modal_close();	
	}
});


$(document).on('click', '.gnav .list .parent', function() {
  
  w_width = $(window).width();
	if(w_width < 769 ) {
    if(!$(this).hasClass('active')) {
      $(this).addClass('active');
    }
    else {
      $(this).removeClass('active');
    }
  }
  
});


/*===============================================================

	# anchor

===============================================================*/


$(document).on('click', 'a[href*="#"]', function() {
	
	delay = 0;
  	header_h = 0;
  	var speed = 400;
  	var href= $(this).attr("href");
  	name = href.replace('#', '');
  	target = $(href == "#" || href == "" ? 'html' : href);

	w_width = $(window).width();
	if(w_width < 769 ) {
		modal_close();
		$('html,body').attr('style','');
		$('html,body').scrollTop(scroll_top);
      
      	//setTimeout(function(){
          header_h = $('.contents-header').height();
          position = target.offset().top - header_h + 100;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
        //},40);
	}
  else {

  }
  

});


/*===============================================================

	modal

===============================================================*/

/*---------------------------------------------------------------
	window lock
---------------------------------------------------------------*/

function window_lock() {
	$('html').css({'position':'fixed','width':'100%','top':-$(window).scrollTop()});
}

function window_default() {
	window_style = $('html').attr('style');
	
	if(typeof(window_style) != "undefined") {
		scroll_top = Math.abs(parseInt($('html').css('top')));
		if(scroll_top>=0) {
			$('html').attr('style','');
			$(window).scrollTop(scroll_top);
		}
	}
}


/*---------------------------------------------------------------
	modal close
---------------------------------------------------------------*/

function modal_close() {
	window_default();
	$(document).find('.gnav').removeClass('active');
	$(document).find('.gnav-trigger').removeClass('active');
  
    $('[class^="modal-"]').remove();
    $('.contents-wrapper').removeClass('modal');
    $('.contents-wrapper').removeClass('modal-gnav');
}

$(document).on('click', '.modal-bg, .modal-close, .gnav-close', function() {
	modal_close();
});

