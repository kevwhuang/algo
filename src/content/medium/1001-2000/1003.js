// 1003 - Check If Word Is Valid After Substitutions

function isValid(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== 'c') {
            stack.push(s[i]);
        } else if (stack.at(-2) === 'a' && stack.at(-1) === 'b') {
            stack.pop();
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}
