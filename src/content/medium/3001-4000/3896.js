// 3896. Minimum Operations to Transform Array Into Alternating Prime

function minOperations(nums) {
    function init() {
        dict = new Uint8Array(100004), dict[1] = 1, A = [];
        for (let a = 2; a < 100004; a++) {
            if (dict[a]) continue;
            A.push(a);
            for (let b = a * a; b < 100004; b += a) {
                dict[b] = 1;
            }
        }
    }
    if (!this.dict) init();
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        if (i % 2 && dict[cur] === 0) res += cur === 2 ? 2 : 1;
        if (i % 2 || dict[cur] === 0) continue;
        let l = 0, r = 9592;
        while (l <= r) {
            const m = l + r >> 1;
            if (A[m] < cur) l = m + 1;
            else r = m - 1;
        }
        res += A[l] - cur;
    }
    return res;
}
