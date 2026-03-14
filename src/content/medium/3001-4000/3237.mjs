// 3237 - Alt and Tab Simulation

function simulationResult(windows, queries) {
    const set = new Set();
    for (let i = queries.length - 1; ~i; i--) {
        set.add(queries[i]);
    }
    windows.forEach(e => set.add(e));
    return [...set];
}
