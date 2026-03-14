// 2520 - Count the Digits That Divide a Number

function countDigits(num) {
    let count = 0;
    const str = String(num);
    for (let i = 0; i < str.length; i++) {
        if (num % str[i] === 0) count++;
    }
    return count;
}
