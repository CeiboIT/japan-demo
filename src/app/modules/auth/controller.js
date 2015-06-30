/**
 * Created by emiliano on 04/02/15.
 */

var authCtrl = function($state, AuthTokenService, $localStorage) {

    console.log("auth controller");

    var authCtrl = this;

    authCtrl.optin = {
        email: '',
        captcha: ''
    };
    authCtrl.flash = $localStorage.flash;

    if(authCtrl.flash){
        delete $localStorage.flash;
    }

    authCtrl.sendCredentials = function(userCredentials) {
        authCtrl.loading = true;
        authCtrl.loginPromise = AuthTokenService.login(userCredentials)
            .then(function() {
                AuthTokenService.getUserData()
                    .then(function(userData) {
                });
                authCtrl.loading = false;
            }, function(error) {
                if(error.code.indexOf('INVALID_') !== -1){
                    authCtrl.error = 'Email o Password incorrectos';
                }
                else{
                    $raven.captureException(error);
                    authCtrl.error = 'Retry later';
                }
                authCtrl.loading = false;
            });
    };

    authCtrl.toggleFotgonPass = function(){
        authCtrl.forgot = !authCtrl.forgot;
    }

    authCtrl.optinUser = function(optin) {
        console.log(optin)
        optin.culture = $localStorage.locale || 'es';
        AuthTokenService.optin(optin)
            .then(function() {
                authCtrl.signUpSuccess = 'Signup registered, please follow the instructions sent to your email address';
            }, function(error) {
                authCtrl.error = error;
            });
    };

    authCtrl.checkUserNameAvailability = function(username) {
        if (username) {
            authCtrl.checkingAvailability = true;
            AuthTokenService.checkUserNameAvailability(username)
                .then(function(availability) {
                    authCtrl.userNameAvailable = availability;
                    authCtrl.checkingAvailability = false;
                })
        }
    }

    authCtrl.resetCredentials = function(userCredentials) {
        authCtrl.resetPromise = AuthTokenService.reset(userCredentials)
            .then(function() {
                $state.go('auth.login');
                $localStorage.flash = 'A new password was sent to your email address';
            }, function(error) {
                authCtrl.error = error;
            });
    };

    authCtrl.resetRepeatedPass = function(pass) {
        if (!pass) {
            authCtrl.user.repeat = ""
        }
    }
};

angular.module('authModule')
    .controller('authCtrl', authCtrl);
