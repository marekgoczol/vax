$(function(){
	'use strict';

	var Vax = {};

	Vax.VARS = {
		NAV: $('.jsNav'),
		HOME_CAROUSEL: $('.jsCarousel'),
		DROPDOWN: $('.jsDropdown'),
		CALC_GRID: $('.jsEqualCalc>div')
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

	Vax.equalHeight = function($elem){
		var $boxes = $elem,
			boxesHeights = [],
			equalHeight;

		// get boxes heights
		$boxes.css({height:''});
		$boxes.each(function () {
			boxesHeights.push($(this).outerHeight());
		});

		equalHeight = Math.max.apply(Math, boxesHeights);
		// set boxes height to the value of the talles box
		if (equalHeight > 0) {
			$boxes.each(function () {
				$(this).css("height", equalHeight);
			});
		}
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
        if(this.VARS.CALC_GRID.length) {
        	setTimeout(function(){
        		Vax.equalHeight(Vax.VARS.CALC_GRID);
        	},300);

        }

	};

	Vax.init();

}());
