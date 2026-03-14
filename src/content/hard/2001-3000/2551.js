// 2551 - Put Marbles in Bags

function putMarbles(weights, k) {
    k--;
    const n = weights.length - 1;
    const arr = new Uint32Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = weights[i] + weights[i + 1];
    }
    arr.sort();
    let res = 0;
    while (k--) res += arr[n - k - 1] - arr[k];
    return res;
}
