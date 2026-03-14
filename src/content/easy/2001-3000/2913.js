// 2913 - Subarrays Distinct Element Sum of Squares I

function sumCounts(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        const set = new Set();
        for (let j = i; j < nums.length; j++) {
            set.add(nums[j]);
            sum += set.size ** 2;
        }
    }
    return sum;
}
