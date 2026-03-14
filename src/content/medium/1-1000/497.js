// 497 - Random Point in Non-Overlapping Rectangles

class Solution {
    constructor(rects) {
        this.rects = rects;
        this.sums = this.#init(rects);
        this.total = this.sums[rects.length - 1][0];
    }
    pick() {
        const target = this.total * Math.random() >> 0;
        let l = 0, r = this.sums.length - 1;
        while (l <= r) {
            const m = (l + r) / 2 >> 0;
            if (this.sums[m][0] > target) r = m - 1;
            else l = m + 1;
        }
        const rect = this.rects[this.sums[l][1]];
        const x = rect[0] + ((rect[2] - rect[0] + 1) * Math.random() >> 0);
        const y = rect[1] + ((rect[3] - rect[1] + 1) * Math.random() >> 0);
        return [x, y];
    }
    #init(rects) {
        const sums = new Array(rects.length);
        let running = 0;
        for (let i = 0; i < rects.length; i++) {
            const rect = rects[i];
            running += (rect[2] - rect[0] + 1) * (rect[3] - rect[1] + 1);
            sums[i] = [running, i];
        }
        return sums;
    }
}
