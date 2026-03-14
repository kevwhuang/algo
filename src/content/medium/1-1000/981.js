// 981 - Time Based Key-Value Store

class TimeMap {
    constructor() {
        this.map = new Map();
    }
    get(key, timestamp) {
        const M = this.map.get(key);
        if (!M || M[0][1] > timestamp) return '';
        let l = 0, r = M.length - 1;
        while (l < r) {
            const m = l + r >> 1;
            if (M[m][1] < timestamp) l = m + 1;
            else r = m;
        }
        return M[r][1] > timestamp ? M[r - 1][0] : M[r][0];
    }
    set(key, value, timestamp) {
        if (!this.map.has(key)) this.map.set(key, []);
        this.map.get(key).push([value, timestamp]);
    }
}
