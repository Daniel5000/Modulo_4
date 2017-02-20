(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['$stateParams','Categories','ShoppingListService'];
function ItemDetailController($stateParams,Categories,ShoppingListService) {
  var itemDetail = this;
 //  itemDetail.objeto=[];
 // var objeto=[];
 //  for (var i = 0; i < Categories.menu_items.length; i++) {
 //    if (Categories.menu_items[i].short_name.substring(0,$stateParams.itemId.length)==$stateParams.itemId){
 //      itemDetail.name=Categories.menu_items[i].name;
 //      itemDetail.quantity=Categories.menu_items[i].price_small;
 //      itemDetail.priceLArge=Categories.menu_items[i].price_large;
 //      itemDetail.description=Categories.menu_items[i].description;
 //      itemDetail.objeto.push({Nombre:itemDetail.name,price_large:Categories.menu_items[i].price_large,
 //        price_small:Categories.menu_items[i].price_small,description:itemDetail.description});
 //    }
 //  }
itemDetail.Categories=Categories.menu_items;
  console.log(Categories);
}

})();
