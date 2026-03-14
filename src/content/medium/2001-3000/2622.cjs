// 2622 - Cache With Time Limit

class TimeLimitedCache {
    constructor() {
        this.map = new Map();
    }
    count() {
        return this.map.size;
    }
    get(key) {
        return this.map.has(key) ? this.map.get(key)[0] : -1;
    }
    set(key, value, duration) {
        const fn = () => this.map.delete(key);
        const res = this.map.has(key);
        if (res) clearTimeout(this.map.get(key)[1]);
        this.map.set(key, [value, setTimeout(fn, duration)]);
        return res;
    }
}
