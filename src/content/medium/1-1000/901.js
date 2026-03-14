// 901 - Online Stock Span

class StockSpanner {
    constructor() {
        this.data = [];
        this.stack = [];
    }
    next(price) {
        const data = this.data;
        const stack = this.stack;
        let span = 1;
        while (stack.length && price >= data[stack[stack.length - 1][0]]) {
            span += stack.pop()[1];
        }
        data.push(price);
        stack.push([data.length - 1, span]);
        return span;
    }
}
