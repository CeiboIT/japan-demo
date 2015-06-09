
'use strict';

var homeCtrl = function() {
	var home = this;

	function init() {
		console.log("home controller");
	};

	//INITIALIZING
	init()
};

angular
	.module('homeModule')
	.controller('homeCtrl', homeCtrl)

