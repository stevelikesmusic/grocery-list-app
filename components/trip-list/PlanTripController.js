app.controller('PlanTripController', function(PlanTripFactory) {
  var vm = this;
  
  vm.list = PlanTripFactory.list;
  vm.PlanTripFactory = PlanTripFactory;
});