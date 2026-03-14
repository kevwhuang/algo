// 2844 - Minimum Operations to Make a Special Number

function minimumOperations(num) {
    function find(a, b) {
        const idx1 = num.lastIndexOf(b);
        if (idx1 < 1) return;
        const idx2 = num.lastIndexOf(a, idx1 - 1);
        if (idx2 === -1) return;
        min = Math.min(num.length - idx2 - 2, min);
    }
    let min = num.length;
    find(0, 0);
    find(2, 5);
    find(5, 0);
    find(7, 5);
    if (min < num.length) return min;
    return num.includes('0') ? min - 1 : min;
}
