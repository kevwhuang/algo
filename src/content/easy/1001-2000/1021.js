// 1021 - Remove Outermost Parentheses

function removeOuterParentheses(s) {
    let res = '', acc = 0, i = -1;
    while (++i < s.length) {
        if (s[i] === '(' && acc++ !== 0) res += '(';
        else if (s[i] === ')' && acc-- !== 1) res += ')';
    }
    return res;
}
