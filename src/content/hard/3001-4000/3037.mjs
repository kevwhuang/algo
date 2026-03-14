// 3037 - Find Pattern in Infinite Stream II

function findPattern(stream, pattern) {
    const lps = [0], n = pattern.length;
    let i = 0, j = 0;
    while (++i < n) {
        while (j && pattern[i] !== pattern[j]) j = lps[j - 1];
        if (pattern[i] == pattern[j]) j++;
        lps.push(j);
    }
    i = 0, j = 0;
    while (++i && j !== n) {
        const cur = stream.next();
        while (j && pattern[j] !== cur) j = lps[j - 1];
        if (pattern[j] === cur) j++;
    }
    return i - n - 1;
}
