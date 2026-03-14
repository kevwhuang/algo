// 3481 - Apply Substitutions

function applySubstitutions(replacements, text) {
    const map = new Map();
    replacements.forEach(e => map.set(`%${e[0]}%`, e[1]));
    while (true) {
        let flag;
        for (const e of map) {
            if (!e[1].includes('%')) continue;
            map.set(e[0], e[1].replace(/%.%/g, f => map.get(f)));
            flag = true;
        }
        if (!flag) break;
    }
    return text.replace(/%.%/g, e => map.get(e));
}
