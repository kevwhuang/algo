// 548 - Split Array With Equal Sum

function splitArray(nums) {
    const map = new Map();
    for (let acc = 0, i = nums.length - 1; i >= 6; i--) {
        acc += nums[i];
        if (!map.has(acc)) map.set(acc, []);
        map.get(acc).push(i - 1);
    }
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    for (let l = 1; l < nums.length - 5; l++) {
        const arr = map.get(nums[l - 1]) ?? [];
        for (let i = 0; i < arr.length; i++) {
            for (let m = l + 2; m <= arr[i] - 2; m++) {
                if (nums[m - 1] - nums[l] !== nums[l - 1]) continue;
                if (nums[arr[i] - 1] - nums[m] === nums[l - 1]) return true;
            }
        }
    }
    return false;
}
