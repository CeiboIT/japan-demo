
'use strict';

var tasksCtrl = function() {
	var tasks = this;

	function init() {
		console.log("tasks controller");
	};

	//INITIALIZING
	init()
};

angular
	.module('tasksModule')
	.controller('tasksCtrl', tasksCtrl)

