// 991 - Broken Calculator

function brokenCalc(startValue, target) {
    let ops = 0;
    while (startValue < target) {
        target = target % 2 ? target + 1 : target / 2;
        ops++;
    }
    return ops + startValue - target;
}
