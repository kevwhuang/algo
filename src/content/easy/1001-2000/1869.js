// 1869 - Longer Contiguous Segments of Ones Than Zeros

function checkZeroOnes(s) {
    let max1 = 0, max2 = 0, acc1 = 0, acc2 = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 0) acc2++, max1 = Math.max(acc1, max1), acc1 = 0;
        else acc1++, max2 = Math.max(acc2, max2), acc2 = 0;
    }
    return Math.max(max1, acc1) > Math.max(max2, acc2);
}
