// 2216 - Minimum Deletions to Make Array Beautiful

function minDeletion(nums) {
    let deleted = 0, i = 0;
    while (i + 1 < nums.length) {
        const num = nums[i++];
        while (num === nums[i]) { deleted++; i++; }
        i++;
    }
    return (nums.length - deleted) % 2 ? deleted + 1 : deleted;
}
