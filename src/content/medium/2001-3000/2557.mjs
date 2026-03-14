// 2557 - Maximum Number of Integers to Choose From a Range II

function maxCount(banned, n, maxSum) {
    banned.push(0, n + 1);
    banned = new Uint32Array(banned).sort();
    let res = 0, acc = 0;
    for (let i = 1; i < banned.length && acc < maxSum; i++) {
        let l = banned[i - 1] + 1, r = banned[i] - 1;
        if (l > r) continue;
        const sum = (l + r) * (r - l + 1) / 2;
        if (acc + sum <= maxSum) {
            res += r - l + 1;
            acc += sum;
        } else {
            const ll = l;
            while (l <= r) {
                const rr = l + r >> 1;
                const sum = (ll + rr) * (rr - ll + 1) / 2;
                if (acc + sum <= maxSum) l = rr + 1;
                else r = rr - 1;
            }
            res += r - ll + 1;
            acc = Infinity;
        }
    }
    return res;
}
