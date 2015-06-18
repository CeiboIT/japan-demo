/**
 * Created by emiliano on 12/06/15.
 */

angular.module('companiesModule', ['firebase', 'fireQuery'])
  .config(function($stateProvider, $urlRouterProvider) {
    //No unir con el auth module, ya que esto sera particular para esta solucion.
    $stateProvider
      .state('app.registerCompany', {
        url: '/company/register',
        controller : 'companiesCtrl as register',
        templateUrl: 'app/modules/companies/views/registerCompany.html',
        resolve: {
          param1 : function() {
            return null
          }
        }
      })
      .state('app.companiesList', {
        url: '/company/list',
        controller : 'companiesCtrl as list',
        templateUrl: 'app/modules/companies/views/companiesList.html',
        resolve: {
          param1 : function(companiesService) {
            return companiesService.showCompanies()
          }
        }
      })
      .state('app.addCompanyInformation', {
        url: '/company/addinfo/:companyId',
        controller : 'companiesCtrl as information',
        templateUrl: 'app/modules/companies/views/addCompanyInformation.html',
        resolve: {
          param1 : function(companiesService, $stateParams) {
            var companyId = $stateParams.companyId;
            return companiesService.getCompanyById(companyId)
          }
        }
      })

  })


