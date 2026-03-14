// 604 - Design Compressed String Iterator

class StringIterator {
    constructor(compressedString) {
        this.str = compressedString;
        this.cur = -1;
        this.post = 0;
        this.ite = 0;
    }
    hasNext() {
        if (this.post === this.str.length && !this.ite) return false;
        return this.cur < this.str.length;
    }
    next() {
        if (!this.ite) {
            this.cur = this.post;
            while (Number.isInteger(Number(this.str[++this.post]))) { }
            this.ite = Number(this.str.slice(this.cur + 1, this.post));
        }
        if (!this.hasNext()) return ' ';
        this.ite--;
        return this.str[this.cur];
    }
}
