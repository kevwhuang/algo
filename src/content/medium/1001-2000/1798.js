// 1798 - Maximum Number of Consecutive Values You Can Make

function getMaximumConsecutive(coins) {
    coins.sort((a, b) => a - b);
    let count = 1;
    for (let i = 0; i < coins.length; i++) {
        if (coins[i] <= count) count += coins[i];
        else break;
    }
    return count;
}
