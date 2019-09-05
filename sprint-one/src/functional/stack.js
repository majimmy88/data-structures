var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = Object.keys(storage).length
  // Implement the methods below
  someInstance.push = function(value) {
    index += 1
    storage[index] = value
  };

  someInstance.pop = function() {
    if(index < 1){
      return 0
    }
    var v = storage[index]
    delete storage[index]
    index -= 1
    return v
  };

  someInstance.size = function() {
    return index
  };

  return someInstance;
};
