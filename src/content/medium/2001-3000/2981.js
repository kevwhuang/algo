// 2981 - Find Longest Special Substring That Occurs Thrice I

function maximumLength(s) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        let substring = '', j = i;
        while (s[i] === s[j]) {
            substring += s[j++];
            map.set(substring, map.get(substring) + 1 || 1);
        }
    }
    let max = -1;
    for (const e of map) {
        if (e[1] >= 3) max = Math.max(e[0].length, max);
    }
    return max;
}
