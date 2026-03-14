// 3647 - Maximum Weight in Two Bags

function maxWeight(weights, w1, w2) {
    if (!this.dp1) dp1 = new Array(301), dp2 = new Array(301);
    dp1.fill(0n, 0, w1 + 1)[0] = 1n;
    const mask = (1n << BigInt(w2 + 1)) - 1n;
    for (let i = 0; i < weights.length; i++) {
        let cur = weights[i];
        if (cur > w1 && cur > w2) continue;
        const k = BigInt(cur);
        for (let j = 0; j <= w1; j++) {
            dp2[j] = dp1[j] | dp1[j] << k & mask;
        }
        for (let j = w1; j >= cur; j--) {
            dp2[j] |= dp1[j - cur];
        }
        cur = dp1, dp1 = dp2, dp2 = cur;
    }
    let res = 0;
    for (let i = 0; i <= w1; i++) {
        let acc = -1, cur = dp1[i];
        while (cur) acc++, cur >>= 1n;
        if (dp1[i]) res = Math.max(i + acc, res);
    }
    return res;
}
