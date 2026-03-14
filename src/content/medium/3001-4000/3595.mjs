// 3595 - Once Twice

function onceTwice(nums) {
    const dp1 = [-1, 0, 0];
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        for (let prev = dp1[2] & cur, j = 0; j < 3; j++) {
            const next = dp1[j] & cur;
            dp1[j] ^= prev | next, prev = next;
        }
    }
    const dp2 = [-1, 0, 0];
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if ((dp1[1] & cur) !== dp1[1] || dp1[2] & cur) continue;
        for (let prev = dp2[2] & cur, j = 0; j < 3; j++) {
            const next = dp2[j] & cur;
            dp2[j] ^= prev | next, prev = next;
        }
    }
    return [dp2[1], dp1[1] ^ dp2[1] | dp1[2]];
}
