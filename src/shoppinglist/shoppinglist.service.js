(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService);




ShoppingListService.$inject = ['$q', '$timeout','$http']
function ShoppingListService($q, $timeout,$http) {
  var service = this;
  var items = [];

    service.getItems = function () {
      // return items;
      var deferred = $q.defer();
      var promise=deferred.promise;

      $http({
        method: "GET",
        url: ("http://davids-restaurant.herokuapp.com/categories.json")
      }).success(function (response) {
        console.log(response);
        deferred.resolve(response);
      }).error(function(err) {
                deferred.reject(err)
      });
      return promise;
      };
  }




})();
