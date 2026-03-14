// 381 - Insert Delete GetRandom O(1) - Duplicates Allowed

class RandomizedCollection {
    constructor() {
        this.map = new Map();
        this.arr = [];
    }
    getRandom() {
        return this.arr[this.arr.length * Math.random() >> 0];
    }
    insert(val) {
        const map = this.map, arr = this.arr;
        if (!map.has(val)) map.set(val, new Set());
        map.get(val).add(arr.length);
        arr.push(val);
        return map.get(val).size === 1;
    }
    remove(val) {
        const map = this.map, arr = this.arr;
        if (!map.has(val) || map.get(val).size === 0) return false;
        const idx = map.get(val).keys().next().value;
        map.get(val).delete(idx);
        const cur = arr.at(-1);
        map.get(cur).add(idx);
        map.get(cur).delete(arr.length - 1);
        arr[idx] = cur;
        arr.pop();
        return true;
    }
}
