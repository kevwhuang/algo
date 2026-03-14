// 421 - Maximum XOR of Two Numbers in an Array

function findMaximumXOR(nums) {
    let res = 0, mask = 0;
    for (let n = 31 - Math.clz32(Math.max(...nums)); n >= 0; n--) {
        mask |= 1 << n;
        const target = res | 1 << n;
        const seen = new Set();
        for (let i = 0; i < nums.length; i++) {
            const and = nums[i] & mask;
            if (!seen.has(and ^ target)) seen.add(and);
            else {
                res = target;
                break;
            }
        }
    }
    return res;
}
