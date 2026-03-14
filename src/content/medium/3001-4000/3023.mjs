// 3023 - Find Pattern in Infinite Stream I

function findPattern(stream, pattern) {
    const lps = [0];
    let i = 0, j = 0;
    while (++i < pattern.length) {
        while (j && pattern[i] !== pattern[j]) j = lps[j - 1];
        if (pattern[i] == pattern[j]) j++;
        lps.push(j);
    }
    i = 0, j = 0;
    while (++i && j !== pattern.length) {
        const cur = stream.next();
        while (j && pattern[j] !== cur) j = lps[j - 1];
        if (pattern[j] === cur) j++;
    }
    return i - pattern.length - 1;
}
