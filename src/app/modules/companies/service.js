/**
 * Created by emiliano on 12/06/15.
 */


var companiesService = function(fireRef, Kutral, $q) {

  var service = this;

  var kutral  = new Kutral(fireRef);

  var companiesDirectory = kutral.model('companies', {});

  service.createCompany = function(companyName) {
    var companyCreationPromise = $q.defer();
    companiesDirectory.create({name : companyName, members: []}, function(createdCompany) {
      companyCreationPromise.resolve(createdCompany);
    });

    return companyCreationPromise.promise
  };

  service.updateCompany = function(dataToUpdate) {
    var updateArticlePromise = $q.defer();
    companiesDirectory.data = dataToUpdate;

    companiesDirectory.update(function(success) {
      updateArticlePromise.resolve(companiesDirectory.data);
    });

    return updateArticlePromise.promise;

  }


};


angular.module('companiesModule')
  .service('companiesService', companiesService)
