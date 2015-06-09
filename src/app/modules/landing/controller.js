
'use strict';

var landingCtrl = function($rootScope, $state, regionsService) {
	var landing = this;

	landing.state = $state;

	function init() {
		console.log("landing controller");

		regionsService.createRegion({name_en: 'Hello Kutral'});
	}

	//INITIALIZING
	init()

}

angular
	.module('landingModule')
	.controller('landingCtrl', landingCtrl)
