// 763 - Partition Labels

function partitionLabels(s) {
    const arr = new Uint16Array(26);
    for (let i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - 97] = i;
    }
    const res = [];
    for (let max = 0, l = 0, r = 0; r < s.length; r++) {
        max = Math.max(arr[s.charCodeAt(r) - 97], max);
        if (r < max) continue;
        res.push(r - l + 1);
        l = r + 1;
    }
    return res;
}
