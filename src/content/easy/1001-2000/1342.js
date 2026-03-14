// 1342 - Number of Steps to Reduce a Number to Zero

function numberOfSteps(num) {
    let steps = 0;
    while (num) {
        if (num % 2) num--;
        else num /= 2;
        steps++;
    }
    return steps;
}
