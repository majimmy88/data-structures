

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  // for (var i = 0; i < this._storage.length; i++) {
  //   if (i === index) {
  //     this._storage[i].push ([k, v]);
  //   }
  // }
  console.log(this._storage[index])
  console.log(this)
  this._storage[index] = []
  this._storage[index].push ([k, v]);


};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arrLength = this._storage.length;
  return this._storage[index][0][1]
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


