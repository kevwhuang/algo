// 4036. Lexicographically Largest String After Pair Transformations

function largestString(nums) {
    for (let i = 0; i < nums.length; i++) {
        let s = '', cur = nums[i];
        while (cur) {
            const exp = Math.min(31 - Math.clz32(cur), 25);
            s += String.fromCharCode(exp + 97), cur -= 1 << exp;
        }
        nums[i] = s;
    }
    return nums;
}
