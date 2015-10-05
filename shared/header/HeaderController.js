app.controller('HeaderController', function($location) {
  var vm = this;
  vm.currentPath = $location.path;
});