// 552 - Student Attendance Record II

function checkRecord(n) {
    let dp1 = new Uint32Array(3).fill(1, 0, 1), dp2 = new Uint32Array(3);
    let dp3 = new Uint32Array(3), dp4 = new Uint32Array(3), cur;
    const mod = 1000000007;
    while (n--) {
        dp3[0] = (dp3[0] + dp1[0] + dp1[1] + dp1[2]) % mod;
        dp3[1] = (dp3[1] + dp1[0]) % mod;
        dp3[2] = (dp3[2] + dp1[1]) % mod;
        dp4[0] = (dp4[0] + dp1[0] + dp1[1] + dp1[2]) % mod;
        dp4[0] = (dp4[0] + dp2[0] + dp2[1] + dp2[2]) % mod;
        dp4[1] = (dp4[1] + dp2[0]) % mod;
        dp4[2] = (dp4[2] + dp2[1]) % mod;
        cur = dp1, dp1 = dp3, dp3 = cur.fill();
        cur = dp2, dp2 = dp4, dp4 = cur.fill();
    }
    return (dp1[0] + dp1[1] + dp1[2] + dp2[0] + dp2[1] + dp2[2]) % mod;
}
