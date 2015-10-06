app.factory('PlanTripFactory', function() {
  var factory = {};
  factory.list = [];
  
  factory.addItem = function() {
    factory.list.push({ 
      name: factory.itemName, 
      amount: factory.itemAmount, 
      unit: factory.itemUnit });
    factory.itemName = null;
    factory.itemAmount = null;
    factory.itemUnit = null;
  }
  
  return factory;
});