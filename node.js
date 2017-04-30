function Node(value) {
    this.value = value;
    this.right = null;
    this.left = null;
}

Node.prototype.addNode = function(value) {
    if (!this.left) 
        this.left = new Node(value);
    else if (!this.right)
        this.right = new Node(value);
    return this;
}

Node.prototype.isFull = function() {
    return this.right !== null && this.left !== null; 
}