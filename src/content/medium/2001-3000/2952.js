// 2952 - Minimum Number of Coins to Be Added

function minimumAddedCoins(coins, target) {
    coins = new Uint32Array(coins).sort();
    let res = 0, max = 0, i = 0;
    while (max < target) {
        if (i < coins.length && coins[i] <= max + 1) max += coins[i++];
        else res++, max += max + 1;
    }
    return res;
}
