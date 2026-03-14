// 3019 - Number of Changing Keys

function countKeyChanges(s) {
    let res = 0, cur = s[0].toLowerCase(), i = 0;
    while (++i < s.length) {
        if (s[i].toLowerCase() === cur) continue;
        res++, cur = s[i].toLowerCase();
    }
    return res;
}
