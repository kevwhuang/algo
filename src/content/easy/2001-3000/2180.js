// 2180 - Count Integers With Even Digit Sum

function countEven(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        let sum = 0, cur = i;
        while (cur) {
            sum += cur % 10;
            cur = cur / 10 >> 0;
        }
        if (sum % 2 === 0) count++;
    }
    return count;
}
