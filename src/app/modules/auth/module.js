/**
 * Created by emiliano on 04/02/15.
 */
angular.module('lixilApp.auth',['ngStorage'])
  .config(['$stateProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('auth', {
        abstract:true,
        url:'/access',
        templateUrl:'../modules/auth/views/accessAbstract.html',
        controller: 'bgrdCtrl as bgrdCtrl'
      })

      .state('auth.login',{
        url: '/login',
        templateUrl: '../modules/auth/views/login.html',
        controller: 'authCtrl as authCtrl'
      })

      .state('auth.signup', {
        url: '/signup',
        templateUrl: '../modules/auth/views/signup.html',
        controller: 'authCtrl as authCtrl'
      })

      .state('auth.password', {
        url: '/password',
        templateUrl: '../modules/auth/views/password.html',
        controller: 'authCtrl as authCtrl'
      })

      .state('auth.register', {
        url: '/register',
        templateUrl: '../modules/auth/views/register.html',
        controller: 'authCtrl as authCtrl'
      });
  }]);
