// 3011 - Find If Array Can Be Sorted

function canSortArray(nums) {
    function count(num) {
        let bits = 0;
        while (num) {
            if (num & 1) bits++;
            num >>= 1;
        }
        return bits;
    }
    let i = 0, prevMax;
    while (i < nums.length) {
        let min = nums[i], max = nums[i];
        const cur = count(nums[i]);
        while (count(nums[++i]) === cur) {
            min = Math.min(nums[i], min);
            max = Math.max(nums[i], max);
        }
        if (prevMax > min) return false;
        prevMax = max;
    }
    return true;
}
