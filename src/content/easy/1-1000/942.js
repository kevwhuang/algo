// 942 - DI String Match

function diStringMatch(s) {
    const perm = [];
    let l = 0, r = s.length;
    for (let i = 0; i < s.length; i++) {
        s[i] === 'I' ? perm.push(l++) : perm.push(r--);
    }
    perm.push(l);
    return perm;
}
