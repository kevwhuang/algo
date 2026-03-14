// 146 - LRU Cache

class LRUCache {
    constructor(capacity) {
        this.map = new Map();
        this.tgt = capacity;
    }
    get(key) {
        const res = this.map.get(key) ?? -1;
        if (~res) this.map.delete(key);
        if (~res) this.map.set(key, res);
        return res;
    }
    put(key, value) {
        this.map.delete(key);
        this.map.set(key, value);
        if (this.map.size <= this.tgt) return;
        this.map.delete(this.map.keys().next().value);
    }
}
