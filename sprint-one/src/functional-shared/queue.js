var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.enqueue = queueMethods.enqueue
  someInstance.dequeue = queueMethods.dequeue
  someInstance.size = queueMethods.size
  return someInstance
};

var queueMethods = {};
queueMethods.enqueue = function(value){
  var index = Object.keys(this.storage).length
  this.storage[index] = value;
  index += 1;
}
queueMethods.dequeue = function(){
  var index = Object.keys(this.storage).length

  var v = this.storage[0]

  for(var i = 1; i< index; i++){
    this.storage[i-1] = this.storage[i]
  }
  index -= 1
  delete this.storage[index]

  return v
}
queueMethods.size = function(){
  var index = Object.keys(this.storage).length
  return index
}


