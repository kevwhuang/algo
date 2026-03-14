// 1013 - Partition Array Into Three Parts With Equal Sum

function canThreePartsEqualSum(arr) {
    const tgt = arr.reduce((s, e) => s + e) / 3;
    if (tgt !== tgt >> 0) return false;
    let count = 0, acc = 0, i = 0;
    while (i < arr.length) {
        acc += arr[i++];
        if (acc === tgt) count++, acc = 0;
    }
    return count >= 3;
}
