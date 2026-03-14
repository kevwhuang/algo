// 2491 - Divide Players Into Teams of Equal Skill

function dividePlayers(skill) {
    const bucket = new Array(1001).fill(0);
    for (let i = 0; i < skill.length; i++) {
        bucket[skill[i]]++;
    }
    let chemistry = 0, l = 0, r = 1000, tgt;
    while (true) {
        while (bucket[l] === 0) l++;
        if (l === 1001) break;
        bucket[l]--;
        while (bucket[r] === 0) r--;
        bucket[r]--;
        if (!tgt) tgt = l + r;
        if (l + r !== tgt) return -1;
        chemistry += l * r;
    }
    return chemistry;
}
