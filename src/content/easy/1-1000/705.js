// 705 - Design HashSet

class MyHashSet {
    add(key) {
        this[key] = null;
    }
    contains(key) {
        return key in this;
    }
    remove(key) {
        delete this[key];
    }
}
