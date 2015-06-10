
'use strict';

angular.module('tasksModule', [])

	.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('app.tasks', {
				url: '/tasks',
				controller : 'tasksCtrl as tasks',
        		templateUrl: 'app/modules/tasks/views/tasks.html',
			})
	})
	