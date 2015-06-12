/**
 * Created by emiliano on 11/06/15.
 */

'use strict'

angular.module('ceibo.ui.material.side-menu', [])

  .directive('menuScroll', function() {
    // Runs during compile
    return {
      scope: {
      },
      controller: 'menuScrollCtrl as menu',
      // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
      restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
      templateUrl: 'app/modules/ui/menu-scroll/menu-scroll.html',
      bindToController: true
    };
  });
