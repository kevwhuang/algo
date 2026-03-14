// 1742 - Maximum Number of Balls in a Box

function countBalls(lowLimit, highLimit) {
    let max = 1;
    const map = new Map();
    for (let i = lowLimit; i <= highLimit; i++) {
        let sum = 0, num = i;
        while (num) sum += num % 10, num = num / 10 >> 0;
        map.set(sum, (map.get(sum) ?? 0) + 1);
        max = Math.max(map.get(sum), max);
    }
    return max;
}
