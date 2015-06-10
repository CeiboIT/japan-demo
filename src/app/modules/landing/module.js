
'use strict';

angular.module('landingModule', [])

	.config(function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('app', {
				abstract: true,
				controller : 'landingCtrl as landing',
        		templateUrl: 'app/modules/landing/views/landing.html',
			})

	})

	.directive('jpnLoader', function() {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'app/modules/landing/views/loader.html',
		};
	})

	.directive('jpnHeader', function() {
		return {
			restrict: 'E',
			transclude: true,
			controller: 'navBarCtrl as nav',
			scope: {categories: '='},
			templateUrl: 'app/modules/landing/views/header.html',
		};
	})

	.directive('jpnFooter', function() {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'app/modules/landing/views/footer.html',
		};
	})

	.directive('jpnFooterIndicator', function() {
		return {
			restrict: 'E',
			transclude: true,
			templateUrl: 'app/modules/landing/views/footerIndicator.html',
		};
	})