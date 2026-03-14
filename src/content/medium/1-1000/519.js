// 519 - Random Flip Matrix

class Solution {
    constructor(m, n) {
        this.seen = new Set();
        this.bound = m * n;
        this.n = n;
    }
    flip() {
        while (true) {
            const pos = this.bound * Math.random() >> 0;
            if (this.seen.has(pos)) continue;
            this.seen.add(pos);
            return [pos / this.n >> 0, pos % this.n];
        }
    }
    reset() {
        this.seen.clear();
    }
}
