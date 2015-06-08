/**
 * Created by emiliano on 08/06/15.
 */


var landingController = function(regionsService) {

  regionsService.createRegion({name_en: 'Hello Kutral'});

}



angular.module('landing')
  .controller('landingController', landingController)
