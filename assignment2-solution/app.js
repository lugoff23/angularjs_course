(function () {
'use strict';

var shoppingListToBuy = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Strawberries",
    quantity: "5"
  }
];

var shoppingListBought = [];

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController);

ShoppingListController.$inject = ['$scope'];
function ShoppingListController($scope) {
  $scope.shoppingListToBuy = shoppingListToBuy;
  $scope.shoppingListBought = shoppingListBought;

  console.log("ToBuy:"+ $scope.shoppingListToBuy.length);
  console.log("Bought:"+ $scope.shoppingListBought.length);

  if ($scope.shoppingListToBuy.length == 0) {
    $scope.emptyMessageToBuy = "Everything is bougth!!";
  } else {
    $scope.emptyMessageToBuy = "";
  };
  if ($scope.shoppingListBought.length == 0) {
    $scope.emptyMessageBought = "Nothing bougth yet";
  } else {
    $scope.emptyMessageBought = "";
  };

  $scope.addToList = function () {
    var newItem = {
      name: $scope.newItemName,
      quantity: $scope.newItemQuantity
    };

    $scope.shoppingListBought.push(newItem);
    console.log("Bought length:"+$scope.shoppingListBought.length);
    $scope.shoppingListToBuy.shift();
    console.log("ToBuy length:"+$scope.shoppingListToBuy.length);
  };

}

})();
