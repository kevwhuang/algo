// 1599 - Maximum Profit of Operating a Centennial Wheel

function minOperationsMaxProfit(customers, boardingCost, runningCost) {
    function rotate() {
        gross += Math.min(4, queue) * boardingCost - runningCost;
        queue -= Math.min(4, queue);
        rotations++;
        if (gross <= max) return;
        res = rotations;
        max = gross;
    }
    let res = -1, rotations = 0, max = 0, gross = 0, queue = 0;
    for (let i = 0; i < customers.length; i++) {
        queue += customers[i];
        rotate();
    }
    while (queue) rotate();
    return res;
}
