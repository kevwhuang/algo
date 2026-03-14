// 633 - Sum of Square Numbers

function judgeSquareSum(c) {
    let a = -1;
    const sqrt = Math.sqrt(c);
    while (++a <= sqrt) {
        if (Number.isInteger(Math.sqrt(c - a * a))) return true;
    }
    return false;
}
