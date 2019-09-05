class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {}
  }
  push(value){
    var index = Object.keys(this.storage).length
    index += 1
    this.storage[index] = value
  }
  pop(){
    var index = Object.keys(this.storage).length
    if(index < 1){
      return 0
    }
    var v = this.storage[index]
    delete this.storage[index]
    index -= 1
    return v
  }
  size(){
    var index = Object.keys(this.storage).length
    return index
  }
}