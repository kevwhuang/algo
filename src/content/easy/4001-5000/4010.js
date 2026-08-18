// 4010. Maximize Pair Strength Using GCD

function maxPairStrength(nums) {
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    let res = 1;
    const A = new Uint32Array(nums).sort();
    const pow = A.reduce(gcd) ** 2;
    for (let i = A.length - 2; ~i; i--) {
        const a = A[i];
        if (a * A.at(-1) / pow <= res) break;
        for (let j = A.length - 1; j > i; j--) {
            const b = A[j];
            if (a * b / pow <= res) break;
            res = Math.max(a * b / gcd(a, b) ** 2, res);
        }
    }
    return res;
}
