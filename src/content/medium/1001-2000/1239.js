// 1239 - Maximum Length of a Concatenated String With Unique Characters

function maxLength(arr) {
    function backtrack(i, mask) {
        for (let j = 0; j < arr[i].length; j++) {
            const bit = 1 << arr[i].charCodeAt(j) - 97;
            if (mask & bit) return;
            mask |= bit;
        }
        while (++i < arr.length) backtrack(i, mask);
        let ones = 0;
        while (mask) {
            if (mask & 1) ones++;
            mask >>= 1;
        }
        if (ones > max) max = ones;
    }
    let max = 0, i = -1;
    while (++i < arr.length) backtrack(i, 0);
    return max;
}
