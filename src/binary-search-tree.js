const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
    class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    root() {
        return this.rootNode
    }

    add(d) {

        let node = {data: d, left: null, right: null};

        if (this.rootNode == null)
            this.rootNode = node;
        else
            this.insNode(this.rootNode, node);
    }

    insNode(n, nextN) {
        if (nextN.data < n.data) {

            if (n.left == null)
                n.left = nextN;
            else

                this.insNode(n.left, nextN);
        } else {

            if (n.right == null)
                n.right = nextN;
            else

                this.insNode(n.right, nextN);
        }
    }

    has(d) {
        if (this.search(this.rootNode, d) == null) {
            return false
        } else {
            return true
        }
    }

    search(n, d) {

        if (n === null)
            return null;

        else if (d < n.data)
            return this.search(n.left, d);

        else if (d > n.data)
            return this.search(n.right, d);

        else
            return n;
    }

    find(d) {
        return this.search(this.rootNode, d)
    }

    remove(d) {

        this.rootNode = this.removeNode(this.rootNode, d);
    }

    removeNode(n, k) {

        if (n == null)
            return null;

        else if (k < n.data) {
            n.left = this.removeNode(n.left, k);
            return n;
        } else if (k > n.data) {
            n.right = this.removeNode(n.right, k);
            return n;
        } else {

            if (n.left == null && n.right == null) {
                n = null;
                return n;
            }

            if (n.left == null) {
                n = n.right;
                return n;
            } else if (n.right == null) {
                n = n.left;
                return n;
            }

            let min = this.findMin(n.right);
            n.data = min.data;

            n.right = this.removeNode(n.right, min.data);
            return n;
        }
    }

    findMin(n) {
        if (n.left == null)
            return n.data;
        else
            return this.findMin(n.left);
    }

    findMax(n) {
        if (n.right == null)
            return n.data;
        else
            return this.findMax(n.right);
    }

    min() {
        return this.findMin(this.rootNode)
    }

    max() {
        return this.findMax(this.rootNode)
    }
}
