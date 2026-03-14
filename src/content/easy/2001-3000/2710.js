// 2710 - Remove Trailing Zeros From a String

function removeTrailingZeros(num) {
    let i = num.length - 1;
    while (~i && num[i] === '0') i--;
    return num.slice(0, i + 1);
}
