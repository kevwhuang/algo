// 3016 - Minimum Number of Pushes to Type Word II

function minimumPushes(word) {
    const B = Array.from({ length: 26 }, (_, i) => [i, 0]);
    for (let i = 0; i < word.length; i++) {
        B[word.charCodeAt(i) - 97][1]++;
    }
    B.sort((a, b) => b[1] - a[1]);
    const arr = new Array(26);
    for (let i = 0, inc = 1; i < 26; i++) {
        arr[B[i][0]] = inc;
        if ((i + 1) % 8 === 0) inc++;
    }
    let res = 0;
    for (let i = 0; i < word.length; i++) {
        res += arr[word.charCodeAt(i) - 97];
    }
    return res;
}
