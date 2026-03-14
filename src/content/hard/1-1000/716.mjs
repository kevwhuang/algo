// 716 - Max Stack

class MaxStack {
    constructor() {
        this.fn = (a, b) => this.arr[b] - this.arr[a] || b - a;
        this.S = [];
        this.heap = new PriorityQueue(this.fn);
        this.arr = [];
        this.seen = [];
    }
    peekMax() {
        while (this.seen[this.heap.front()]) this.heap.dequeue();
        return this.arr[this.heap.front()];
    }
    pop() {
        while (this.seen[this.S.at(-1)]) this.S.pop();
        this.seen[this.S.at(-1)] = 1;
        return this.arr[this.S.pop()];
    }
    popMax() {
        while (this.seen[this.heap.front()]) this.heap.dequeue();
        this.seen[this.heap.front()] = 1;
        return this.arr[this.heap.dequeue()];
    }
    push(x) {
        this.arr.push(x);
        this.seen.push(0);
        this.S.push(this.arr.length - 1);
        this.heap.enqueue(this.arr.length - 1);
    }
    top() {
        while (this.seen[this.S.at(-1)]) this.S.pop();
        return this.arr[this.S.at(-1)];
    }
}
