// 1570 - Dot Product of Two Sparse Vectors

class SparseVector {
    constructor(nums) {
        this.nums = nums;
    }
    dotProduct(vec) {
        return this.nums.reduce((s, e, i) => s + e * vec.nums[i], 0);
    }
}
