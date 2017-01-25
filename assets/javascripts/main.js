;(function($) {
	"use strict";

	$(window).load(function(){
	var portfolioGrid = $('.ba-portfolio-grid');

	portfolioGrid.isotope({
		itemSelector: '.ba-portfolio-grid__item'
	});

	var filterLinks = $('.ba-portfolio-filter a');

	filterLinks.on('click', function(e){
		e.preventDefault();
		var filterClass = $(this).data('filter');
		filterLinks.removeClass('active');
		$(this).addClass('active');

		portfolioGrid.isotope({filter: filterClass})
	});
	})

	$('.ba-slider').slick({
		dots: true
	});

})(jQuery);
