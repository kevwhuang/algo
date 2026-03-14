// 1987 - Number of Unique Good Subsequences

function numberOfUniqueGoodSubsequences(binary) {
    let a = 0, b = 0, c = 0;
    const mod = 1000000007;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '0') a = (a + b) % mod, c = 1;
        else b = (a + b + 1) % mod;
    }
    return (a + b + c) % mod;
}
