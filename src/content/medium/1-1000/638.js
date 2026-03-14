// 638 - Shopping Offers

function shoppingOffers(price, special, needs) {
    function backtrack(acc) {
        let sum = 0, i = -1;
        while (++i < n) sum += price[i] * (needs[i] - cur[i]);
        res = Math.min(acc + sum, res), i = -1;
        while (++i < M.length) {
            const arr = M[i];
            let j = -1;
            while (++j < n && cur[j] + arr[j] <= needs[j]) cur[j] += arr[j];
            if (j === n) backtrack(acc + arr[n]);
            while (~--j) cur[j] -= arr[j];
        }
    }
    special.sort((a, b) => b[0] - a[0] || a.at(-1) - b.at(-1));
    const M = [special[0]], n = price.length;
    for (let i = 1; i < special.length; i++) {
        let j = 0;
        while (j < n && special[i][j] === M.at(-1)[j]) j++;
        if (j < n) M.push(special[i]);
    }
    let res = Infinity;
    const cur = new Uint16Array(n);
    backtrack(0);
    return res;
}
