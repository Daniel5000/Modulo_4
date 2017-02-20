(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);


ShoppingListService.$inject = ['$q', '$timeout','$http']
function ShoppingListService($q, $timeout,$http) {
  var service = this;

  // List of shopping items
  var items = [];

 // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    var deferred = $q.defer();

    $http({
          method: "GET",
          url: ("http://davids-restaurant.herokuapp.com/categories.json")
        }).success(function (response) {
          console.log(response);
          deferred.resolve(response);
        }).error(function(err) {
                  deferred.reject(err)
        });

    return deferred.promise;
  };

  service.getItemsForCategory = function(categoryShortName) {
        var deferred = $q.defer();

            $http({
                    method: "GET",
                    url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
                    params: {
                        category: categoryShortName
                    }
                }).success(function(result) {
                  console.log("aqui")
                  console.log(result);
                    console.log("aqui")
                  deferred.resolve(result);
                })
                .error(function(error) {
                    console.log(error);
                });
                return deferred.promise;
  };
}

})();
