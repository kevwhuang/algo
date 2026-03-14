// 1271 - Hexspeak

function toHexspeak(num) {
    let res = '';
    const s = Number(num).toString(16).toUpperCase();
    const set = new Set(['A', 'B', 'C', 'D', 'E', 'F', '0', '1']);
    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) return 'ERROR';
        res += s[i] === '0' ? 'O' : s[i] === '1' ? 'I' : s[i];
    }
    return res;
}
