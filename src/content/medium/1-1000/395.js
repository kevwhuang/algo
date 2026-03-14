// 395 - Longest Substring With at Least K Repeating Characters

function longestSubstring(s, k) {
    const len = s.length;
    if (len === 0 || k > len) return 0;
    const bucket = new Array(26).fill(0);
    const fn = 'charCodeAt';
    let i = 0;
    while (i < len) bucket[s[fn](i++) - 97]++;
    let idx = 0;
    while (idx < len && bucket[s[fn](idx) - 97] >= k) idx++;
    if (idx === len) return len;
    const left = longestSubstring(s.slice(0, idx), k);
    while (idx < len && bucket[s[fn](idx) - 97] < k) idx++;
    const right = longestSubstring(s.slice(idx), k);
    return Math.max(left, right);
}
