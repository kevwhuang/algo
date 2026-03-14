// 3174 - Clear Digits

function clearDigits(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if ('a' <= s[i] && s[i] <= 'z') stack.push(s[i]);
        else stack.pop();
    }
    return stack.join('');
}
