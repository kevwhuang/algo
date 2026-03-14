// 2485 - Find the Pivot Integer

function pivotInteger(n) {
    let pivot = 1, leftSum = 0, rightSum = n * (n + 1) / 2;
    while (leftSum < rightSum) {
        leftSum += pivot;
        if (leftSum === rightSum) return pivot;
        rightSum -= pivot++;
    }
    return -1;
}
