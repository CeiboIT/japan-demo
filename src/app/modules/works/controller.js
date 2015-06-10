
'use strict';

var worksCtrl = function() {
	var works = this;

	function init() {
		console.log("works controller");
	};

	//INITIALIZING
	init()
};

angular
	.module('worksModule')
	.controller('worksCtrl', worksCtrl)

