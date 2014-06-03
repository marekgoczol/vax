$(function(){
	'use strict';

	var Vax = {};

	Vax.VARS = {
		NAV: $('.jsNav'),
		HOME_CAROUSEL: $('.jsCarousel'),
		DROPDOWN: $('.jsDropdown'),
		CALC_GRID: $('.jsEqualCalc>div'),
		COLLAPSABLE_GROUP: $('.jsCollapsable'),
		CHECKBOX: $('.jsCheckbox'),
		PRICING: $('.jsPricing > div')
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

	Vax.collapse = function($elem) {

		$elem.each(function(i,v){
			var $this = $(v),
				$group = $this.find('>.form_items'),
				$header = $this.find('.heading');

			$header.on('click', function(e){
				console.log('sads');
				e.preventDefault();
				if($this.hasClass('collapsed')) {
					$this.removeClass('collapsed');
					$group.slideDown(300);
				} else {
					$this.addClass('collapsed');
					$group.slideUp(300);
				}
			});
		});
	};

	Vax.checkbox = function($elem) {
		$elem.uniform();
	}

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
        if(this.VARS.COLLAPSABLE_GROUP.length) {
        	this.collapse(this.VARS.COLLAPSABLE_GROUP);
        }
        if(this.VARS.CHECKBOX.length) {
        	this.checkbox(this.VARS.CHECKBOX);
        }
        if(this.VARS.PRICING.length) {
        	this.equalHeight(this.VARS.PRICING);
        }

	};

	Vax.init();

}());
