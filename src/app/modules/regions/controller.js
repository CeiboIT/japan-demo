
'use strict';

var regionsCtrl = function() {
	var regions = this;

	function init() {
		console.log("regions controller");
	};

	//INITIALIZING
	init()
};

angular
	.module('regionsModule')
	.controller('regionsCtrl', regionsCtrl)

