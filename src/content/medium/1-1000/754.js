// 754 - Reach a Number

function reachNumber(target) {
    target = Math.abs(target);
    let moves = 0, sum = 0;
    while (sum < target) sum += ++moves;
    while ((target - sum) % 2) sum += ++moves;
    return moves;
}
