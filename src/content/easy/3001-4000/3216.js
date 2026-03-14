// 3216 - Lexicographically Smallest String After a Swap

function getSmallestString(s) {
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] % 2 !== s[i] % 2) continue;
        if (s[i - 1] <= s[i]) continue;
        return `${s.slice(0, i - 1)}${s[i]}${s[i - 1]}${s.slice(i + 1)}`;
    }
    return s;
}
