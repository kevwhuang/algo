// 528 - Random Pick With Weight

class Solution {
    constructor(w) {
        this.sums = new Array(w);
        this.sums[0] = w[0];
        for (let i = 1; i < w.length; i++) {
            this.sums[i] = this.sums[i - 1] + w[i];
        }
        this.total = this.sums[this.sums.length - 1];
    }
    pickIndex() {
        const target = this.total * Math.random() >> 0;
        let l = 0, r = this.sums.length - 1;
        while (l <= r) {
            const m = (l + r) / 2 >> 0;
            if (this.sums[m] > target) r = m - 1;
            else l = m + 1;
        }
        return l;
    }
}
