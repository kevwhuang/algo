// 2829 - Determine the Minimum Sum of a K-Avoiding Array

function minimumSum(n, k) {
    let sum = 0, cur = 0;
    const veto = new Set();
    while (n && ++cur) {
        if (veto.has(cur)) continue;
        sum += cur;
        if (cur < k) veto.add(k - cur);
        n--;
    }
    return sum;
}
