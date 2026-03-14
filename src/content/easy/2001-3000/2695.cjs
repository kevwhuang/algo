// 2695 - Array Wrapper

class ArrayWrapper {
    constructor(nums) {
        this.arr = nums;
    }
    toString() {
        return JSON.stringify(this.arr);
    }
    valueOf() {
        return this.arr.reduce((s, e) => s + e, 0);
    }
}
