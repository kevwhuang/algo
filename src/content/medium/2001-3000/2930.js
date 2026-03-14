// 2930 - Number of Strings Which Can Be Rearranged to Contain Substring

function stringCount(n) {
    let dp000 = 1, dp001 = 0, dp010 = 0, dp011 = 0, dp100 = 0, dp101 = 0;
    let dp110 = 0, dp111 = 0, dp200 = 0, dp201 = 0, dp210 = 0, dp211 = 0;
    const mod = 1000000007;
    while (n--) {
        const next000 = 23 * dp000 % mod;
        const next001 = (24 * dp001 + dp000) % mod;
        const next010 = (24 * dp010 + dp000) % mod;
        const next011 = (25 * dp011 + dp001 + dp010) % mod;
        const next100 = (23 * dp100 + dp000) % mod;
        const next101 = (24 * dp101 + dp001 + dp100) % mod;
        const next110 = (24 * dp110 + dp010 + dp100) % mod;
        const next111 = (25 * dp111 + dp011 + dp101 + dp110) % mod;
        const next200 = (24 * dp200 + dp100) % mod;
        const next201 = (25 * dp201 + dp101 + dp200) % mod;
        const next210 = (25 * dp210 + dp110 + dp200) % mod;
        const next211 = (26 * dp211 + dp111 + dp201 + dp210) % mod;
        dp000 = next000, dp001 = next001, dp010 = next010, dp011 = next011;
        dp100 = next100, dp101 = next101, dp110 = next110, dp111 = next111;
        dp200 = next200, dp201 = next201, dp210 = next210, dp211 = next211;
    }
    return dp211;
}
