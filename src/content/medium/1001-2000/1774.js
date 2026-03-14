// 1774 - Closest Dessert Cost

function closestCost(baseCosts, toppingCosts, target) {
    function backtrack(i, acc) {
        const abs1 = Math.abs(acc - target);
        const abs2 = Math.abs(res - target);
        if (abs1 < abs2 || abs1 === abs2 && acc < res) res = acc;
        if (i === toppingCosts.length || acc >= target) return;
        backtrack(i + 1, acc);
        backtrack(i + 1, acc + toppingCosts[i]);
        backtrack(i + 1, acc + 2 * toppingCosts[i]);
    }
    let res = Infinity;
    for (let i = 0; i < baseCosts.length; i++) {
        backtrack(0, baseCosts[i]);
    }
    return res;
}
