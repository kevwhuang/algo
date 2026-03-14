// 2207 - Maximize Number of Subsequences in a String

function maximumSubsequenceCount(text, pattern) {
    let count = 0, fa = 0, fb = 0;
    const a = pattern[0], b = pattern[1];
    for (let i = 0; i < text.length; i++) {
        if (text[i] === a) fa++;
        else if (text[i] === b) count += fa, fb++;
    }
    return a === b ? fa * (fa + 1) / 2 : count + Math.max(fa, fb);
}
