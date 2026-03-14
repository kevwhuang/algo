// 2694 - Event Emitter

class EventEmitter {
    constructor() {
        this.map = new Map();
    }
    emit(eventName, args) {
        if (!this.map.has(eventName)) return [];
        const res = [], arr = this.map.get(eventName).values();
        for (const e of arr) {
            res.push(e(...args));
        }
        return res;
    }
    subscribe(eventName, callback) {
        const map = this.map;
        if (!map.has(eventName)) map.set(eventName, new Set());
        map.get(eventName).add(callback);
        return { unsubscribe: () => map.get(eventName).delete(callback) };
    }
}
