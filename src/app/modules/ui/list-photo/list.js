'use strict';

var listPhotoCtrl= function(tasksService, uploadSettings, $upload, $timeout) {
console.log("list-photo controller");
    var listCtrl = this;
    var _uploadSettings = uploadSettings.getSettings('upload');

    listCtrl.progress = 0;

    listCtrl.validate = function($file) {
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
                listCtrl.error = error.message;
            }
        }
    };

    listCtrl.upload = function() {
        if (listCtrl.file[0]) {
            var uploadParams = {
                upload_preset: _uploadSettings.presets.upload
            };
            //var oldListId = listCtrl.listId;
            listCtrl.progress = 0;
            listCtrl.uploadPromise = $upload.upload({
                url: _uploadSettings.url,
                method: 'POST',
                fields: uploadParams,
                file: listCtrl.file[0]
            }).success(function(data) {
                //listCtrl.listUrl = data.secure_url;
                //listCtrl.listId = data.public_id;
                //listCtrl.preview = listCtrl.listUrl;
                if (listCtrl.listUrl == undefined) {
                    listCtrl.listUrl = [];
                    listCtrl.listUrl.push(data.secure_url);
                } else {
                    listCtrl.listUrl.push(data.secure_url);
                }

                if (listCtrl.listId == undefined) {
                    listCtrl.listId = [];
                    listCtrl.listId.push(data.public_id);
                } else {
                    listCtrl.listId.push(data.public_id);
                }

                //if (oldListId) {
                //    uploadSettings.deleteFile(oldListId);
                //}

                //if(listCtrl.onUploadedPromise) {
                //  listCtrl.onUploadedPromise({ listUrl: listCtrl.listUrl, listId: listCtrl.listId })
                //}

                if (listCtrl.model) {
                    listCtrl.model.imagesUrl = listCtrl.listUrl;
                    listCtrl.model.imagesId = listCtrl.listUrl;

                    listCtrl.updateTask = tasksService.updateTask(listCtrl.model)
                        .then (function() {
                            console.log("update ok");
                        }, function(error) {
                            listCtrl.error = error;
                            console.log("update no ok", listCtrl.error);
                        });
                }

                $timeout(function(){
                	listCtrl.progress = 0;
                }, 5000);

            }).error(function(err) {
                listCtrl.error = err.error.message;
            }).progress(function(evt) {
                listCtrl.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
            });
        }
    };
};

angular.module('lixil.ui.list-photo', [])
    .controller('listPhotoCtrl', listPhotoCtrl)
    .directive('listPhoto', function() {
        // Runs during compile
        return {
            scope: {
                listUrl: '=',
                listId: '=',
                model: '=',
                onUploadedPromise: '=',
                listFormly : '@',
                showPanel : '@'
            },
            controller: 'listPhotoCtrl as list',
            // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
            restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
            templateUrl: 'app/modules/ui/list-photo/list.html',
            bindToController: true
        };
    });