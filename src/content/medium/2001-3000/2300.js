// 2300 - Successful Pairs of Spells and Potions

function successfulPairs(spells, potions, success) {
    potions.sort((a, b) => a - b).push(Infinity);
    const end = potions.length - 1;
    const res = new Array(spells.length);
    for (let i = 0; i < spells.length; i++) {
        const target = success / spells[i];
        let l = 0, r = end;
        while (l < r) {
            const m = ~~((l + r) / 2);
            if (potions[m] < target) l = m + 1;
            else if (potions[m] >= target) r = m;
        }
        res[i] = l === end ? 0 : end - l;
    }
    return res;
}
