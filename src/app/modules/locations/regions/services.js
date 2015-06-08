/**
 * Created by emiliano on 08/06/15.
 */
var regionsService = function(fireRef, Kutral) {
  var kutral = new Kutral(fireRef);

  var service = this;

  var regionSchema = {
    "name_en" : {type: String}
  }

  var regionModel = kutral.model('regions', regionSchema);


  service.createRegion = function(regionData, callback) {

    regionModel.create(regionData, function() {
      callback()
    })

  };




};


angular.module('locationsModule.regions')
  .service('regionsService', regionsService);
