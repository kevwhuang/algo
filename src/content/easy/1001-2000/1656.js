// 1656 - Design an Ordered Stream

class OrderedStream {
    constructor(n) {
        this.stream = new Array(n);
        this.idx = 0;
    }
    insert(idKey, value) {
        this.stream[idKey - 1] = value;
        const chunk = [];
        while (this.stream[this.idx]) {
            chunk.push(this.stream[this.idx++]);
        }
        return chunk;
    }
}
