// 1156 - Swap for Longest Repeated Character Substring

function maxRepOpt1(text) {
    const obj = {};
    let i = 0;
    while (i < text.length) {
        const char = text[i], start = i++;
        while (text[i] === char) i++;
        if (!obj[char]) obj[char] = [];
        obj[char].push([start, i]);
    }
    let max = 1;
    for (const char in obj) {
        const intervals = obj[char];
        let d = intervals.length === 1 ? 0 : 1;
        max = Math.max(intervals[0][1] - intervals[0][0] + d, max);
        for (let i = 1; i < intervals.length; i++) {
            const start = intervals[i][0], end = intervals[i][1];
            max = Math.max(end - start + 1, max);
            if (intervals[i - 1][1] + 1 !== start) continue;
            d = intervals.length === 2 ? -1 : 0;
            max = Math.max(end - intervals[i - 1][0] + d, max);
        }
    }
    return max;
}
