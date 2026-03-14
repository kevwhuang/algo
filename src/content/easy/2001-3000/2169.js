// 2169 - Count Operations to Obtain Zero

function countOperations(num1, num2) {
    let ops = 0;
    while (num1 && num2 && ++ops) num1 >= num2 ? num1 -= num2 : num2 -= num1;
    return ops;
}
