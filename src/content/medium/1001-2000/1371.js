// 1371 - Find the Longest Substring Containing Vowels in Even Counts

function findTheLongestSubstring(s) {
    let max = 0, mask = 0;
    const map = new Map([[0, -1]]);
    const obj = { a: 1, e: 2, i: 4, o: 8, u: 16 };
    for (let i = 0; i < s.length; i++) {
        mask ^= obj[s[i]] ?? 0;
        if (!map.has(mask)) map.set(mask, i);
        else max = Math.max(i - map.get(mask), max);
    }
    return max;
}
