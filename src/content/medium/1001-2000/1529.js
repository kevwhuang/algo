// 1529 - Minimum Suffix Flips

function minFlips(target) {
    let ops = 0;
    for (let i = 0, cur = 0; i < target.length; i++) {
        if (target[i] == cur) continue;
        cur = cur === 0 ? 1 : 0;
        ops++;
    }
    return ops;
}
