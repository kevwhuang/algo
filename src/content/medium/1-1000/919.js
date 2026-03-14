// 919 - Complete Binary Tree Inserter

class CBTInserter {
    constructor(root) {
        this.root = root;
        this.level = [root];
        this.nextLevel = [];
        this.idx = 0;
        this.#init();
    }
    get_root() {
        return this.root;
    }
    insert(val) {
        if (this.idx === this.level.length) this.#next();
        const node = new TreeNode(val);
        this.nextLevel.push(node);
        const parent = this.level[this.idx];
        if (!parent.left) {
            parent.left = node;
        } else {
            parent.right = node;
            this.idx++;
        }
        return parent.val;
    }
    #init() {
        while (true) {
            for (let i = 0; i < this.level.length; i++) {
                const node = this.level[i];
                if (node.left) this.nextLevel.push(node.left);
                else return;
                if (node.right) this.nextLevel.push(node.right);
                else return;
                this.idx++;
            }
            this.#next();
        }
    }
    #next() {
        this.level = this.nextLevel;
        this.nextLevel = [];
        this.idx = 0;
    }
}
