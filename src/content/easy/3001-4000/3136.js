// 3136 - Valid Word

function isValid(word) {
    if (word.length < 3) return false;
    word = word.toLowerCase();
    let flag1, flag2;
    const set = new Set(['@', '#', '$']);
    const dict = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i < word.length; i++) {
        const s = word[i];
        if (set.has(s)) return false;
        if (parseInt(s)) continue;
        if (dict.has(s)) flag1 = true;
        else flag2 = true;
    }
    return flag1 && flag2 || false;
}
