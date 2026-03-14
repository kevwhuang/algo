// 3766 - Minimum Operations to Make Binary Palindrome

function minOperations(nums) {
    function init() {
        dict = [];
        for (let i = 1, j = 1, k; i <= 5049; i++) {
            let l = 31 - Math.clz32(i), r = 0;
            while (l > r) if ((i >> l-- ^ i >> r++) & 1) l = -1;
            if (l < 0) continue;
            while (j < i) dict[j] = Math.min(j - k, i - j++);
            k = j;
        }
    }
    if (!this.dict) init();
    for (let i = 0; i < nums.length; i++) {
        nums[i] = dict[nums[i]];
    }
    return nums;
}
