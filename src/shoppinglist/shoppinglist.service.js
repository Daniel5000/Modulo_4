(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);




ShoppingListService.$inject = ['$q', '$timeout','$http']
function ShoppingListService($q, $timeout) {
  var service = this;

  // List of shopping items
  var items = [];

  service.getDatos =function () {
        var response = $http({
          method: "get",
          url: ("http://davids-restaurant.herokuapp.com/categories.json")
        });
        // var response ="asasasas";
        return response;
    }

  // Simulates call to server
  // Returns a promise, NOT items array directly
    service.getItems = function () {
      // return items;
      var deferred = $q.defer();
      var promise=deferred.promise;

      promise = service.getDatos();
      promise.then(function (response) {

        Console.log(response);
      })
       .catch(function (error) {
          
          Console.log(error);
       });

      // Wait 2 seconds before returning
        $timeout(function () {
          // deferred.reject(items);
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
          deferred.resolve(items);
        }, 1000);

    return promise;
      };


  }



})();
