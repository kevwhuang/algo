// 1586 - Binary Search Tree Iterator II

class BSTIterator {
    constructor(root) {
        this.vals = [];
        this.index = -1;
        this.#dfs(root);
    }
    hasNext() {
        return this.index !== this.vals.length - 1;
    }
    hasPrev() {
        return this.index > 0;
    }
    next() {
        return this.vals[++this.index];
    }
    prev() {
        return this.vals[--this.index];
    }
    #dfs(node) {
        if (!node) return;
        this.#dfs(node.left);
        this.vals.push(node.val);
        this.#dfs(node.right);
    }
}
