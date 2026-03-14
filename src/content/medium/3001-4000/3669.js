// 3669 - Balanced K-Factor Decomposition

function minDifference(n, k) {
    function backtrack(i, acc) {
        if (cur.length === k) {
            if (acc < n || cur[kk] - cur[0] >= min) return;
            return res = new Uint32Array(cur), min = cur[kk] - cur[0];
        }
        while (i < arr.length) {
            const prod = acc * arr[i];
            if (prod > n) return;
            if (n % prod && ++i) continue;
            cur.push(arr[i]);
            backtrack(i++, prod);
            cur.pop();
        }
    }
    let arr = [], i = 0;
    const sqrt = Math.sqrt(n);
    while (++i <= sqrt) if (n % i < 1) arr.push(i, n / i);
    arr = new Uint32Array(arr).sort();
    let res, min = Infinity;
    const cur = [], kk = k - 1;
    backtrack(0, 1);
    return res;
}
