// 706 - Design HashMap

class MyHashMap {
    get(key) {
        return this[key] ?? -1;
    }
    put(key, value) {
        this[key] = value;
    }
    remove(key) {
        delete this[key];
    }
}
