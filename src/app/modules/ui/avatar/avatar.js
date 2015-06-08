'use strict';

var avatarService = function() {

  var service  = this;

  service.getFormlyConfigurationObject = function(modelKey) {

    return {
      key : modelKey,
      type: "custom",
      "noFormControl": true,
      templateOptions : {

      }
    }

  }




};

var avatarCtrl = function(uploadSettings, $upload, gettext, $element, UserService) {

    var avatarCtrl = this;

    if(typeof FileAPI !== 'undefined'){
        avatarCtrl.flashFallBack = true;
        avatarCtrl.hasFlash = FileAPI.hasFlash;
    }

    if(avatarCtrl.avatarImg){
      avatarCtrl.preview = avatarCtrl.avatarImg;
    }else{
      if(avatarCtrl.defaultStyle == "orange"){
        avatarCtrl.preview = "/images/avatar_orange.png";
      }
      else{
        avatarCtrl.preview = "/images/avatar_grey.png";
      }
    }

    var _uploadSettings = uploadSettings.getSettings('upload');

    avatarCtrl.validate = function($file){
        if($file){
            try{
                if(_uploadSettings.allowedType.indexOf($file.type) === -1){
                    throw new Error(gettext('Only JPG, PNG, GIF Files are allowed'));
                }
                if($file.size > _uploadSettings.maxSize){
                    throw new Error(gettext('File must not exceed 2Mb'));
                }
                return $file;
            }
            catch(error){
                avatarCtrl.error = error.message;
            };

        }
    }

    avatarCtrl.upload = function() {
            if(avatarCtrl.file[0]){
            var uploadParams = {
                upload_preset: _uploadSettings.presets.avatar
            };
            var oldAvatarId = avatarCtrl.avatarId ;
            avatarCtrl.uploadPromise = $upload.upload({
                url: _uploadSettings.url,
                method: 'POST',
                fields: uploadParams,
                file: avatarCtrl.file[0]
            }).success(function(data) {
              if(avatarCtrl.avatarFormly) {
                avatarCtrl.model = {
                  avatarImg : data.secure_url,
                  avatarId : data.public_id
                }
              } else {
                avatarCtrl.avatarImg = data.secure_url;
                avatarCtrl.avatarId = data.public_id;
              }

              avatarCtrl.preview = avatarCtrl.avatarImg || avatarCtrl.model.avatarImg;

              if(avatarCtrl.onUploadedPromise) {
                avatarCtrl.onUploadedPromise({ avatarImg: avatarCtrl.avatarImg, avatarId: avatarCtrl.avatarId })
              }

              if(oldAvatarId){
                //uploadSettings.deleteFile(oldAvatarId);
              }


            }).error(function(err){
                avatarCtrl.error = err.error.message;
            });
        }
    };
};

angular.module('lixil.ui.avatar', [])
    .controller('avatarCtrl', avatarCtrl)
    .run(function(formlyConfig) {
      //In order to be able to use this directive with angular-formly
      formlyConfig.setType({
        name: "avatar",
        template: '<avatar model="model[options.key]" avatar-formly="{{ true }}"></avatar>'
      })

    })
    .service('avatarService', avatarService)
    .directive('avatar',
        function() {
            return {
                scope: {
                  defaultStyle: '=',
                  model : '=',
                  avatarImg: '=',
                  avatarId: '=',
                  onUploadedPromise: '=',
                  avatarFormly : '@',
                  showInPanel: '@'
                },
                controller: 'avatarCtrl as avatar',
                restrict: 'E',
                templateUrl: '../modules/lixil-ui-components/avatar/avatar-template.html',
                bindToController: true
            };
        }
    );
