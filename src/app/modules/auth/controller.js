/**
 * Created by emiliano on 04/02/15.
 */
var bgrdCtrl = function(){
    var bgrdCtrl = this;
    var rand = Math.floor(Math.random()*(5)+1);
    bgrdCtrl.background = 'background' + rand;
};

var authCtrl = function($state, AuthTokenService, toaster, gettext, $localStorage, $raven) {

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
        authCtrl.loginPromise = AuthTokenService.login(userCredentials)
            .then(function() {
            }, function(error) {
                if(error.code.indexOf('INVALID_') !== -1){
                    authCtrl.error = 'Wrong Email / Password combination';
                }
                else{
                    $raven.captureException(error);
                    authCtrl.error = 'Lixil Link is experiencing issues, please try again later';
                }
            });
    };

    authCtrl.optinUser = function(optin) {
        optin.culture = $localStorage.locale || 'en';
        
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
    .controller('authCtrl', authCtrl)
    .controller('bgrdCtrl', bgrdCtrl);