
'use strict';


var worksService = function(fireRef, Kutral, $q, $firebaseArray) {

  var service = this;

  var kutral  = new Kutral(fireRef);

  var workSchema = new Kutral.Schema({
      'title': {type: String, indexOn: true},
      'members': [{type: 'ObjectId', ref:'users'}],
      'tasks': [{type: 'ObjectId', ref:'tasks'}],
  });

  var worksDirectory = kutral.model('works', workSchema);

  service.showWorks = function(){
    var worksPromise = $q.defer();

    worksDirectory.find().$asArray(function(data) {
      worksPromise.resolve(data);
    });

    return worksPromise.promise;
  }

  service.getWorkById = function(id){
    var getWorkByIdPromise = $q.defer();
 
    worksDirectory.find({$id:id}, function(data) {
      getWorkByIdPromise.resolve(data);
    });
 
    return getWorkByIdPromise.promise;
  }

  service.createWork = function(work) {
    var workCreationPromise = $q.defer();
    worksDirectory.data = work;
    worksDirectory.create(function(createdWork) {
      workCreationPromise.resolve(createdWork);
    });

    return workCreationPromise.promise;
  };

  service.updateWork = function(dataToUpdate) {
    var updateArticlePromise = $q.defer();
    worksDirectory.data = dataToUpdate;

    worksDirectory.update(function(success) {
      updateArticlePromise.resolve(worksDirectory.data);
    });

    return updateArticlePromise.promise;

  };

  service.checkWorkTitleAvailability = function(name) {
      var titleAvailabilityPromise = $q.defer();
      worksDirectory.find({"name" : name}, function(workData) {
        titleAvailabilityPromise.resolve(!workData)
      });

      return titleAvailabilityPromise.promise;
  };


};


angular.module('worksModule')
  .service('worksService', worksService)
