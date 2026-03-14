class PriorityQueue {
    constructor(fn) {
        this.pq = [null];
        this.fn = fn;
    }
    dequeue() {
        if (this.pq.length === 1) return null;
        if (this.pq.length === 2) return this.pq.pop();
        const res = this.pq[1];
        this.pq[1] = this.pq.pop();
        if (this.pq.length === 2) return res;
        let p = 1, l = 2, r = 3, cur;
        let pp = this.pq.length === 3 || this.fn(this.pq[l], this.pq[r]) ? l : r;
        while (!this.fn(this.pq[p], this.pq[pp])) {
            cur = this.pq[p], this.pq[p] = this.pq[pp], this.pq[pp] = cur;
            p = pp, l = 2 * pp, r = l + 1;
            if (l >= this.pq.length) break;
            pp = r >= this.pq.length || this.fn(this.pq[l], this.pq[r]) ? l : r;
        }
        return res;
    }
    enqueue(val) {
        this.pq.push(val);
        let i = this.pq.length - 1, p = i >> 1;
        while (p && !this.fn(this.pq[p], val)) {
            this.pq[i] = this.pq[p], this.pq[p] = val;
            i = p, p >>= 1;
        }
        return true;
    }
    front() {
        return this.pq.length > 1 ? this.pq[1] : null;
    }
    size() {
        return this.pq.length - 1;
    }
}

module.exports = PriorityQueue;
