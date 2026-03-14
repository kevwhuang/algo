// 2734 - Lexicographically Smallest String After Substring Operation

function smallestString(s) {
    let l = 0;
    while (s[l] === 'a') l++;
    if (l === s.length) return 'a'.repeat(s.length - 1).concat('z');
    let r = s.indexOf('a', l + 1);
    if (r === -1) r = s.length;
    let mid = '';
    for (let i = l; i < r; i++) {
        mid += String.fromCharCode(s.charCodeAt(i) - 1);
    }
    return `${s.slice(0, l)}${mid}${s.slice(r)}`;
}
