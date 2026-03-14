// 2864 - Maximum Odd Binary Number

function maximumOddBinaryNumber(s) {
    let ones = -1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') ones++;
    }
    return '1'.repeat(ones) + '0'.repeat(s.length - ones - 1) + '1';
}
