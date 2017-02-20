(function () {
'use strict';

angular.module('ShoppingList')
.component('itemsList', {
  templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
  bindings: {
    menuitems: '<'
  }
});

})();
