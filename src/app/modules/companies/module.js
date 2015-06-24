
'use strict';

angular.module('companiesModule', [])

    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app.registerCompany', {
                url: '/company/register',
                controller : 'companiesCtrl as register',
                templateUrl: 'app/modules/companies/views/registerCompany.html',
                resolve: {
                    param1: function() {
                        return null
                    }
                }
            })
            .state('app.listCompanies', {
                url: '/company/list',
                controller : 'companiesCtrl as list',
                templateUrl: 'app/modules/companies/views/listCompanies.html',
                resolve: {
                    param1 : function(companiesService) {
                        return companiesService.showCompanies()
                    }
                }
            })
            .state('app.updateCompany', {
                url: '/company/update/:companyId',
                controller : 'companiesCtrl as update',
                templateUrl: 'app/modules/companies/views/updateCompany.html',
                resolve: {
                    param1 : function(companiesService, $stateParams) {
                        var companyId = $stateParams.companyId;
                        return companiesService.getCompanyById(companyId)
                    }
                }
            })

    })


