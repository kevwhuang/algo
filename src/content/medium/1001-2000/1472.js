// 1472 - Design Browser History

class BrowserHistory {
    constructor(homepage) {
        this.stack = [homepage];
        this.index = 0;
    }
    back(steps) {
        this.index = this.index < steps ? 0 : this.index - steps;
        return this.stack[this.index];
    }
    forward(steps) {
        const len = this.stack.length;
        this.index = this.index + steps < len ? this.index + steps : len - 1;
        return this.stack[this.index];
    }
    visit(url) {
        for (let i = this.stack.length - 1; i > this.index; i--) {
            this.stack.pop();
        }
        this.stack.push(url);
        this.index = this.stack.length - 1;
    }
}
