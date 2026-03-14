// 557 - Reverse Words in a String III

function reverseWords(s) {
    s = s.split(' ');
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split('').reverse().join('');
    }
    return s.join(' ');
}
