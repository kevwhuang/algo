// 3795 - Minimum Subarray Length With Distinct Sum at Least K

function minLength(nums, k) {
    if (!this.B) B = new Uint32Array(100001);
    B.fill(0, 0, Math.max(...nums) + 1);
    let res = Infinity;
    for (let acc = 0, l = 0, r = 0; r < nums.length; r++) {
        if (++B[nums[r]] === 1) acc += nums[r];
        while (true) {
            const a = nums[l];
            if (B[a] === 1 && acc - a < k) break;
            if (B[a] === 1) acc -= a;
            B[a]--, l++;
        }
        if (acc >= k) res = Math.min(r - l + 1, res);
    }
    return res < Infinity ? res : -1;
}
