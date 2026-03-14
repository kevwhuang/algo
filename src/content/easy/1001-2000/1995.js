// 1995 - Count Special Quadruplets

function countQuadruplets(nums) {
    let res = 0;
    const B = new Uint16Array(101);
    B[nums[0] + nums[1]]++;
    for (let i = 2; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const d = nums[j] - nums[i];
            if (0 <= d && d <= 100) res += B[d];
        }
        for (let j = 0; j < i; j++) {
            B[nums[i] + nums[j]]++;
        }
    }
    return res;
}
