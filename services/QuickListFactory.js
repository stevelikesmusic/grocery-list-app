app.factory('QuickListFactory', function() {
  var factory = {};
  factory.list = [];
  
  factory.addItem = function() {
    factory.list.push({name: factory.itemName});
    factory.itemName = null;
  };
 
  return factory;
});