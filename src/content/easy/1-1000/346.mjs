// 346 - Moving Average From Data Stream

class MovingAverage {
    constructor(size) {
        this.size = size;
        this.sum = 0;
        this.window = [];
    }
    next(val) {
        if (this.window.length === this.size) this.sum -= this.window.shift();
        this.sum += val;
        this.window.push(val);
        return this.sum / this.window.length;
    }
}
