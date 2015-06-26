'use strict';

angular.module('jpndemo')

.service('uploadSettings', function($http, fireService, AuthTokenService) {
    var service = this;

    service.getSettings = function(type) {

    	return fireService.findAndGetObject('settings', type, 'object');

    };

    service.deleteFile = function(cloudId) {
  
    	fireService.initAndGetObject('jobs', Date.now(), cloudId, 'cleanup');

    };

    return service;
});