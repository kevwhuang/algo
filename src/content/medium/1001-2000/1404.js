// 1404 - Number of Steps to Reduce a Number in Binary Representation to One

function numSteps(s) {
    let steps = 0, n = BigInt('0b' + s);
    while (n !== 1n) {
        n = n % 2n ? n + 1n : n / 2n;
        steps++;
    }
    return steps;
}
