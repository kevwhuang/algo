// 4008. Minimum Initial Strength to Defeat All Monsters

function minInitialStrength(monsters, boosts) {
    const A = new Array(monsters.length).fill(0);
    for (let i = 0; i < boosts.length; i++) {
        const l = boosts[i][0], d = boosts[i][2];
        if (l) A[l - 1] -= d;
        A[boosts[i][1]] += d;
    }
    let res = 0;
    for (let acc = 0, i = monsters.length - 1; ~i; i--) {
        acc += A[i];
        if (res) res += monsters[i];
        else res = Math.max(0, monsters[i] - acc);
    }
    return res;
}
