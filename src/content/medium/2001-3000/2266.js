// 2266 - Count Number of Texts

function countTexts(pressedKeys) {
    const dp = new Uint32Array(pressedKeys.length + 1);
    dp[0] = 1;
    for (let i = 1; i < dp.length; i++) {
        const s = pressedKeys[i - 1];
        const min = Math.min(s % 7 && s % 9 ? 3 : 4, i);
        for (let j = 1; j <= min && pressedKeys[i - j] === s; j++) {
            dp[i] = (dp[i] + dp[i - j]) % 1000000007;
        }
    }
    return dp.at(-1);
}
