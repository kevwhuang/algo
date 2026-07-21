// 3992. Rearrange String to Avoid Character Pair

function rearrangeString(s, x, y) {
    let res = '', acc = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === x) acc++;
        else res += s[i];
    }
    return res + x.repeat(acc);
}
