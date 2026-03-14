// 155 - Min Stack

class MinStack {
    constructor() {
        this.S1 = [];
        this.S2 = [];
    }
    getMin() {
        return this.S2.at(-1);
    }
    pop() {
        if (this.S1.pop() === this.S2.at(-1)) this.S2.pop();
    }
    push(val) {
        this.S1.push(val);
        if (this.S2.length === 0) this.S2.push(val);
        else if (val <= this.S2.at(-1)) this.S2.push(val);
    }
    top() {
        return this.S1.at(-1);
    }
}
