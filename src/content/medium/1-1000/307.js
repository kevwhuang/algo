// 307 - Range Sum Query - Mutable

class NumArray {
    constructor(nums) {
        this.nums = nums;
        this.tree = [0, ...nums];
        for (let i = 1; i <= nums.length; i++) {
            const p = i + (i & -i);
            if (p <= nums.length) this.tree[p] += this.tree[i];
        }
    }
    sumRange(left, right) {
        let res = 0;
        for (let i = right + 1; i; i -= i & -i) {
            res += this.tree[i];
        }
        for (let i = left; i; i -= i & -i) {
            res -= this.tree[i];
        }
        return res;
    }
    update(index, val) {
        const d = val - this.nums[index];
        this.nums[index] = val;
        for (let i = index + 1; i < this.tree.length; i += i & -i) {
            this.tree[i] += d;
        }
    }
}
