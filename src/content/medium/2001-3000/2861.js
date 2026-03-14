// 2861 - Maximum Number of Alloys

function maxNumberOfAlloys(n, k, budget, composition, stock, cost) {
    let max = 0;
    for (let i = 0; i < k; i++) {
        const machine = composition[i];
        let l = 0, r = 1e9;
        while (l <= r) {
            const m = Math.floor((l + r) / 2);
            let price = 0;
            for (let j = 0; j < n; j++) {
                const count = m * machine[j] - stock[j];
                price += Math.max(0, count) * cost[j];
            }
            if (price <= budget) l = m + 1;
            else r = m - 1;
        }
        max = Math.max(l - 1, max);
    }
    return max;
}
