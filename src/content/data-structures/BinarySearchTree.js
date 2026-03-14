class BinarySearchTree {
    constructor() {
        this.tree = null;
    }
    bfs() {
        if (!this.tree) return [];
        const res = [];
        let Q = [this.tree];
        while (Q.length) {
            const N = [];
            for (let i = 0; i < Q.length; i++) {
                const node = Q[i];
                res.push(node.val);
                if (node.left) N.push(node.left);
                if (node.right) N.push(node.right);
            }
            Q = N;
        }
        return res;
    }
    dfs(type = 'in') {
        const res = [];
        if (type === 'pre') this.#preorder(this.tree, res);
        else if (type === 'in') this.#inorder(this.tree, res);
        else if (type === 'post') this.#postorder(this.tree, res);
        return res;
    }
    get(val) {
        let res = this.tree;
        while (res && res.val !== val) {
            res = res.val > val ? res.left : res.right;
        }
        return res;
    }
    insert(val) {
        if (!this.tree) return this.tree = new Node(val);
        let res = this.tree;
        while (res) {
            if (res.val > val) {
                if (!res.left) return res.left = new Node(val);
                res = res.left;
            } else {
                if (!res.right) return res.right = new Node(val);
                res = res.right;
            }
        }
        return res;
    }
    #inorder(node, vals) {
        if (!node) return;
        this.#inorder(node.left, vals);
        vals.push(node.val);
        this.#inorder(node.right, vals);
    }
    #postorder(node, vals) {
        if (!node) return;
        this.#postorder(node.left, vals);
        this.#postorder(node.right, vals);
        vals.push(node.val);
    }
    #preorder(node, vals) {
        if (!node) return;
        vals.push(node.val);
        this.#preorder(node.left, vals);
        this.#preorder(node.right, vals);
    }
}

class Node {
    constructor(val) {
        this.val = val ?? null;
        this.left = null;
        this.right = null;
    }
}

module.exports = BinarySearchTree;
