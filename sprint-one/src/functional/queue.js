var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var index = Object.keys(storage).length
    storage[index] = value;
    index += 1;
  };

  someInstance.dequeue = function() {
    var index = Object.keys(storage).length

      var v = storage[0]

      for(var i = 1; i< index; i++){
        storage[i-1] = storage[i]
      }
      index -= 1
      delete storage[index]

      return v

  };

  someInstance.size = function() {
    var index = Object.keys(storage).length
    return index
  };

  return someInstance;
};
