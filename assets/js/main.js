$(function(){
	'use strict';

	var Vax = {};

	Vax.VARS = {
		NAV: $('.jsNav'),
		HOME_CAROUSEL: $('.jsCarousel'),
		DROPDOWN: $('.jsDropdown')
	};

	Vax.navigation = function($elem) {
		var $trigger = $elem.find('.trigger'),
			$list = $elem.find('ul');

		$trigger.on('click',function(e){
			e.preventDefault();
			$list.toggleClass('open');
		});
	};

	Vax.homeCarousel = function($elem) {
		$elem.cycle({
			slides: '>div',
			next: '.next',
			prev: '.prev',
			pager: '.jsPager'
		});
	};

	Vax.dropdown = function($elem) {
		$elem.each(function(i,v){
			var $this = $(v);
			console.log($this);

			$this.selectbox({
				effect: "fade"
			});
		});
	};

	Vax.init = function() {
		var $window = $(window);

        if(this.VARS.NAV.length) {
            this.navigation(this.VARS.NAV);
        }
        if(this.VARS.HOME_CAROUSEL.length) {
        	this.homeCarousel(this.VARS.HOME_CAROUSEL);
        }
        if(this.VARS.DROPDOWN.length) {
        	this.dropdown(this.VARS.DROPDOWN);
        }

	};

	Vax.init();

}());
