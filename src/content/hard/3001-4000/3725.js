// 3725 - Count Ways to Choose Coprime Integers From Rows

function countCoprime(mat) {
    function init() {
        B = new Uint8Array(151);
        dp1 = new Uint32Array(151);
        dp2 = new Uint32Array(151);
        dict = Array.from({ length: 151 }, () => new Uint8Array(151));
        for (let i = 1; i < 151; i++) {
            for (let j = 1; j < 151; j++) {
                dict[i][j] = gcd(i, j);
            }
        }
    }
    const gcd = (a, b) => !a ? b : gcd(b % a, a);
    if (!this.dp1) init();
    let max = 1;
    dp1.fill(0);
    mat[0].forEach(e => ++dp1[e] && (max = Math.max(e, max)));
    for (let cur, r = 1; r < mat.length; r++) {
        B.fill(0);
        mat[r].forEach(e => ++B[e] && (max = Math.max(e, max)));
        dp2.fill(0);
        for (let i = 1; i <= max; i++) {
            const a = B[i];
            if (a === 0) continue;
            for (let j = 1; j <= max; j++) {
                const b = dp1[j], next = dict[i][j];
                if (b) dp2[next] = (dp2[next] + a * b) % 1000000007;
            }
        }
        cur = dp1, dp1 = dp2, dp2 = cur;
    }
    return dp1[1];
}
