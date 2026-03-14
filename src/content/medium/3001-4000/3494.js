// 3494 - Find the Minimum Amount of Time to Brew Potions

function minTime(skill, mana) {
    const m = mana.length, n = skill.length;
    for (let i = 1; i < n; i++) {
        skill[i] += skill[i - 1];
    }
    let res = mana[m - 1] * skill[n - 1];
    for (let i = 1; i < m; i++) {
        const prev = mana[i - 1], cur = mana[i];
        let max = prev * skill[0];
        for (let j = 1; j < n; j++) {
            max = Math.max(prev * skill[j] - cur * skill[j - 1], max);
        }
        res += max;
    }
    return res;
}
