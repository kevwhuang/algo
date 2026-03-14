// 3387 - Maximize Amount After Two Days of Conversions

function maxAmount(initialCurrency, pairs1, rates1, pairs2, rates2) {
    function check(pairs, rates) {
        for (let i = 0; i < pairs.length; i++) {
            for (let j = 0; j < pairs.length; j++) {
                const u = pairs[j][0], v = pairs[j][1], w = rates[j];
                C[u] ??= 0, C[v] ??= 0;
                C[u] = Math.max(C[v] / w, C[u]);
                C[v] = Math.max(C[u] * w, C[v]);
            }
        }
    }
    const C = { [initialCurrency]: 1 };
    check(pairs1, rates1);
    check(pairs2, rates2);
    return C[initialCurrency];
}
