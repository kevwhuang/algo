// 186 - Reverse Words in a String II

function reverseWords(s) {
    const arr = s.join('').split(' ');
    let l = 0, r = arr.length - 1;
    while (l < r) [arr[l++], arr[r--]] = [arr[r], arr[l]];
    for (let i = 0, j = 0; i < s.length; i++, j++) {
        const word = arr[j];
        for (let k = 0; k < word.length; i++, k++) {
            s[i] = word[k];
        }
        if (i !== s.length) s[i] = ' ';
    }
}
