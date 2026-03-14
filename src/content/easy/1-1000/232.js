// 232 - Implement Queue Using Stacks

class MyQueue {
    constructor() {
        this.queue = [];
    }
    empty() {
        return this.queue.length === 0;
    }
    peek() {
        return this.queue[0];
    }
    pop() {
        return this.queue.shift();
    }
    push(x) {
        this.queue.push(x);
    }
}
