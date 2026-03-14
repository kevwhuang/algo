// 1614 - Maximum Nesting Depth of the Parentheses

function maxDepth(s) {
    let max = 0, acc = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') max = Math.max(++acc, max);
        else if (s[i] === ')') acc--;
    }
    return max;
}
