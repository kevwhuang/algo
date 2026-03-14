// 3 - Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
    let res = 0, l = 0, r = 0;
    const arr = new Int16Array(95).fill(-1);
    while (r < s.length) {
        const key = s.charCodeAt(r) - 32;
        l = Math.max(arr[key], l);
        res = Math.max(r - l + 1, res);
        arr[key] = ++r;
    }
    return res;
}
