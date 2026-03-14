// 2517 - Maximum Tastiness of Candy Basket

function maximumTastiness(price, k) {
    price = new Uint32Array(price).sort();
    let l = 0, r = price.at(-1) - price[0];
    while (l <= r) {
        const m = l + r >> 1;
        let candies = 1, i = 0;
        while (i < price.length) {
            let j = i;
            while (++j < price.length) {
                if (price[j] - price[i] < m) continue;
                candies++;
                break;
            }
            i = j;
        }
        if (candies >= k) l = m + 1;
        else r = m - 1;
    }
    return l - 1;
}
