// 1544 - Make the String Great

function makeGood(s) {
    const S = [];
    for (let i = 0; i < s.length; i++) {
        const key = s.charCodeAt(i);
        const d = 97 <= key && key <= 122 ? -32 : 32;
        if (S.length && String.fromCharCode(key + d) === S.at(-1)) S.pop();
        else S.push(s[i]);
    }
    return S.join('');
}
