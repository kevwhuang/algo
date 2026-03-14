// 380 - Insert Delete GetRandom O(1)

class RandomizedSet {
    constructor() {
        this.nums = [];
        this.indices = new Map();
    }
    getRandom() {
        return this.nums[~~(this.nums.length * Math.random())];
    }
    insert(val) {
        if (this.indices.has(val)) return false;
        this.indices.set(val, this.nums.length);
        this.nums.push(val);
        return true;
    }
    remove(val) {
        if (!this.indices.has(val)) return false;
        const idx = this.indices.get(val);
        this.nums[idx] = this.nums.at(-1);
        this.nums.pop();
        this.indices.set(this.nums[idx], idx);
        this.indices.delete(val);
        return true;
    }
}
