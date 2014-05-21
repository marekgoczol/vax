$(function(){
	'use strict';

	var Vax = {};

	Vax.VARS = {
		NAV: $('.jsNav')
	};

	Vax.navigation = function($elem) {
		var $trigger = $elem.find('.trigger'),
			$list = $elem.find('ul');

		$trigger.on('click',function(e){
			e.preventDefault();
			$list.toggleClass('open');
		});
	}

	Vax.init = function() {
		var $window = $(window);

        if(this.VARS.NAV.length) {
            this.navigation(this.VARS.NAV);
        }

	};

	Vax.init();

}());
