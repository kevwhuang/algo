// 68 - Text Justification

function fullJustify(words, maxWidth) {
    const res = [], n = words.length;
    let i = 0;
    while (i < n) {
        const arr = [words[i]];
        let acc = arr[0].length;
        while (++i < n && words[i].length + acc + 1 <= maxWidth) {
            arr.push(' ', words[i]);
            acc += words[i].length + 1;
        }
        if (i === n || arr.length === 1) {
            res.push(arr.join``.padEnd(maxWidth, ' '));
            continue;
        }
        let j = 1;
        while (acc++ < maxWidth) {
            arr[j] += ' ';
            if ((j += 2) === arr.length) j = 1;
        }
        res.push(arr.join``);
    }
    return res;
}
