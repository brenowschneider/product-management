(function () {
  'use strict';
  var app = angular.module("productManagement", ["common.services", "ui.router", "productResourceMock"]);

  app.config(["$stateProvider", "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state("home", {
          url: "/",
          templateUrl: "app/welcomeView.html",
          controller: "ProductListCtrl as vm"
        })
        .state("productList", {
          url: "/products",
          templateUrl: "app/products/productListView.html",
          controller: "ProductListCtrl as vm"
        })
        .state("productEdit", {
          url: "/products/edit/:productId",
          templateUrl: "app/products/productEditView.html",
          controller: "ProductEditCtrl as vm"
        })
    }
  ])

}());