app.controller('QuickListController', function(QuickListFactory) {
  vm = this;
  
  vm.list = QuickListFactory.list;
  vm.QuickListFactory = QuickListFactory;
  /* vm.list = [];
  
  vm.addItem = function() {
    vm.list.push({name: this.itemName});
    vm.itemName = null;
  } 
  
  $scope.list = QuickListFactory.list;
  $scope.QuickListFactory = QuickListFactory; */
});