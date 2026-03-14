// 1261 - Find Elements in a Contaminated Binary Tree

class FindElements {
    constructor(root) {
        this.root = root;
        this.vals = new Set();
        this.#recover(this.root, 0);
    }
    find(target) {
        return this.vals.has(target);
    }
    #recover(node, val) {
        this.vals.add(val);
        node.val = val;
        if (node.left) this.#recover(node.left, 2 * val + 1);
        if (node.right) this.#recover(node.right, 2 * val + 2);
    }
}
