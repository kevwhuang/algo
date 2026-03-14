// 710 - Random Pick With Blacklist

class Solution {
    constructor(n, blacklist) {
        this.n = n - blacklist.length;
        this.map = new Map();
        this.#init(blacklist);
    }
    pick() {
        const res = Math.random() * this.n >> 0;
        return this.map.get(res) ?? res;
    }
    #init(arr) {
        const set = new Set(arr);
        let next = this.n, i = -1;
        while (++i < arr.length) {
            const cur = arr[i];
            if (cur >= this.n) continue;
            while (set.has(next)) next++;
            this.map.set(cur, next++);
        }
    }
}
