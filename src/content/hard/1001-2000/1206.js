// 1206 - Design Skiplist

class Skiplist {
    constructor() {
        this.B = new Uint16Array(20001);
    }
    add(num) {
        this.B[num]++;
    }
    erase(num) {
        return this.B[num] ? Boolean(this.B[num]--) : false;
    }
    search(target) {
        return Boolean(this.B[target]);
    }
}
