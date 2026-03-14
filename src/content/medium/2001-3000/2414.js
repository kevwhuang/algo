// 2414 - Length of the Longest Alphabetical Continuous Substring

function longestContinuousSubstring(s) {
    let longest = 1;
    for (let i = 0; i < s.length; i++) {
        let len = 1;
        while (s.charCodeAt(i) + 1 === s.charCodeAt(i + 1)) { len++; i++; }
        longest = Math.max(len, longest);
    }
    return longest;
}
