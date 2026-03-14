// 1790 - Check If One String Swap Can Make Strings Equal

function areAlmostEqual(s1, s2) {
    const arr = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) arr.push(s1[i], s2[i]);
        if (arr.length === 6) return false;
    }
    if (arr.length === 0) return true;
    if (arr.length === 2) return false;
    return arr[0] === arr[3] && arr[1] === arr[2];
}
