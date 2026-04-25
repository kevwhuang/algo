// 3907. Count Smaller Elements With Opposite Parity

function countSmallerOppositeParity(nums) {
    if (!this.tree1) tree1 = new Uint32Array(100001);
    if (!this.tree2) tree2 = new Uint32Array(100001);
    const A = new Uint32Array(new Set(nums)).sort();
    tree1.fill(0, 1, A.length + 1);
    tree2.fill(0, 1, A.length + 1);
    const map = new Map();
    A.forEach((e, i) => map.set(e, i + 1));
    for (let i = nums.length - 1; ~i; i--) {
        const tree3 = nums[i] & 1 ? tree1 : tree2;
        for (let j = map.get(nums[i]); j <= A.length; j += j & -j) {
            tree3[j]++;
        }
        let sum = 0;
        const tree4 = nums[i] & 1 ? tree2 : tree1;
        for (let j = map.get(nums[i]) - 1; j; j -= j & -j) {
            sum += tree4[j];
        }
        nums[i] = sum;
    }
    return nums;
}
