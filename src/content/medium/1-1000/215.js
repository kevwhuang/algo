// 215 - Kth Largest Element in an Array

function findKthLargest(nums, k) {
    const B = new Uint32Array(20001);
    nums.forEach(e => B[e + 10000]++);
    let i = 20000;
    while (k > 0) k -= B[i--];
    return i - 9999;
}
