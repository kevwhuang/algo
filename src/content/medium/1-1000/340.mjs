// 340 - Longest Substring With at Most K Distinct Characters

function lengthOfLongestSubstringKDistinct(s, k) {
    let max = 0, l = 0, r = 0;
    const map = new Map();
    while (r < s.length) {
        map.set(s[r], map.get(s[r++]) + 1 || 1);
        while (map.size > k) {
            const freq = map.get(s[l]) - 1;
            if (freq === 0) map.delete(s[l++]);
            else map.set(s[l++], freq);
        }
        max = Math.max(r - l, max);
    }
    return max;
}
