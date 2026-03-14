// 1621 - Number of Sets of K Non-Overlapping Line Segments

function numberOfSets(n, k) {
    n = BigInt(n), k = BigInt(k);
    let res = 1n, i = 0n;
    const kk = k + k;
    while (++i <= kk) res *= n + k - i, res /= i;
    return Number(res % 1000000007n);
}
