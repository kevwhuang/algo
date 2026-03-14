// 1381 - Design a Stack With Increment Operation

class CustomStack {
    constructor(maxSize) {
        this.stack = [];
        this.maxSize = maxSize;
    }
    increment(k, val) {
        const bound = Math.min(k, this.stack.length);
        for (let i = 0; i < bound; i++) {
            this.stack[i] += val;
        }
    }
    pop() {
        return this.stack.length ? this.stack.pop() : -1;
    }
    push(x) {
        if (this.stack.length === this.maxSize) return;
        this.stack.push(x);
    }
}
