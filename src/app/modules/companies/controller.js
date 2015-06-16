
'use strict';

var companiesCtrl = function(companiesService, $stateParams) {

	var company = this;


    company.createCompany = function(companyName, owner) {
        company.createPromise = companiesService.createCompany(companyName, owner)
            .then(function() {
				console.log("ok");
            }, function(error) {
                company.error = error;
                console.log("error");
            });
    };


	function init() {

		console.log( companiesService.showCompanies() );
		company.createCompany("testName", "testOwner");

	};

	//INITIALIZING
	init()

};

angular.module('companiesModule')
  .controller('companiesCtrl', companiesCtrl);