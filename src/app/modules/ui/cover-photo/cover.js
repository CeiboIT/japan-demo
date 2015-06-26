'use strict';

var coverPhotoCtrl= function(uploadSettings, Upload, $timeout) {

    var coverCtrl = this;
    var _uploadSettings = uploadSettings.getSettings('upload');

    coverCtrl.progress = 0;

    coverCtrl.validate = function($file) {
        if ($file) {
            try {
                if (_uploadSettings.allowedType.indexOf($file.type) === -1) {
                    throw new Error('Only JPG, PNG, GIF Files are allowed');
                }
                if ($file.size > _uploadSettings.maxSize) {
                    throw new Error('File must not exceed 2Mb');
                }
                return $file;
            } catch (error) {
                coverCtrl.error = error.message;
            }

        }
    };

    coverCtrl.upload = function() {
        if (coverCtrl.file[0]) {
            var uploadParams = {
                upload_preset: _uploadSettings.presets.articleCover
            };
            var oldCoverId = coverCtrl.coverId;
            coverCtrl.progress = 0;
            coverCtrl.uploadPromise = $upload.upload({
                url: _uploadSettings.url,
                method: 'POST',
                fields: uploadParams,
                file: coverCtrl.file[0]
            }).success(function(data) {
                if(coverCtrl.coverFormly) {
                  coverCtrl.model = {
                    coverUrl :data.secure_url,
                    coverId : data.public_id
                  }
                } else {
                  coverCtrl.coverUrl = data.secure_url;
                  coverCtrl.coverId = data.public_id;
                }

                coverCtrl.preview = coverCtrl.coverUrl;
                if (oldCoverId) {
                    uploadSettings.deleteFile(oldCoverId);
                }

                if(coverCtrl.onUploadedPromise) {
                  coverCtrl.onUploadedPromise({ coverUrl: coverCtrl.coverUrl, coverId: coverCtrl.coverId })
                }

                $timeout(function(){
                	coverCtrl.progress = 0;
                }, 5000);

            }).error(function(err) {
                coverCtrl.error = err.error.message;
            }).progress(function(evt) {
                // Math.min is to fix IE which reports 200% sometimes
                coverCtrl.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
    };


};

angular.module('lixil.ui.cover-photo', [])

    .controller('coverPhotoCtrl', coverPhotoCtrl)
    .directive('coverPhoto', function() {
        // Runs during compile
        return {
            scope: {
                coverUrl: '=',
                coverId: '=',
                model: '=',
                onUploadedPromise: '=',
                coverFormly : '@',
                showPanel : '@'
            },
            controller: 'coverPhotoCtrl as cover',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: 'app/modules/ui/cover-photo/cover.html',
            bindToController: true
        };
    });
