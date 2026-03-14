// 225 - Implement Stack Using Queues

class MyStack {
    constructor() {
        this.stack = [];
    }
    empty() {
        return this.stack.length === 0;
    }
    pop() {
        return this.stack.pop();
    }
    push(x) {
        this.stack.push(x);
    }
    top() {
        return this.stack.at(-1);
    }
}
