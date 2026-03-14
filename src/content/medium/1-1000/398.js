// 398 - Random Pick Index

class Solution {
    constructor(nums) {
        this.map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (this.map.has(num)) this.map.get(num).push(i);
            else this.map.set(num, [i]);
        }
    }
    pick(target) {
        const arr = this.map.get(target);
        return arr[arr.length * Math.random() >> 0];
    }
}
