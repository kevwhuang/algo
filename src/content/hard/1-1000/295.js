// 295 - Find Median From Data Stream

class MedianFinder {
    constructor() {
        this.heap1 = new PriorityQueue((a, b) => a - b);
        this.heap2 = new PriorityQueue((a, b) => b - a);
    }
    addNum(num) {
        const heap1 = this.heap1, heap2 = this.heap2;
        if (num > heap1.front()) heap1.enqueue(num);
        else heap2.enqueue(num);
        const a = heap1.size(), b = heap2.size();
        if (a + 1 < b) heap1.enqueue(heap2.dequeue());
        else if (a - 1 > b) heap2.enqueue(heap1.dequeue());
    }
    findMedian() {
        const heap1 = this.heap1, heap2 = this.heap2;
        if (heap1.size() > heap2.size()) return heap1.front();
        if (heap1.size() < heap2.size()) return heap2.front();
        return (heap1.front() + heap2.front()) / 2;
    }
}
