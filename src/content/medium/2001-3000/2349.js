// 2349 - Design a Number Container System

class NumberContainers {
    constructor() {
        this.indices = new Map();
        this.nums = new Map();
    }
    change(index, number) {
        this.indices.set(index, number);
        if (!this.nums.has(number)) {
            const heap = new PriorityQueue({ compare: (a, b) => a - b });
            this.nums.set(number, heap);
        }
        this.nums.get(number).enqueue(index);
    }
    find(number) {
        if (!this.nums.has(number)) return -1;
        const heap = this.nums.get(number);
        while (heap.size() && number !== this.indices.get(heap.front())) {
            heap.dequeue();
        }
        return heap.front() ?? -1;
    }
}
