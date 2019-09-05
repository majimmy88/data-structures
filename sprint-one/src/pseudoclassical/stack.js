var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
};

Stack.prototype.push = function(value){
  var index = Object.keys(this.storage).length
  index += 1
  this.storage[index] = value
}
Stack.prototype.pop = function(){
  var index = Object.keys(this.storage).length
  if(index < 1){
    return 0
  }
  var v = this.storage[index]
  delete this.storage[index]
  index -= 1
  return v
}
Stack.prototype.size = function(){
  var index = Object.keys(this.storage).length
  return index
}

