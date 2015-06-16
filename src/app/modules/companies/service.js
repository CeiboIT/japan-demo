/**
 * Created by emiliano on 12/06/15.
 */


var companiesService = function(fireRef, Kutral, $q, $firebaseArray) {

  var service = this;

  var kutral  = new Kutral(fireRef);

  var companySchema = new Kutral.Schema({
      'title': {type: String, indexOn: true},
      'owner': {type: 'ObjectId', ref:'users'},
      'members': [{type: 'ObjectId', ref:'users'}]
  });

  var companiesDirectory = kutral.model('companies', companySchema);

  service.showCompanies = function(){
    var companiesPromise = $q.defer();

    companiesDirectory.find().$asArray(function(data) {
      companiesPromise.resolve(data);
    });

    return companiesPromise.promise;
  }

  service.createCompany = function(companyName, owner) {
    var companyCreationPromise = $q.defer();
    companiesDirectory.data = {name : companyName, owner: owner,members: []}
    companiesDirectory.create(function(createdCompany) {
      companyCreationPromise.resolve(createdCompany);
    });

    return companyCreationPromise.promise;
  };

  service.updateCompany = function(dataToUpdate) {
    var updateArticlePromise = $q.defer();
    companiesDirectory.data = dataToUpdate;

    companiesDirectory.update(function(success) {
      updateArticlePromise.resolve(companiesDirectory.data);
    });

    return updateArticlePromise.promise;

  };

  service.checkCompanyTitleAvailability = function(name) {
      var titleAvailabilityPromise = $q.defer();
      companiesDirectory.find({"name" : name}, function(companyData) {
        titleAvailabilityPromise.resolve(!companyData)
      });

      return titleAvailabilityPromise.promise;
  };




};


angular.module('companiesModule')
  .service('companiesService', companiesService)
