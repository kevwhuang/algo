// 2730 - Find the Longest Semi-Repetitive Substring

function longestSemiRepetitiveSubstring(s) {
    let max = 1, repeat, l = 0, r = 0;
    while (++r < s.length) {
        if (s[r - 1] === s[r]) {
            if (repeat) while (++l < r && s[l - 1] !== s[l]) { }
            else repeat = true;
        }
        max = Math.max(r - l + 1, max);
    }
    return max;
}
