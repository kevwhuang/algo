// 1324 - Print Words Vertically

function printVertically(s) {
    const words = s.split(' ');
    const len = words.length;
    let longest = 0;
    for (let i = 0; i < len; i++) {
        longest = Math.max(words[i].length, longest);
    }
    const res = new Array(longest).fill('');
    for (let i = 0; i < longest; i++) {
        for (let j = 0; j < len; j++) {
            res[i] += words[j][i] ?? ' ';
        }
    }
    for (let i = 0; i < longest; i++) {
        if (res[i].at(-1) !== ' ') continue;
        res[i] = res[i].trimEnd();
    }
    return res;
}
