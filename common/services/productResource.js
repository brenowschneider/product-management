(function () {
  'use strict';
  angular.module("common.services").factory("productResource", ["$resource", productResource]);

  function productResource($resource) {
    var apiUrl = "/api/products/"
    
    return $resource(apiUrl + ":productId");
  }


}());