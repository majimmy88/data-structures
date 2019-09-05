var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
};

Queue.prototype.enqueue = function(value){
  var index = Object.keys(this.storage).length
  this.storage[index] = value;
  index += 1;
}
Queue.prototype.dequeue = function(){
  var index = Object.keys(this.storage).length

  var v = this.storage[0]

  for(var i = 1; i< index; i++){
    this.storage[i-1] = this.storage[i]
  }
  index -= 1
  delete this.storage[index]

  return v
}
Queue.prototype.size = function(){
  var index = Object.keys(this.storage).length
  return index

}