// 537 - Complex Number Multiplication

function complexNumberMultiply(num1, num2) {
    const [r1, i1] = num1.slice(0, -1).split('+');
    const [r2, i2] = num2.slice(0, -1).split('+');
    return `${r1 * r2 - i1 * i2}+${r1 * i2 + r2 * i1}i`;
}
