// 1047 - Remove All Adjacent Duplicates in String

function removeDuplicates(s) {
    s = s.split('');
    let idx = 0;
    for (let i = 0; i < s.length; i++) {
        if (idx && s[i] === s[idx - 1]) idx--;
        else s[idx++] = s[i];
    }
    return s.slice(0, idx).join('');
}
