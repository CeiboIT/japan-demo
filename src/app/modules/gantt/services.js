
'use strict';

var ganttService = function(fireRef, Kutral, $q, $firebaseArray) {

  var service = this;

  var kutral  = new Kutral(fireRef);

  var ganttSchema = new Kutral.Schema({
        // ????
  });

  var ganttDirectory = kutral.model('gantt', ganttSchema);

  service.showGantt = function(){
    var ganttPromise = $q.defer();

    ganttDirectory.find().$asArray(function(data) {
      ganttPromise.resolve(data);
    });

    return ganttPromise.promise;
  }

  service.getGanttById = function(id){
    var getGanttByIdPromise = $q.defer();

    ganttDirectory.find({$id:id}, function(data) {
      getGanttByIdPromise.resolve(data);
    });

    return getGanttByIdPromise.promise;
  }

  service.createGantt = function(gantt) {
    var ganttCreationPromise = $q.defer();
    ganttDirectory.data = gantt;
    ganttDirectory.create(function(createdGantt) {
      ganttCreationPromise.resolve(createdGantt);
    });

    return ganttCreationPromise.promise;
  };

  service.updateGantt = function(dataToUpdate) {
    var updateArticlePromise = $q.defer();
    ganttDirectory.data = dataToUpdate;

    ganttDirectory.update(function(success) {
      updateArticlePromise.resolve(ganttDirectory.data);
    });

    return updateArticlePromise.promise;

  };

};

angular.module('ganttModule')
  .service('ganttService', ganttService)
