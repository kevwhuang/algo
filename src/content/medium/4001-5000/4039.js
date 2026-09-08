// 4039. Sum of Decoded Numbers

function sumDecoded(nums) {
    let res = 0;
    const mod = BigInt(1e9 + 7);
    for (let i = 0; i < nums.length; i++) {
        const s = String(Math.floor(nums[i] / 10));
        let pow = 1n;
        let base = BigInt(s.slice(0, nums[i] % 10));
        let exp = s.slice(nums[i] % 10);
        while (exp) {
            if (exp & 1) pow = pow * base % mod;
            base = base * base % mod;
            exp >>= 1;
        }
        res = (res + Number(pow)) % (1e9 + 7);
    }
    return res;
}
