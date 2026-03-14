// 2900 - Longest Unequal Adjacent Groups Subsequence I

function getLongestSubsequence(words, groups) {
    const subsequence = [words[0]];
    for (let i = 1; i < words.length; i++) {
        if (groups[i - 1] === groups[i]) continue;
        subsequence.push(words[i]);
    }
    return subsequence;
}
