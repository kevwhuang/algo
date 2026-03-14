// 2087 - Minimum Cost Homecoming of a Robot in a Grid

function minCost(startPos, homePos, rowCosts, colCosts) {
    let cost = 0;
    let inc = startPos[0] < homePos[0] ? 1 : -1;
    while (startPos[0] !== homePos[0]) {
        startPos[0] += inc;
        cost += rowCosts[startPos[0]];
    }
    inc = startPos[1] < homePos[1] ? 1 : -1;
    while (startPos[1] !== homePos[1]) {
        startPos[1] += inc;
        cost += colCosts[startPos[1]];
    }
    return cost;
}
