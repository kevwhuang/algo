// 1249 - Minimum Remove to Make Valid Parentheses

function minRemoveToMakeValid(s) {
    s = s.split('');
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            if (stack.length) stack.pop();
            else s[i] = '';
        }
    }
    for (let i = 0; i < stack.length; i++) {
        s[stack[i]] = '';
    }
    return s.join('');
}
