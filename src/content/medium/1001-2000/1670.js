// 1670 - Design Front Middle Back Queue

class FrontMiddleBackQueue {
    constructor() {
        this.queue = [];
    }
    popBack() {
        if (this.queue.length === 0) return -1;
        return this.queue.pop();
    }
    popFront() {
        if (this.queue.length === 0) return -1;
        return this.queue.shift();
    }
    popMiddle() {
        if (this.queue.length === 0) return -1;
        let mid = this.queue.length / 2 >> 0;
        if (this.queue.length % 2 === 0) mid--;
        return this.queue.splice(mid, 1);
    }
    pushBack(val) {
        this.queue.push(val);
    }
    pushFront(val) {
        this.queue.unshift(val);
    }
    pushMiddle(val) {
        this.queue.splice(this.queue.length / 2 >> 0, 0, val);
    }
}
