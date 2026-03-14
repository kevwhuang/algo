// 2028 - Find Missing Observations

function missingRolls(rolls, mean, n) {
    let remaining = mean * (rolls.length + n);
    remaining -= rolls.reduce((s, e) => s + e);
    if (remaining < n || remaining > 6 * n) return [];
    const missing = new Uint8Array(n);
    while (n) {
        missing[n - 1] = Math.ceil(remaining / n);
        remaining -= missing[n - 1];
        n--;
    }
    return missing;
}
