// 1663 - Smallest String With a Given Numeric Value

function getSmallestString(n, k) {
    k -= n;
    const z = (k / 25) >> 0;
    const a = Math.max(0, n - z - 1);
    let _ = String.fromCharCode(k - 25 * z + 97);
    if (!a && _ === 'a') _ = '';
    return `${'a'.repeat(a)}${_}${'z'.repeat(z)}`;
}
