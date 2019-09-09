var BinarySearchTree = function(value) {
  var newTree = {};
  _.extend(newTree, binaryTreeMethods);
  newTree.value = value

  return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert = function(value) {
  var findAndInsert = function (node){
    if(node.value > value){
      if(!node.left){
        node.left = new Tree(value);
      }
      if(node.left){
        findAndInsert(node.left)
      }
    }
    if(node.value < value){
      if(!node.right){
        node.right = new Tree(value)
      }
      if(node.right){
        findAndInsert(node.right)
      }
    }
  }
  findAndInsert(this)
};

binaryTreeMethods.contains = function(target) {
  var result = false
  var find = function (node){
    if(node.value === target){
      return result = true
    }
    if(target > node.value && node.right){
      find(node.right)
    }
    if(target < node.value && node.left){
      find(node.left)
    }
    if(node.value !== target && !node.left && !node.right){
      result =  false
    }
  }

  find(this)
  return result
}

binaryTreeMethods.depthFirstLog = function(cb){
  var executeCb = function(node){

    cb(node.value)
    if(node.left){
      executeCb(node.left)
    }
    if(node.right){
      executeCb(node.right)
    }
  }
  executeCb(this)
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
