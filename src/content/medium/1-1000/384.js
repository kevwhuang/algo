// 384 - Shuffle an Array

class Solution {
    constructor(nums) {
        this.nums = nums;
        this.rand = [...nums];
        this.len = this.nums.length;
    }
    reset() {
        return this.nums;
    }
    shuffle() {
        for (let i = 0; i < this.len; i++) {
            const pivot = Math.floor(this.len * Math.random());
            const temp = this.rand[i];
            this.rand[i] = this.rand[pivot];
            this.rand[pivot] = temp;
        }
        return this.rand;
    }
}
