class BinaryIndexedTree {
    constructor(vals) {
        this.vals = vals;
        this.tree = [0, ...vals];
        for (let i = 1; i <= vals.length; i++) {
            const p = i + (i & -i);
            if (p <= vals.length) this.tree[p] += this.tree[i];
        }
    }
    set(idx, val) {
        const d = val - this.vals[idx];
        this.vals[idx] = val;
        for (let i = idx + 1; i < this.tree.length; i += i & -i) {
            this.tree[i] += d;
        }
        return this;
    }
    sum(start, end) {
        let res = 0;
        for (let i = end + 1; i; i -= i & -i) {
            res += this.tree[i];
        }
        for (let i = start; i; i -= i & -i) {
            res -= this.tree[i];
        }
        return res;
    }
}

module.exports = BinaryIndexedTree;
