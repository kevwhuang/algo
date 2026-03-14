// 159 - Longest Substring With at Most Two Distinct Characters

function lengthOfLongestSubstringTwoDistinct(s) {
    let max = 0;
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const set = new Set();
        for (let j = i; j < len; j++) {
            set.add(s.charAt(j));
            if (set.size > 2) break;
            max = Math.max(j - i + 1, max);
        }
    }
    return max;
}
