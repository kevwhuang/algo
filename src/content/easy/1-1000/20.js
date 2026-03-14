// 20 - Valid Parentheses

function isValid(s) {
    const S = [], dict = { ')': '(', ']': '[', '}': '{' };
    for (let i = 0; i < s.length; i++) {
        if (!dict[s[i]]) S.push(s[i]);
        else if (dict[s[i]] !== S.pop()) return false;
    }
    return S.length === 0;
}
