// 900 - RLE Iterator

class RLEIterator {
    constructor(encoding) {
        this.rle = encoding;
        this.i = 0;
    }
    next(n) {
        while (true) {
            if (this.i === this.rle.length) return -1;
            const count = this.rle[this.i];
            if (count < n) {
                n -= count;
                this.i += 2;
            } else {
                this.rle[this.i] -= n;
                return this.rle[this.i + 1];
            }
        }
    }
}
