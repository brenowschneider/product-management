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
      vm.product.$save(function(data){
        toastr.success("Save Succesful");
      });
    }

    vm.cancel = function () {
      $state.go('productList');
    }

    vm.addTags = function (tags) {
      if (tags) {
        var tagsArray = tags.split(',');
        vm.product.tags = vm.product.tags ? vm.product.tags.concat(tagsArray) : tagsArray;
        vm.newTags = "";
      } else {
        toastr.error("Please enter one or more tags separated by commas");
      }
    }

    vm.removeTag = function (index) {
      vm.product.tags.splice(index, 1);
    }

  }
}());