class MaxHeap {
    constructor() {
        this.heap = [null];
    }
    dequeue() {
        if (this.heap.length === 1) return null;
        if (this.heap.length === 2) return this.heap.pop();
        const res = this.heap[1];
        this.heap[1] = this.heap.pop();
        if (this.heap.length === 2) return res;
        let p = 1, l = 2, r = 3, cur;
        let pp = this.heap.length === 3 || this.heap[l] > this.heap[r] ? l : r;
        while (this.heap[p] < this.heap[pp]) {
            cur = this.heap[p], this.heap[p] = this.heap[pp], this.heap[pp] = cur;
            p = pp, l = 2 * pp, r = l + 1;
            if (l >= this.heap.length) break;
            pp = r >= this.heap.length || this.heap[l] > this.heap[r] ? l : r;
        }
        return res;
    }
    enqueue(val) {
        this.heap.push(val);
        let i = this.heap.length - 1, p = i >> 1;
        while (p && this.heap[p] < val) {
            this.heap[i] = this.heap[p], this.heap[p] = val;
            i = p, p >>= 1;
        }
        return true;
    }
    front() {
        return this.heap.length > 1 ? this.heap[1] : null;
    }
    size() {
        return this.heap.length - 1;
    }
}

module.exports = MaxHeap;
