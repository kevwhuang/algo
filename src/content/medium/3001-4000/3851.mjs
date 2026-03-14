// 3851 - Maximum Requests Without Violating the Limit

function maxRequests(requests, k, window) {
    if (!this.Q) Q = new Uint32Array(100000);
    const M = requests.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    const n = M.length;
    let res = n, i = 0;
    while (i < n) {
        const cur = M[i][0];
        let l = 0, r = 0;
        while (i < n && M[i][0] === cur) {
            Q[r++] = M[i++][1];
            if (r - l <= k) continue;
            if (Q[r - 1] - Q[l] > window) l++;
            else res--, r--;
        }
    }
    return res;
}
