// 3228 - Maximum Number of Operations to Move Ones to the End

function maxOperations(s) {
    let ops = 0, ones = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') ones++;
        else if (i && s[i - 1] > s[i]) ops += ones;
    }
    return ops;
}
