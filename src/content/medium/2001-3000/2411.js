// 2411 - Smallest Subarrays With Maximum Bitwise OR

function smallestSubarrays(nums) {
    const res = new Uint32Array(nums.length);
    const bucket = new Array(31).fill(0);
    let l = nums.length, r = l - 1;
    while (~--l) {
        let bit = 0, num = nums[l];
        while (num) {
            if (num & 1) bucket[bit]++;
            ++bit, num >>= 1;
        }
        while (l < r) {
            bit = 0, num = nums[r];
            while (num) {
                if (num & 1 && bucket[bit] === 1) break;
                ++bit, num >>= 1;
            }
            if (num) break;
            bit = 0, num = nums[r--];
            while (num) {
                if (num & 1) bucket[bit]--;
                ++bit, num >>= 1;
            }
        }
        res[l] = r - l + 1;
    }
    return res;
}
