var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = {};
  child.value = value;
  child.children = [];
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var inside = false;
  var check = function(node) {
    if(node.value === target){
      inside = true;
    } else if(node.children.length > 0){
      node.children.forEach(function(el){
        check(el);
      })
    }
    return inside;
  };
  check(this);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
