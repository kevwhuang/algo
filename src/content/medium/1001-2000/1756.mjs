// 1756 - Design Most Recently Used Queue

class MRUQueue {
    constructor(n) {
        this.queue = new Array(n);
        for (let i = 0; i < n; i++) {
            this.queue[i] = i + 1;
        }
    }
    fetch(k) {
        const deleted = this.queue[k - 1];
        this.queue.splice(k - 1, 1);
        this.queue.push(deleted);
        return deleted;
    }
}
