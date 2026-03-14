// 703 - Kth Largest Element in a Stream

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = new PriorityQueue((a, b) => a - b);
        nums.forEach(e => this.heap.enqueue(e));
    }
    add(val) {
        this.heap.enqueue(val);
        while (this.heap.size() > this.k) this.heap.dequeue();
        return this.heap.front();
    }
}
