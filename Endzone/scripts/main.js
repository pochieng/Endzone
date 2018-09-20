$(document).ready( function () {
	

	
	
	// Fixed navigation
	// http://codereview.stackexchange.com/questions/49285/css-and-html5-for-this-fixed-header-on-scroll
	var $window = $(window);
	var nav = $('body');
	if ($window.scrollY >= 150) {
		nav.addClass('fixed-header');
	}
	$window.scroll(function(){
	    if ($window.scrollTop() >= 150) {
	       nav.addClass('fixed-header');
	    }
	    else {
	       nav.removeClass('fixed-header');
	    }
	});
	
	$('.megamenu').hover(
		function () {
			$(this).parent().addClass('hover');
		}, 
		function () {
			$(this).parent().removeClass('hover');
		}
	);



	
	
	
	// Check availability widget
	$('#check-avail-toggle').on('click', function () {
		$('#check-avail-form').slideToggle();
		return false;
	});
		
	var today = new Date();
	var tomorrow = new Date();
	tomorrow.setDate( today.getDate() + 1 );
	
	$("#arrive").datepicker({
		minDate: new Date(),
		dateFormat: "dd/mm/yy",
		onSelect: function (date) {
    		// Desktop
			var dt1 = $('#arrive').datepicker('getDate');
			var dt2 = $('#depart').datepicker('getDate');
			if (dt1 > dt2) {
				var dt1b = dt1;
				dt1b.setDate( dt1.getDate() + 1 );
				$('#depart').datepicker('setDate', dt1b);
			}
			$('#depart').datepicker('option', 'minDate', dt1);
		}
	});
	$('#depart').datepicker({
		dateFormat: "dd/mm/yy",
		minDate: $('#arrive').datepicker('getDate'),
		onClose: function () {
			var dt1 = $('#arrive').datepicker('getDate');
			var dt2 = $('#depart').datepicker('getDate');
			//check to prevent a user from entering a date below date of dt1
			if (dt2 <= dt1) {
				var minDate = $('#depart').datepicker('option', 'minDate');
				$('#depart').datepicker('setDate', minDate);
			}
		}
	});
	
	
	
	
	// Heading keylines
	$('.main-content h1, .landing-item-text h2, .left-content h3, .one-column h3').each( function () {
		if ( $(this).text() != '' ) {
			$(this).after( '<div class="divider" style="width: ' + Math.floor($(this).width() * 0.7) + 'px;"></div>' );
		}
	});
	
	
	
	// Sliders 
	$('.main-slider').flexslider({
		directionNav: true,
		controlNav: false
	});
	
	
	
	
	
	// Homepage rollover content 
	$('.home-rollover, .home-center-rollover').on('mouseenter', function () {
		$(this).addClass('hover');
	});
	$('.home-rollover, .home-center-rollover').on('mouseleave', function () {
		$(this).removeClass('hover');
	});
	
	
	
	
	
	// Mobile
	$('#mobile-nav-open').on('click', function () {
    	$('#mobile-nav').show();
    	setTimeout( function () {
	    	$('#mobile-nav').addClass('open');
    	}, 100);
    	return false;
	});
	$('#mobile-nav-close').on('click', function () {
		$('#mobile-nav').removeClass('open');
		setTimeout( function () {
    		$('#mobile-nav').hide(); // Hide the menu when closed, otherwise it makes the page longer
        }, 500);
		return false;
	});
	
	$('#mobile-check-avail-toggle').on('click', function () {
		$('#mobile-check-avail-form').slideToggle();
		return false;
	});
	
	$("#mobile-arrive").datepicker({
		minDate: new Date(),
		dateFormat: "dd/mm/yy",
		onSelect: function (date) {
    		// Desktop
			var dt1 = $('#mobile-arrive').datepicker('getDate');
			var dt2 = $('#mobile-depart').datepicker('getDate');
			if (dt1 > dt2) {
				var dt1b = dt1;
				dt1b.setDate( dt1.getDate() + 1 );
				$('#mobile-depart').datepicker('setDate', dt1b);
			}
			$('#mobile-depart').datepicker('option', 'minDate', dt1);
		}
	});
	$('#mobile-depart').datepicker({
		dateFormat: "dd/mm/yy",
		minDate: $('#mobile-arrive').datepicker('getDate'),
		onClose: function () {
			var dt1 = $('#mobile-arrive').datepicker('getDate');
			var dt2 = $('#mobile-depart').datepicker('getDate');
			//check to prevent a user from entering a date below date of dt1
			if (dt2 <= dt1) {
				var minDate = $('#mobile-depart').datepicker('option', 'minDate');
				$('#mobile-depart').datepicker('setDate', minDate);
			}
		}
	});

	
	
	
	
	
	

});



                