// 2080 - Range Frequency Queries

class RangeFreqQuery {
    constructor(arr) {
        this.map = new Map();
        for (let i = 0; i < arr.length; i++) {
            if (this.map.has(arr[i])) this.map.get(arr[i]).push(i);
            else this.map.set(arr[i], [i]);
        }
    }
    query(left, right, value) {
        if (!this.map.has(value)) return 0;
        const arr = this.map.get(value);
        let l = 0, r = arr.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (arr[m] < left) l = m + 1;
            else r = m - 1;
        }
        const start = r + 1;
        if (start === arr.length) return 0;
        l = 0, r = arr.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (arr[m] > right) r = m - 1;
            else l = m + 1;
        }
        return l ? l - start : 0;
    }
}
