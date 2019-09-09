

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage[index]){
    this._storage[index] = []
  }
    this._storage[index].push ([k, v]);

};

HashTable.prototype.retrieve = function(k) {
  var result
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index].forEach(function(subIndex){
    if(subIndex[0] === k){
      result = subIndex[1]
    }
  })
  return result
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage[index][0].splice(0,2)
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


