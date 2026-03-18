// 3871. Count Commas in Range II

function countCommas(n) {
    const a = Math.max(0, n - 999);
    const b = Math.max(0, n - 999999);
    const c = Math.max(0, n - 999999999);
    const d = Math.max(0, n - 999999999999);
    const e = Math.max(0, n - 999999999999999);
    return a + b + c + d + e;
}
