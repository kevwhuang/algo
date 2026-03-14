// 1624 - Largest Substring Between Two Equal Characters

function maxLengthBetweenEqualCharacters(s) {
    let max = -1;
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!map.has(s[i])) map.set(s[i], i);
        else max = Math.max(i - map.get(s[i]) - 1, max);
    }
    return max;
}
