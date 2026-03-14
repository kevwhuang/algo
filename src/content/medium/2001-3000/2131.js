// 2131 - Longest Palindrome by Concatenating Two Letter Words

function longestPalindrome(words) {
    const map = new Map();
    for (let i = 0; i < words.length; i++) {
        map.set(words[i], (map.get(words[i]) ?? 0) + 1);
    }
    let count = 0, center = 0;
    for (const e of map.keys()) {
        if (e[0] === e[1]) {
            count += map.get(e) / 2 >> 0;
            if (map.get(e) & 1) center = 2;
        } else {
            const rvs = e[1] + e[0];
            if (!map.has(rvs)) continue;
            count += Math.min(map.get(e), map.get(rvs));
            map.delete(rvs);
        }
    }
    return 4 * count + center;
}
