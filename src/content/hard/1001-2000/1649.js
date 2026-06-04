// 1649. Create Sorted Array Through Instructions

function createSortedArray(instructions) {
    let res = 0;
    const A = instructions, tree = new Uint32Array(Math.max(...A) + 1);
    for (let i = 0; i < A.length; i++) {
        let left = 0, right = i;
        for (let j = A[i] - 1; j; j -= j & -j) {
            left += tree[j];
        }
        for (let j = A[i]; j; j -= j & -j) {
            right -= tree[j];
        }
        res = (res + Math.min(left, right)) % 1000000007;
        for (let j = A[i]; j < tree.length; j += j & -j) {
            tree[j]++;
        }
    }
    return res;
}
