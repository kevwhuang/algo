// 3809 - Best Reachable Tower

function bestTower(towers, center, radius) {
    let res = [-1, -1], max = -1;
    const xx = center[0], yy = center[1];
    for (let i = 0; i < towers.length; i++) {
        const x = towers[i][0], y = towers[i][1], w = towers[i][2];
        if (Math.abs(x - xx) + Math.abs(y - yy) > radius || w < max) continue;
        if (w > max || x < res[0]) res[0] = x, res[1] = y, max = w;
        else if (x === res[0] && y < res[1]) res[0] = x, res[1] = y;
    }
    return res;
}
