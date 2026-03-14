// 2662 - Minimum Cost of a Path With Special Roads

function minimumCost(start, target, specialRoads) {
    const dist = (x1, y1, x2, y2) => Math.abs(x2 - x1) + Math.abs(y2 - y1);
    const A = specialRoads, costs = new Uint32Array(A.length);
    for (let i = 0; i < A.length; i++) {
        const cost1 = dist(start[0], start[1], A[i][2], A[i][3]);
        const cost2 = dist(start[0], start[1], A[i][0], A[i][1]) + A[i][4];
        costs[i] = Math.min(cost1, cost2);
    }
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (i === j) continue;
            const cost1 = dist(A[i][2], A[i][3], A[j][0], A[j][1]) + A[j][4];
            costs[j] = Math.min(costs[i] + cost1, costs[j]);
            const cost2 = dist(A[j][2], A[j][3], A[i][0], A[i][1]) + A[i][4];
            costs[i] = Math.min(costs[j] + cost2, costs[i]);
        }
    }
    let min = dist(start[0], start[1], target[0], target[1]);
    for (let i = 0; i < A.length; i++) {
        const cost = dist(A[i][2], A[i][3], target[0], target[1]);
        min = Math.min(costs[i] + cost, min);
    }
    return min;
}
