// 1993 - Operations on Tree

class LockingTree {
    constructor(parent) {
        this.tree = parent;
        this.state = new Uint16Array(parent.length);
        this.children = this.#traverse(parent);
    }
    lock(num, user) {
        if (this.state[num]) return false;
        this.state[num] = user;
        return true;
    }
    unlock(num, user) {
        if (this.state[num] !== user) return false;
        this.state[num] = 0;
        return true;
    }
    upgrade(num, user) {
        let node = num;
        while (node !== -1) {
            if (this.state[node]) return false;
            node = this.tree[node];
        }
        const descendants = [];
        this.#dfs(num, descendants);
        if (descendants.length === 0) return false;
        for (let i = 0; i < descendants.length; i++) {
            this.state[descendants[i]] = 0;
        }
        this.state[num] = user;
        return true;
    }
    #dfs(node, arr) {
        if (this.state[node]) arr.push(node);
        const children = this.children.get(node);
        if (!children) return;
        for (let i = 0; i < children.length; i++) {
            this.#dfs(children[i], arr);
        }
    }
    #traverse(tree) {
        const map = new Map();
        for (let i = 1; i < tree.length; i++) {
            if (map.has(tree[i])) map.get(tree[i]).push(i);
            else map.set(tree[i], [i]);
        }
        return map;
    }
}
