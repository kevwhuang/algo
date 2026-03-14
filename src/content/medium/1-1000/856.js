// 856 - Score of Parentheses

function scoreOfParentheses(s) {
    let score = 0, depth = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === '(') {
            depth++;
        } else {
            if (s[i - 1] === '(') score += 2 ** depth;
            depth--;
        }
    }
    return score;
}
