// 3508 - Implement Router

class Router {
    constructor(memoryLimit) {
        this.map = new Map();
        this.M = [];
        this.i = 0;
        this.n = memoryLimit;
    }
    addPacket(source, destination, timestamp) {
        const M = this.M;
        for (let i = M.length - 1; i >= this.i; i--) {
            if (M[i][2] < timestamp) break;
            if (M[i][1] !== destination) continue;
            if (M[i][0] !== source) continue;
            return false;
        }
        if (M.length - this.i === this.n) this.map.get(M[this.i++][1])[0]++;
        if (!this.map.has(destination)) this.map.set(destination, [1]);
        this.map.get(destination).push(timestamp);
        M.push([source, destination, timestamp]);
        return true;
    }
    forwardPacket() {
        if (this.M.length === this.i) return [];
        this.map.get(this.M[this.i][1])[0]++;
        return this.M[this.i++];
    }
    getCount(destination, startTime, endTime) {
        const arr = this.map.get(destination);
        if (!arr) return 0;
        let l = arr[0], r = arr.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (arr[m] < startTime) l = m + 1;
            else r = m - 1;
        }
        const left = l;
        l = arr[0], r = arr.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (arr[m] <= endTime) l = m + 1;
            else r = m - 1;
        }
        return Math.max(0, r - left + 1);
    }
}
