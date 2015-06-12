/**
 * Created by emiliano on 12/06/15.
 */


angular.module('companiesModule', [])
  .config(function($stateProvider) {
    //No unir con el auth module, ya que esto sera particular para esta solucion.
    $stateProvider
      .state('auth.registerCompany', {
        url: '/company/register',
        controller : 'companyRegisterCtrl as register',
        templateUrl: 'app/modules/companies/views/registerCompany.html'
      })

  })


