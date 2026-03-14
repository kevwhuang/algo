// 3473 - Sum of K Subarrays With Length at Least M

function maxSum(nums, k, m) {
    const ps = nums, n = ps.length;
    for (let i = 1; i < n; i++) {
        ps[i] += ps[i - 1];
    }
    let dp1 = new Array(n), dp2 = new Array(n), cur;
    for (let j = 0; j < k; j++) {
        let max = -1e8, i = -1;
        while (++i < m - 1) dp2[i] = i ? dp2[i - 1] : -1e8;
        while (i < n) {
            const prev = j ? i >= m ? dp1[i - m] : -1e8 : 0;
            max = Math.max(prev - (i >= m ? ps[i - m] : 0), max);
            dp2[i] = Math.max(i ? dp2[i - 1] : -1e8, ps[i] + max);
            i++;
        }
        cur = dp1, dp1 = dp2, dp2 = cur;
    }
    return dp1[n - 1];
}
