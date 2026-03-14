// 1748 - Sum of Unique Elements

function sumOfUnique(nums) {
    const B = new Uint8Array(101);
    nums.forEach(e => B[e]++);
    return B.reduce((s, e, i) => e === 1 ? s + i : s, 0);
}
