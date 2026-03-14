// 2116 - Check If a Parentheses String Can Be Valid

function canBeValid(s, locked) {
    if (s.length % 2) return false;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || locked[i] === '0') count++;
        else count--;
        if (count < 0) return false;
    }
    count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === ')' || locked[i] === '0') count++;
        else count--;
        if (count < 0) return false;
    }
    return true;
}
