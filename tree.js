let Node = require('./node');

function Tree(value) {
    this.value = value;
}

/**
 * Function to test of a Tree is empty
 */
Tree.prototype.isEmpty = function () {
    if (this.value) 
        return true;
}

Tree.prototype.addNode = function (value) {
    if (this.left == null) {
        this.left = new Tree(value);
    }
    else if (this.right == null) {
        this.right = new Tree(value);
    } else if (value <= this.value) {
        this.left.addNode(value);
    } else if (value > this.value) {
        this.right.addNode(value);
    }
    return this;
}

Tree.prototype.printTree = function() {
    console.log(this.value);
    if (this.left && this.left !== null) {
        console.log('left');
        this.left.printTree();
    }

    if (this.right && this.right !== null) {
        console.log('right');
        this.right.printTree();
    }

    else
        console.log('.');
    

    // if (this.right == null) {
    //     console.log('.');
    // }
}

let tree = new Tree(1);
tree.addNode(2);
tree.addNode(3);
tree.addNode(4);
tree.addNode(5);
tree.addNode(6);
tree.addNode(7);
tree.addNode(8);

tree.printTree();


// function printTree(tree) {
//     let chars = [];
    
//     if (tree.left !== null) {
//         printTree(tree.left);
//     }
//     // console.log('value', tree.value);
//     // if (tree.left == null) {
//     //     console.log('null');
//     // }
//     if (tree.right !== null) {
//         printTree(tree.right);
//     }

    
//         console.log(value);
// // ' + printTree(tree.left) + '\/\\' + );
//     // } else {
//     //     console.log('Left: ', printTree(tree.left));
//     //     console.log('Right: ', printTree(tree.right));

//     // }
// }

// printTree(tree);