function BinarySearchTree(data) {
    this.data = data;
    this.left = null;
    this.right = null;
}

let bst = new BinarySearchTree(5); // { data: 5, left: null, right: null }

BinarySearchTree.prototype.add = function(data) {
    if (data > this.data) {
        if (this.right === null) {
            this.right = new BinarySearchTree(data);
        } else {
            this.right.add(data);
        }
    }
};

bst.add(10); // bst: { data: 5, left: null, right: { data: 10, left: null, right: null }}
bst.add(11); // bst: {data: 5, left: null, right: {data:10, left: null, right:{data:11, left: null, right: null}}}
