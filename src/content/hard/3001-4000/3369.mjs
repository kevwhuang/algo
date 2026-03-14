// 3369 - Design an Array Statistics Tracker

class StatisticsTracker {
    constructor() {
        this.arr = [];
        this.acc = 0;
        this.i = 0;
        this.B1 = new Map();
        this.B2 = new Map();
        this.heap1 = new PriorityQueue((a, b) => b - a);
        this.heap2 = new PriorityQueue((a, b) => a - b);
        this.m = 0;
        this.n = 0;
        this.B3 = new Map();
        this.pq = new PriorityQueue((a, b) => b[1] - a[1] || a[0] - b[0]);
    }
    addNumber(number) {
        this.arr.push(number);
        this.acc += number;
        this.heap1.enqueue(number);
        this.heap2.enqueue(this.#fn(this.heap1) ?? this.heap1.dequeue());
        if (this.m < ++this.n) {
            this.m++, this.n--;
            this.heap1.enqueue(this.#fn(this.heap2) ?? this.heap2.dequeue());
        }
        this.B3.set(number, (this.B3.get(number) ?? 0) + 1);
        this.pq.enqueue([number, this.B3.get(number)]);
    }
    getMean() {
        return this.acc / (this.arr.length - this.i) >> 0;
    }
    getMedian() {
        const n = this.arr.length - this.i;
        if (n & 1) return this.#fn(this.heap1) ?? this.heap1.front();
        return this.#fn(this.heap2) ?? this.heap2.front();
    }
    getMode() {
        const pq = this.pq;
        while (this.B3.get(pq.front()[0]) !== pq.front()[1]) pq.dequeue();
        return pq.front()[0];
    }
    removeFirstAddedNumber() {
        const cur = this.arr[this.i++];
        this.acc -= cur;
        if (this.#fn(this.heap1) ?? this.heap1.front() >= cur) {
            this.m--;
            this.B1.set(cur, (this.B1.get(cur) ?? 0) + 1);
        } else {
            this.n--;
            this.B2.set(cur, (this.B2.get(cur) ?? 0) + 1);
        }
        if (this.m < this.n) {
            this.m++, this.n--;
            this.heap1.enqueue(this.#fn(this.heap2) ?? this.heap2.dequeue());
        } else if (this.m > this.n + 1) {
            this.m--, this.n++;
            this.heap2.enqueue(this.#fn(this.heap1) ?? this.heap1.dequeue());
        }
        this.B3.set(cur, this.B3.get(cur) - 1);
    }
    #fn(heap) {
        const B = heap === this.heap1 ? this.B1 : this.B2;
        while (B.get(heap.front())) {
            B.set(heap.front(), B.get(heap.dequeue()) - 1);
        }
    }
}
