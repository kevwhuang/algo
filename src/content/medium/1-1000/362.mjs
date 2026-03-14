// 362 - Design Hit Counter

class HitCounter {
    constructor() {
        this.hits = [];
    }
    getHits(timestamp) {
        timestamp -= 300;
        let l = 0, r = this.hits.length - 1, m;
        while (l <= r) {
            m = (l + r) >> 1;
            if (this.hits[m] <= timestamp) l = m + 1;
            else r = m - 1;
        }
        return this.hits.length - l;
    }
    hit(timestamp) {
        this.hits.push(timestamp);
    }
}
