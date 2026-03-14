// 1561 - Maximum Number of Coins You Can Get

function maxCoins(piles) {
    let n = Math.max(...piles);
    const bucket = new Array(n + 1).fill(0);
    for (let i = 0; i < piles.length; i++) {
        bucket[piles[i]]++;
    }
    let coins = 0, seen = 0;
    const bound = piles.length * 2 / 3;
    while (seen !== bound) {
        if (bucket[n] === 0 && n--) continue;
        bucket[n]--;
        if (seen++ & 1) coins += n;
    }
    return coins;
}
