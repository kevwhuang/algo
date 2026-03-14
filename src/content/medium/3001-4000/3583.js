// 3583 - Count Special Triplets

function specialTriplets(nums) {
    if (!this.B1) B1 = new Uint32Array(100001), B2 = new Uint32Array(100001);
    B1.fill(0);
    B2.fill(0);
    nums.forEach(e => B1[e]++);
    let res = 0, i = -1;
    while (++i < nums.length) {
        const a = nums[i], b = a + a;
        B1[a]--;
        if (b < 100001) res = (res + B1[b] * B2[b]) % 1000000007;
        B2[a]++;
    }
    return res;
}
