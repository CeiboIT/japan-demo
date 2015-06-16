/**
 * Created by emiliano on 12/06/15.
 */


angular.module('companiesModule', ['firebase', 'fireQuery'])
  .config(function($stateProvider) {
    //No unir con el auth module, ya que esto sera particular para esta solucion.
    $stateProvider
      .state('app.registerCompany', {
        url: '/company/register',
        controller : 'companiesCtrl as register',
        templateUrl: 'app/modules/companies/views/registerCompany.html'
      })
      .state('app.addCompanyInformation', {
        url: '/company/addinfo',
        controller : 'companiesCtrl as information',
        templateUrl: 'app/modules/companies/views/addCompanyInformation.html'
      })
      .state('app.companiesList', {
        url: '/company/list',
        controller : 'companiesCtrl as information',
        templateUrl: 'app/modules/companies/views/companiesList.html'
      })

  })


