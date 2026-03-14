// 173 - Binary Search Tree Iterator

class BSTIterator {
    constructor(root) {
        this.vals = [];
        this.index = -1;
        this.#dfs(root);
    }
    hasNext() {
        return this.index < this.vals.length - 1;
    }
    next() {
        return this.vals[++this.index];
    }
    #dfs(node) {
        if (!node) return;
        node.left && this.#dfs(node.left);
        this.vals.push(node.val);
        node.right && this.#dfs(node.right);
    }
}
