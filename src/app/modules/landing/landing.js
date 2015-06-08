/**
 * Created by emiliano on 06/06/15.
 */
angular.module('ceibo-mukaeutsu.landing', [])
  .config(function($stateProvider) {
    $stateProvider
      .state('landing', {
        url: '/',
        template: 'app/modules/landing/landing.html'
      });
  });
