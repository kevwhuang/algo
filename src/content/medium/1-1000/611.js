// 611 - Valid Triangle Number

function triangleNumber(nums) {
    nums.sort((a, b) => a - b);
    let triangles = 0;
    for (let i = 2; i < nums.length; i++) {
        const side = nums[i];
        let l = 0, r = i - 1;
        while (l < r) {
            if (side < nums[l] + nums[r]) triangles += -l + r--;
            else l++;
        }
    }
    return triangles;
}
