// 1680 - Concatenation of Consecutive Binary Numbers

function concatenatedBinary(n) {
    let res = 1, width = 4;
    for (let i = 2; i <= n; i++) {
        if (i === width) width *= 2;
        res = (res * width + i) % 1000000007;
    }
    return res;
}
