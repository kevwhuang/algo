// 3756 - Concatenate Non-Zero Digits and Multiply by Sum II

function sumAndMultiply(s, queries) {
    function init() {
        ps1 = new Uint32Array(100001);
        ps2 = new BigUint64Array(100001);
        ps3 = new BigUint64Array(100001);
        dict = new BigUint64Array(100001).fill(1n, 0, 1);
        let i = 0;
        while (++i < 100001) dict[i] = 10n * dict[i - 1] % mod;
    }
    const mod = 1000000007n;
    if (!this.dict) init();
    ps1[0] = s[0] === '0' ? 0 : 1;
    ps2[0] = ps3[0] = BigInt(s[0]);
    for (let i = 1; i < s.length; i++) {
        const cur = BigInt(s[i]);
        ps1[i] = ps1[i - 1] + (cur ? 1 : 0);
        ps2[i] = cur ? (10n * ps2[i - 1] + cur) % mod : ps2[i - 1];
        ps3[i] = ps3[i - 1] + cur;
    }
    for (let i = 0; i < queries.length; i++) {
        const l = queries[i][0], r = queries[i][1];
        const j = ps1[r] - (l ? ps1[l - 1] : 0);
        const a = ps2[r] - (l ? ps2[l - 1] : 0n) * dict[j] % mod + mod;
        const b = ps3[r] - (l ? ps3[l - 1] : 0n);
        queries[i] = Number(a * b % mod);
    }
    return queries;
}
