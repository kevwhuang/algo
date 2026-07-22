// 3991. Sort Array Using Prefix Reversals

function sortArray(nums, pre) {
    pre = pre.filter(e => e > 1);
    let Q = [0], tgt = 0, acc = 1;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        Q[0] = 10 * Q[0] + nums[i], tgt = 10 * tgt + i;
    }
    if (Q[0] === tgt) return 0;
    const seen = new Set(Q);
    const dict = [1, 10, 100, 1e3, 1e4, 1e5, 1e6];
    while (Q.length) {
        const N = [];
        for (let i = 0; i < Q.length; i++) {
            for (let j = 0; j < pre.length; j++) {
                const nn = pre[j], k = dict[n - nn];
                let next = Q[i] % k, cur = Q[i] / k | 0, rev = 0;
                for (let i = 0; i < nn; i++) {
                    rev = 10 * rev + cur % 10, cur = cur / 10 | 0;
                }
                next += k * rev;
                if (next === tgt) return acc;
                if (seen.has(next)) continue;
                seen.add(next);
                N.push(next);
            }
        }
        Q = N, acc++;
    }
    return -1;
}
