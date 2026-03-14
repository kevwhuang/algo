// 2166 - Design Bitset

class Bitset {
    constructor(size) {
        this.bits = new Array(size).fill(0);
        this.bitsFlipped = new Array(size).fill(1);
        this.ones = 0;
    }
    all() {
        return this.bits.length === this.ones;
    }
    count() {
        return this.ones;
    }
    fix(idx) {
        if (this.bits[idx]) return;
        this.bits[idx] = 1;
        this.bitsFlipped[idx] = 0;
        this.ones++;
    }
    flip() {
        const swap = this.bits;
        this.bits = this.bitsFlipped;
        this.bitsFlipped = swap;
        this.ones = this.bits.length - this.ones;
    }
    one() {
        return this.ones > 0;
    }
    toString() {
        return this.bits.join('');
    }
    unfix(idx) {
        if (!this.bits[idx]) return;
        this.bits[idx] = 0;
        this.bitsFlipped[idx] = 1;
        this.ones--;
    }
}
