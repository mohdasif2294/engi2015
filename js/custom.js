// jQuery Selections
	var $html = $('html'),
	$container = $('#container'),
	$prompt = $('#prompt'),
	$toggle = $('#toggle'),
	$about = $('#about'),
	$scene = $('#scene');

// Hide browser menu.
	(function() {
		setTimeout(function(){window.scrollTo(0,0);},0);
	})();

// Setup FastClick.
	FastClick.attach(document.body);

	// Add touch functionality.
	if (Hammer.HAS_TOUCHEVENTS) {
		$container.hammer({drag_lock_to_axis: true});
		_.tap($html, 'a,button,[data-tap]');
	}

// Add touch or mouse class to html element.
	$html.addClass(Hammer.HAS_TOUCHEVENTS ? 'touch' : 'mouse');

// Resize handler.
	(resize = function() {
		$scene[0].style.width = window.innerWidth + 'px';
		$scene[0].style.height = window.innerHeight + 'px';
		if (!$prompt.hasClass('hide')) {
			if (window.innerWidth < 600) {
			$toggle.addClass('hide');
		} else {
			$toggle.removeClass('hide');
		}
	}
	})();

	// Attach window listeners.
	window.onresize = _.debounce(resize, 200);
	window.onscroll = _.debounce(resize, 200);

// Pretty simple huh?
	$scene.parallax();

// Check for orientation support.
	setTimeout(function() {
		if ($scene.data('mode') === 'cursor') {
			$prompt.removeClass('hide');
			if (window.innerWidth < 600) $toggle.addClass('hide');
				$prompt.on('click', function(event) {
				$prompt.addClass('hide');
					if (window.innerWidth < 600) {
						setTimeout(function() {
							$toggle.removeClass('hide');
						},1200);
					}
			});
		}
	},1000);


	$('document').ready(function() {
		'use strict'; 
		$('.countdown').final_countdown({
			'start': 1362139200,
			'end': 1388461320,
			'now': 1387461319        
		});
		$('.stationary img').each(function(fadeInDiv) {
			$(this).delay((fadeInDiv+1) * 500).fadeIn(500*fadeInDiv);
		});
	});

   