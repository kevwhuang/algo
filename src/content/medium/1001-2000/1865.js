// 1865 - Finding Pairs With a Certain Sum

class FindSumPairs {
    constructor(nums1, nums2) {
        this.nums1 = nums1;
        this.nums2 = nums2;
        this.map = new Map();
        for (let i = 0; i < nums2.length; i++) {
            this.map.set(nums2[i], (this.map.get(nums2[i]) || 0) + 1);
        }
    }
    add(index, val) {
        const prev = this.nums2[index];
        const freq = this.map.get(prev);
        if (freq === 1) this.map.delete(prev);
        else this.map.set(prev, freq - 1);
        this.nums2[index] += val;
        const cur = this.nums2[index];
        this.map.set(cur, (this.map.get(cur) || 0) + 1);
    }
    count(tot) {
        let res = 0;
        for (let i = 0; i < this.nums1.length; i++) {
            const diff = tot - this.nums1[i];
            if (this.map.has(diff)) res += this.map.get(diff);
        }
        return res;
    }
}
