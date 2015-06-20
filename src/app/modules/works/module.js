
'use strict';

angular.module('worksModule', [])

	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('app.registerWork', {
				url: '/work/register/:companyId',
				controller : 'worksCtrl as register',
				templateUrl: 'app/modules/companies/views/registerWork.html',
				resolve: {
					param1 : function(companiesService, $stateParams) {
						var companyId = $stateParams.companyId;
						return companiesService.getCompanyById(companyId)
					}
				}
			})
			.state('app.listWorks', {
				url: '/work/list/:companyId',
				controller : 'worksCtrl as list',
	        	templateUrl: 'app/modules/works/views/listWorks.html',
				resolve: {
					param1 : function(companiesService, $stateParams) {
						var companyId = $stateParams.companyId;
						return companiesService.getCompanyById(companyId)
					}
				}
			})
			.state('app.updateWork', {
				url: '/work/update/:workId',
				controller : 'worksCtrl as update',
				templateUrl: 'app/modules/companies/views/updateWork.html',
				resolve: {
					param1 : function(companiesService, $stateParams) {
						var workId = $stateParams.workId;
						return worksService.getWorkById(workId)
					}
				}
			})
	})
	