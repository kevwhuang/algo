// 1422 - Maximum Score After Splitting a String

function maxScore(s) {
    let left = Number(s[0] === '0'), right = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '1') right++;
    }
    let score = left + right;
    for (let i = 1; i < s.length - 1; i++) {
        s[i] === '0' ? left++ : right--;
        score = Math.max(left + right, score);
    }
    return score;
}
