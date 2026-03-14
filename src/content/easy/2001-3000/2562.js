// 2562 - Find the Array Concatenation Value

function findTheArrayConcVal(nums) {
    let conc = 0, l = -1, r = nums.length;
    while (++l <= --r) {
        if (l === r) conc += nums[l];
        else conc += Number(nums[l].toString() + nums[r]);
    }
    return conc;
}
