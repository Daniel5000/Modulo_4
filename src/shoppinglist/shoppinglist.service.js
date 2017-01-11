(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);


ShoppingListService.$inject = ['$q', '$timeout']
function ShoppingListService($q, $timeout) {
  var service = this;

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list
  items.push({
    name: "Sugar",
    quantity: "2 bags",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  items.push({
    name: "flour",
    quantity: "1 bags",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  items.push({
    name: "Chocolate Chips",
    quantity: "3 bags",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    $http.get(ApiBasePath + "/categories.json")
    .success(function(data, status, headers, config) {
      Console.console.log(data);
      }).
      error(function(data, status, headers, config) {
        Console.console.log("ERROR");
      });

    // var response = $http({
    //     method: "GET",
    //     url: (ApiBasePath + "/categories.json")
    //   });

    return items;
  };
}

})();
