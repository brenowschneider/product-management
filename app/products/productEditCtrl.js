(function () {
  'use strict';
  angular.module("productManagement").controller("ProductEditCtrl", ["product", "$state", ProductEditCtrl]);

  function ProductEditCtrl(product, $state) {
    var vm = this;

    vm.product = product;
    vm.opened = false;

    if (vm.product && vm.product.productId) {
      vm.title = "Edit" + vm.product.productName;
    } else {
      vm.title = "New Product";
    }

    vm.open = function ($event) {
      $event.preventDefault();
      $event.stopPropagation();
      vm.opened = !vm.opened;
    }

    vm.submit = function () {
      console.log(typeof(vm.product.releaseDate));
      console.log(typeof(vm.product.releaseDate));
      vm.product.$save();
      console.log(vm.product);
    }

    vm.cancel = function () {
      $state.go('productList');
    }

  }
}());