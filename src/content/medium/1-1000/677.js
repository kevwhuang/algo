// 677 - Map Sum Pairs

class MapSum {
    constructor() {
        this.map = new Map();
    }
    insert(key, val) {
        this.map.set(key, val);
    }
    sum(prefix) {
        let res = 0;
        const map = this.map;
        for (const key of map.keys()) {
            if (key.startsWith(prefix)) res += map.get(key);
        }
        return res;
    }
}
