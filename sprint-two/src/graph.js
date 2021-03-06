

// Instantiate a new graph
var Graph = function() {
  var graph = {}
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this) {
    if (key === String(node)) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if(this[node].length > 0) {
    var edges = this[node];
    for(let i = 0; i < edges.length; i++) {
      this[edges[i]].splice(this[edges[i]].indexOf(node), 1);
    }
  }
  delete this[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this[fromNode].splice(this[fromNode].indexOf(toNode), 1);
  this[toNode].splice(this[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var key = Object.keys(this);
  for(let i = 0; i < key.length; i++) {
    cb(key[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


