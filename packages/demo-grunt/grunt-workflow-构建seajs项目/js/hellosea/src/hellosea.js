define(function(require, exports, module) {

	var util = require('../src/util'),
		$ = require('jquery');
	setInterval(function() {
		$('#box').css('background-color',util.randomColor());
	}, 1500);

});