// 1243 - Array Transformation

function transformArray(arr) {
    let flag, i = 0;
    const n = arr.length - 1, N = new Uint8Array(n + 1);
    while (++i < n) {
        const l = arr[i - 1], m = arr[i], r = arr[i + 1];
        if (m < l && m < r) N[i] = m + 1, flag = true;
        else if (m > l && m > r) N[i] = m - 1, flag = true;
        else N[i] = m;
    }
    N[0] = arr[0], N[n] = arr[n];
    return flag ? transformArray(N) : N;
}
