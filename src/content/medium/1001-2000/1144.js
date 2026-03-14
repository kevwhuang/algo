// 1144 - Decrease Elements to Make Array Zigzag

function movesToMakeZigzag(nums) {
    if (nums.length === 1) return 0;
    if (nums.length === 2) return Number(nums[0] === nums[1]);
    const bound = nums.length - 1;
    const tail = Math.max(0, nums[bound] - nums[bound - 1] + 1);
    let moves1 = nums.length % 2 ? 0 : tail;
    for (let i = 1; i < bound; i += 2) {
        const cur = 1 + nums[i] - Math.min(nums[i - 1], nums[i + 1]);
        if (cur > 0) moves1 += cur;
    }
    const head = Math.max(0, nums[0] - nums[1] + 1);
    let moves2 = nums.length % 2 ? head + tail : head;
    for (let i = 2; i < bound; i += 2) {
        const cur = 1 + nums[i] - Math.min(nums[i - 1], nums[i + 1]);
        if (cur > 0) moves2 += cur;
    }
    return Math.min(moves1, moves2);
}
