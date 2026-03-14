// 2336 - Smallest Number in Infinite Set

class SmallestInfiniteSet {
    constructor() {
        this.cur = 1;
        this.queue = [];
    }
    addBack(num) {
        if (num >= this.cur) return;
        if (this.queue.includes(num)) return;
        this.queue.push(num);
        this.queue.sort((a, b) => b - a);
    }
    popSmallest() {
        return this.queue.length ? this.queue.pop() : this.cur++;
    }
}
