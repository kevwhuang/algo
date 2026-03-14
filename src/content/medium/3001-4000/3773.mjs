// 3773 - Maximum Number of Equal Length Runs

function maxSameLengthRuns(s) {
    const B = new Map();
    let prev = s[0], acc = 1, i = 0;
    while (++i < s.length) {
        if (s[i] === prev && acc++) continue;
        B.set(acc, (B.get(acc) ?? 0) + 1);
        prev = s[i], acc = 1;
    }
    B.set(acc, (B.get(acc) ?? 0) + 1);
    return Math.max(...B.values());
}
