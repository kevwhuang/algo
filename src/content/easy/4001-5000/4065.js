// 4065. Rearrange Array by Removing Distinct Values

function rearrangeArray(nums) {
    const B = new Uint8Array(101);
    for (let i = 0; i < nums.length; i++) {
        B[nums[i]]++;
    }
    let i = 0;
    while (i < nums.length) {
        for (let j = 1; j < 101; j++) {
            if (B[j]) nums[i++] = j, B[j]--;
        }
    }
    return nums;
}
