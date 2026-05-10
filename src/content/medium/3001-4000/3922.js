// 3922. Minimum Flips to Make Binary String Coherent

function minFlips(s) {
    let sum = 0, i = -1;
    while (++i < s.length) if (s[i] === '1') sum++;
    const d = sum - (s[0] === '1') - (s.at(-1) === '1');
    return Math.max(0, Math.min(sum - 1, s.length - sum, d));
}
