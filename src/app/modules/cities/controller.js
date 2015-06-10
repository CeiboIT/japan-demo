
'use strict';

var citiesCtrl = function() {
	var cities = this;

	function init() {
		console.log("cities controller");
	};

	//INITIALIZING
	init()
};

angular
	.module('citiesModule')
	.controller('citiesCtrl', citiesCtrl)

