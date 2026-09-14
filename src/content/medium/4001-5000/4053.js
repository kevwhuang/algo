// 4053. Minimum Operations to Make Every Element Palindromic

function minOperations(nums) {
    function init() {
        A1 = [], A2 = [];
        for (let m = 1; m < 10; m++) {
            const n = (m + 1) >> 1, r = 10 ** n, k = 10 ** (m - n);
            for (let l = r / 10; l < r; l++) {
                let next = 0, cur = m % 2 ? l / 10 | 0 : l;
                while (cur) next = 10 * next + cur % 10, cur = cur / 10 | 0;
                next += k * l;
                (next % 2 ? A1 : A2).push(next);
            }
        }
    }
    if (!this.A1) init();
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        const tgt = nums[i], A = tgt % 2 ? A1 : A2;
        let l = 0, r = A.length - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (A[m] < tgt) l = m + 1;
            else r = m - 1;
        }
        const left = ~r ? A[r] : tgt, right = l < A.length ? A[l] : Infinity;
        res += Math.min(tgt - left, right - tgt) / 2;
    }
    return res;
}
