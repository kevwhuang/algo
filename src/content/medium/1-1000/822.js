// 822 - Card Flipping Game

function flipgame(fronts, backs) {
    const ints = new Set();
    const banned = new Set();
    for (let i = 0; i < fronts.length; i++) {
        if (fronts[i] === backs[i]) banned.add(fronts[i]);
        else ints.add(fronts[i]).add(backs[i]);
    }
    const vals = [...ints.values()].sort((a, b) => a - b);
    for (let i = 0; i < vals.length; i++) {
        if (!banned.has(vals[i])) return vals[i];
    }
    return 0;
}
