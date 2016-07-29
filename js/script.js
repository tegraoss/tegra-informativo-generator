(function (angular) {
  'use strict';
  angular.module("email").controller('MainCtrl', ['$scope', function ($scope) {
    var self = this;
    this.model = {};
    this.copy = function (id) {
      var clipboard = new Clipboard('.copyButton', {
        target: function (trigger) {
          return document.getElementById('signature-container');
        }
      });
    }
    $scope.$watch(function () {
      return self.model.name
    }, function (v) {
      if (!v) {
        self.model.email = '';
        return;
      }
      var parts = v.split(' ');
      if (parts.length >= 2) {
        self.model.email = (parts[0] + '.' + parts[parts.length - 1]).toLowerCase();
      }
      if (parts.length == 1) {
        self.model.email = parts[0].toLowerCase();
      }
    });
  }])
})(angular);
