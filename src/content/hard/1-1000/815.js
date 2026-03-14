// 815 - Bus Routes

function numBusesToDestination(routes, source, target) {
    if (source === target) return 0;
    let max = 0;
    routes.forEach(e => max = Math.max(...e, max));
    const C = new Uint32Array(max + 1).fill(1e9);
    C[source] = 0;
    while (true) {
        let flag;
        for (let i = 0; i < routes.length; i++) {
            const arr = routes[i];
            const min = arr.reduce((s, e) => Math.min(C[e], s), 1e9) + 1;
            for (let j = 0; j < arr.length; j++) {
                if (C[arr[j]] > min) C[arr[j]] = min, flag = true;
            }
        }
        if (!flag) break;
    }
    return C[target] < 1e9 ? C[target] : -1;
}
