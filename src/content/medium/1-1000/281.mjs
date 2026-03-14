// 281 - Zigzag Iterator

class ZigzagIterator {
    constructor(v1, v2) {
        this.v1 = v1;
        this.v2 = v2;
        this.i = 0;
        this.j = 0;
        this.flag = false;
    }
    hasNext() {
        return this.i < this.v1.length || this.j < this.v2.length;
    }
    next() {
        if (this.i === this.v1.length) return this.v2[this.j++];
        else if (this.j === this.v2.length) return this.v1[this.i++];
        this.flag = !this.flag;
        return this.flag ? this.v1[this.i++] : this.v2[this.j++];
    }
}
