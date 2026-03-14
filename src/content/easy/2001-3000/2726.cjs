// 2726 - Calculator With Method Chaining

class Calculator {
    constructor(value) {
        this.cur = value;
    }
    add(value) {
        this.cur += value;
        return this;
    }
    divide(value) {
        if (value === 0) throw 'Division by zero is not allowed';
        this.cur /= value;
        return this;
    }
    getResult() {
        return this.cur;
    }
    multiply(value) {
        this.cur *= value;
        return this;
    }
    power(value) {
        this.cur **= value;
        return this;
    }
    subtract(value) {
        this.cur -= value;
        return this;
    }
}
