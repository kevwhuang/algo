// 2481 - Minimum Cuts to Divide a Circle

function numberOfCuts(n) {
    return n === 1 ? 0 : n % 2 ? n : n / 2;
}
