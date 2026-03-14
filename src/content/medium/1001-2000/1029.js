// 1029 - Two City Scheduling

function twoCitySchedCost(costs) {
    costs.sort((a, b) => a[0] + b[1] - a[1] - b[0]);
    let cost = 0;
    const m = costs.length / 2;
    for (let i = 0; i < m; i++) {
        cost += costs[i][0] + costs[i + m][1];
    }
    return cost;
}
