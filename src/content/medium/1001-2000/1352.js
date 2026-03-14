// 1352 - Product of the Last K Numbers

class ProductOfNumbers {
    constructor() {
        this.nums = [];
    }
    add(num) {
        if (num === 0) this.nums = [];
        else this.nums.push(num * this.nums[this.nums.length - 1] || num);
    }
    getProduct(k) {
        const index = this.nums.length - k;
        if (index < 0) return 0;
        if (index === 0) return this.nums[k - 1];
        return this.nums[index + k - 1] / this.nums[index - 1];
    }
}
