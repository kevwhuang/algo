// 3776 - Minimum Moves to Balance Circular Array

function minMoves(balance) {
    function check(i, flag) {
        if (flag) l = (l - 1 + n) % n;
        else r = (r + 1) % n;
        const min = Math.min(A[i], acc1);
        return res += k * min, A[i] = -1, acc1 -= min;
    }
    let acc1 = 0, acc2 = 0, i;
    const A = balance, n = A.length;
    for (let j = 0; j < n; j++) {
        if (A[j] < 0) acc1 -= A[j], i = j;
        else acc2 += A[j];
    }
    if (acc1 > acc2) return -1;
    if (acc1 === 0) return 0;
    let res = 0, k = 1, l = (i - 1 + n) % n, r = (i + 1) % n;
    while (check(l, true) && check(r)) k++;
    return res;
}
