// 2810 - Faulty Keyboard

function finalString(s) {
    const res = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'i') res.reverse();
        else res.push(s[i]);
    }
    return res.join('');
}
