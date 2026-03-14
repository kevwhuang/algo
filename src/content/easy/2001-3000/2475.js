// 2475 - Number of Unequal Triplets in Array

function unequalTriplets(nums) {
    let triplets = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] === nums[j]) continue;
            for (let k = j + 1; k < len; k++) {
                if (nums[i] === nums[k]) continue;
                if (nums[j] === nums[k]) continue;
                triplets++;
            }
        }
    }
    return triplets;
}
