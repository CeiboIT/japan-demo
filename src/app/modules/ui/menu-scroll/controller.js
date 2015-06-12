
'use strict';

var menuScrollCtrl = function() {
	var menu = this;

	function init() {
		console.log("menu scroll controller");
	};

	//INITIALIZING
	init()
};

angular
	.module('ceibo.ui.material.side-menu')
 	.controller('menuScrollCtrl', menuScrollCtrl)
