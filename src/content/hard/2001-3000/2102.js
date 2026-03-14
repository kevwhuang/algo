// 2102 - Sequentially Ordinal Rank Tracker

class SORTracker {
    constructor() {
        const f1 = (a, b) => b[0] - a[0] || a[1].localeCompare(b[1]);
        const f2 = (a, b) => a[0] - b[0] || b[1].localeCompare(a[1]);
        this.heap1 = new PriorityQueue(f1);
        this.heap2 = new PriorityQueue(f2);
    }
    add(name, score) {
        this.heap2.enqueue([score, name]);
        this.heap1.enqueue(this.heap2.dequeue());
    }
    get() {
        const res = this.heap1.front()[1];
        this.heap2.enqueue(this.heap1.dequeue());
        return res;
    }
}
