(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
       .controller('ToBuyController', ToBuyController)
       .controller('AlreadyBoughtController', AlreadyBoughtController)
       .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  toBuy.buy = function (index) {
    ShoppingListCheckOffService.buy(index);
  }

  toBuy.isEmpty = function () {
    return toBuy.itemsToBuy.length === 0;
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;
  alreadyBought.itemsBought = ShoppingListCheckOffService.getItemsBought();

  alreadyBought.isEmpty = function(){
    return alreadyBought.itemsBought.length === 0;
  };
}

function ShoppingListCheckOffService() {
  var service = this;

  var itemsToBuy = [
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

  var itemsBought = [];

  service.getItemsToBuy = function () {
      return itemsToBuy;
  };

  service.getItemsBought = function () {
    return itemsBought;
  }

  service.buy = function (index) {
    var item = itemsToBuy[index];
    itemsBought.push(item);
    itemsToBuy.splice(index, 1);
  };
}


})();
