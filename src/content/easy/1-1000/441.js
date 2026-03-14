// 441 - Arranging Coins

function arrangeCoins(n) {
    return Math.floor(Math.sqrt(2 * n + .25) - .5);
}
