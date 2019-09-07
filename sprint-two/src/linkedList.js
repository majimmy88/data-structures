var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.tail === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      let newNode = Node(value);
      list.tail.next = newNode;
      list.tail = newNode;

    }

  };

  list.removeHead = function() {
    if (list.head !== null) {
      var value = list.head.value;
      list.head = list.head.next;
      return value;
    }
  };

  list.contains = function(target) {
    var linked = false;
    var check = function(node) {
      if(node.value === target) {
        linked = true;
      } if(node.next === null) {
          return linked;
      } else {
        return check(node.next);
      }
    }
    return check(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
