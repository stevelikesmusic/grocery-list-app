app.factory('QuickListFactory', function() {
  var factory = {};
  factory.list = [{name: 'bread'}];
  
  factory.addItem = function() {
    factory.list.push({name: factory.itemName});
    factory.itemName = null;
  };
 
  return factory;
});