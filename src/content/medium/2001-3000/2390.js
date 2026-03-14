// 2390 - Removing Stars From a String

function removeStars(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        s[i] === '*' ? stack.pop() : stack.push(s[i]);
    }
    return stack.join('');
}
