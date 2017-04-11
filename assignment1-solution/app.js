(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name="";
  $scope.stateOfBeing = "";

  $scope.checkAmount = function () {
    if ($scope.name.length <= 0) {
      $scope.stateOfBeing = "Please enter data first!";
    } else {
      var separator = ',';
      var arrayOfStrings = $scope.name.split(separator);
      if (arrayOfStrings.length <= 3) {
        $scope.stateOfBeing= "Enjoy!";
      } else {
        $scope.stateOfBeing= "Too Much!";
      }
    }
  };
}

})();
