// 2226 - Maximum Candies Allocated to K Children

function maximumCandies(candies, k) {
    let l = 0, r = Math.max(...candies);
    while (l <= r) {
        const m = l + r >> 1;
        let piles = 0;
        for (let i = 0; i < candies.length; i++) {
            piles += Math.floor(candies[i] / m);
        }
        if (piles >= k) l = m + 1;
        else r = m - 1;
    }
    return l - 1;
}
