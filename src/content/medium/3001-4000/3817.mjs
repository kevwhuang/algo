// 3817 - Good Indices in a Digit String

function goodIndices(s) {
    const res = [];
    for (let i = 0; i < s.length; i++) {
        if (s.endsWith(i, i + 1)) res.push(i);
    }
    return res;
}
