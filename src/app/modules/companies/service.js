
'use strict';

var companiesService = function(fireRef, Kutral, $q, $firebaseArray) {

  var service = this;

  var kutral  = new Kutral(fireRef);

  var companySchema = new Kutral.Schema({
      'title': {type: String, indexOn: true},
      'owner': {type: 'ObjectId', ref:'users'},
      'works': [{type: 'ObjectId', ref:'works'}],
      'members': [{type: 'ObjectId', ref:'users'}],
  });

  var companiesDirectory = kutral.model('companies', companySchema);

  service.showCompanies = function(){
    var companiesPromise = $q.defer();
    
    companiesDirectory.find().$asArray(function(data) {     
      companiesPromise.resolve(data);
    });

    return companiesPromise.promise;
  }



/*
    service.searchProducts = function(title, selectedCategorie){
      var searchProductsPromise = $q.defer();
      instantiateModels().then(function() {
        publishedProducts.match({$and: [{"title":title}]}).populate("categories", function(data) {

          for (var key in data) {
            if (data.hasOwnProperty(key)) {
              data[key].$id = key;
            }
          }
          
          searchProductsPromise.resolve(resultsToArray(data));
        });
      })
      return searchProductsPromise.promise;
    }
*/




  service.getCompanyById = function(id){
    var getCompanyByIdPromise = $q.defer();
 
    companiesDirectory.find({$id:id}, function(data) {
      getCompanyByIdPromise.resolve(data);
    });
 
    return getCompanyByIdPromise.promise;
  }

  service.createCompany = function(company) {
    var companyCreationPromise = $q.defer();
    companiesDirectory.data = company;
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
