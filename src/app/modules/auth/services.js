/**
 * Created by emiliano on 04/02/15.
 */
angular.module('authModule')
    .service('AuthTokenService', function AuthTokenService($localStorage, $window, $firebaseAuth, $q, fireRef, fireService) {

            var service = this;
            var key = 'uid';

            var ref = new Firebase(fireRef);
            var auth = $firebaseAuth(ref);
            var authKey = 'auth-token';
            var userKey = 'uid';

            service.auth = auth;

            service.setToken = function(token) {
                $localStorage[authKey] = token;
            };

            service.getToken = function() {
                return $localStorage[authKey];
            };

            service.setId= function(uid) {
              $localStorage[userKey] = uid;
            };
            service.isAuthorized = function() {
                return !!auth.$getAuth();
            };

            service.logOut = function() {
                auth.$unauth();
                location.reload();
            };

            service.checkUserNameAvailability = function(username) {
                var nameAvailabilityPromise = $q.defer();

                fireService.find('nameslist', username)
                    .then(function(userData) {
                        nameAvailabilityPromise.resolve(!userData.exists);
                    });

                return nameAvailabilityPromise.promise;

            };

            service.login = function(userCredentials) {
                var authPromise = $q.defer();
                auth.$authWithPassword(userCredentials) //{remember: 'sessionOnly'}
                    .then(function() {
                        authPromise.resolve('success');
                    })
                    .catch(function(error) {
                        authPromise.reject(error);
                    });

                return authPromise.promise;
            };

            service.getUserData = function(userId) {

                var userDataPromise = $q.defer();
                console.log($localStorage)
                //don't ask to the server if we don't need it
                if(!$localStorage[key]){
                    userDataPromise.reject();
                }
                else{

                //if we're asking for ourselves
                if (!userId) {
                    //try to get it from memory
                    var user = service.userData;
                    var userId = service.getId();

                    //by convention, let's call the service.getUserData without params for search for ourselves
                    //if the data were not in memory, let's ask to the server
                    //also if we had a different data in memory instead of the one that we were looking

                    if (!user) {
                        userModel.find({
                            "$id": service.getId()
                        }, function(data) {
                            service.setUserDataInMemory(data);
                            userDataPromise.resolve(data);
                        })
                    } else {
                        //sends the user that we had in memory
                        userDataPromise.resolve(user)
                    }
                } else {
                    //if we're asking for a other user, always we will have to go to the server
                    userModel.find({
                        "email": userId
                    }, function(data) {
                        var dataKey = Object.keys(data)[0];
                        userDataPromise.resolve(data[dataKey]);
                    })

                }
            }
                return userDataPromise.promise;
        }

            service.changePassword = function(userCredentials){
                var passwordPromise = $q.defer();
                auth.$changePassword(userCredentials).
                    then(function(){
                        passwordPromise.resolve('success');
                    })
                    .catch(function(error){
                        passwordPromise.reject(error);
                    });
                return passwordPromise.promise;
            };

            service.reset = function(userCredentials) {
                var authPromise = $q.defer();
                auth.$resetPassword(userCredentials)
                    .then(function(data) {
                        authPromise.resolve('success');
                    })
                    .catch(function(error) {
                        authPromise.reject(error);
                    });

                return authPromise.promise;
            };

            service.register = function(userData) {
                var authPromise = $q.defer();
                auth.$createUser(userData)
                    .then(function() {
                        service.login(userData)
                            .then(function() {
                                var modMail = userData.email.replace(".", "");
                                var userObject = fireService.findAndGetObject('users', userData.email.replace(".", ""), 'object');
                                //var registerNewUsername = fireService.findAndGetObject('nameslist', userData.username);

                                userObject.firstName = userData.firstName;
                                userObject.lastName = userData.lastName;
                                userObject.email = userData.email;
                                userObject.phone = userData.phone;
                                userObject.creationDate = new Date();
                                userObject.location = $window.navigator.geolocation;

                                userObject.$save().then(function() {
                                    //registerNewUsername.$set({"exists": true});
                                    $localStorage[userKey] = userData.email;
                                    authPromise.resolve('success');
                                })
                            });
                    })

                .catch(function(error) {
                    authPromise.reject(error);
                });

                return authPromise.promise;
            };

            service.optin = function(optinData) {
                var optinPromise = $q.defer();

                var modMail = optinData.email.replace(/\./g, '');

                fireService.objectExists('users', modMail)
                    .then(function(user) {

                        if (user) {
                            throw new Error(gettext('User already exists'));
                        }

                        return fireService.objectExists('optins', modMail);

                    })
                    .then(function(optin) {

                        if (optin) {
                            throw new Error(gettext('User registration in progress'));
                        }

                        return fireService.initAndGetObject('optins', optinData, modMail);

                    })
                    .then(function() {

                        optinPromise.resolve('success');

                    })
                    .catch(function(error) {

                        optinPromise.reject(error);

                    });

                return optinPromise.promise;
            };
})

.factory('AuthInterceptor', function AuthInterceptor(AuthTokenService) {
    var addToken = function(configuration) {
        var token = AuthTokenService.getToken();
        if (token) {
            configuration.headers = configuration.headers || {};
            configuration.headers.Autorization = 'Bearer ' + token;
        }
        return config;
    };

    var isAuthorized =function() {
        return AuthTokenService.isAuthorized();
    };

    return {
        addToken: addToken,
        isAuthorized: isAuthorized
    };
});
