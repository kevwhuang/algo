// 2838 - Maximum Coins Heroes Can Collect

function maximumCoins(heroes, monsters, coins) {
    heroes = heroes.map((e, i) => [e, i]);
    heroes.sort((a, b) => a[0] - b[0]);
    monsters = monsters.map((e, i) => [e, coins[i]]);
    monsters.sort((a, b) => a[0] - b[0]);
    const res = new Array(heroes.length);
    const m = heroes.length, n = monsters.length;
    let acc = 0, i = 0, j = 0;
    while (i < m) {
        while (j < n && heroes[i][0] >= monsters[j][0]) {
            acc += monsters[j++][1];
        }
        res[heroes[i++][1]] = acc;
    }
    return res;
}
