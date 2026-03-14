// 1871 - Jump Game VII

function canReach(s, minJump, maxJump) {
    if (s.at(-1) === '1') return false;
    const n = s.length, nn = n - 1, dp = new Uint8Array(n);
    dp[0] = 1;
    for (let l = 0, r = 0; l < n; l++) {
        if (s[l] === '1' || dp[l] === 0) continue;
        r = Math.max(l + minJump, r);
        if (r >= n) break;
        const min = Math.min(l + maxJump, nn);
        if (min === nn) return true;
        while (r <= min) dp[r] = s[r++] === '0';
    }
    return false;
}
