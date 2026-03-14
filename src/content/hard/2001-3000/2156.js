// 2156 - Find Substring With Given Hash Value

function subStrHash(s, power, modulo, k, hashValue) {
    const fn = i => BigInt(s.charCodeAt(i) - 96);
    let res, hash = 0n, pow = 1n;
    const a = BigInt(power), mod = BigInt(modulo);
    for (let i = s.length - k + 1; i < s.length; i++) {
        pow = a * pow % mod;
        hash = (hash + pow * fn(i)) % mod;
    }
    const tgt = BigInt(hashValue);
    for (let i = s.length - k; ~i; i--) {
        hash = (hash + fn(i)) % mod;
        if (hash === tgt) res = i;
        hash = a * (hash + mod - pow * fn(i + k - 1) % mod) % mod;
    }
    return s.slice(res, res + k);
}
