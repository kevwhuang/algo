// 3218 - Minimum Cost for Cutting Cake I

function minimumCost(m, n, horizontalCut, verticalCut) {
    m--, n--;
    let cost = 0, i = 0, j = 0;
    const H = horizontalCut.sort((a, b) => b - a);
    const V = verticalCut.sort((a, b) => b - a);
    while (i < m && j < n) {
        cost += H[i] > V[j] ? H[i++] * (j + 1) : V[j++] * (i + 1);
    }
    while (i < m) cost += H[i++] * (j + 1);
    while (j < n) cost += V[j++] * (i + 1);
    return cost;
}
