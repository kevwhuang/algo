// 1620 - Coordinate With Maximum Network Quality

function bestCoordinate(towers, radius) {
    if (towers.length === 1 && towers[0][2] === 0) return [0, 0];
    radius *= radius;
    let xMin = 50, xMax = 0, yMin = 50, yMax = 0;
    for (let i = 0; i < towers.length; i++) {
        if (towers[i][0] < xMin) xMin = towers[i][0];
        if (towers[i][0] > xMax) xMax = towers[i][0];
        if (towers[i][1] < yMin) yMin = towers[i][1];
        if (towers[i][1] > yMax) yMax = towers[i][1];
    }
    let res = new Uint8Array(2), max = -1;
    for (let x = xMin; x <= xMax; x++) {
        for (let y = yMin; y <= yMax; y++) {
            let quality = 0;
            for (let i = 0; i < towers.length; i++) {
                const dist = (x - towers[i][0]) ** 2 + (y - towers[i][1]) ** 2;
                if (dist > radius) continue;
                quality += towers[i][2] / (1 + Math.sqrt(dist)) >> 0;
            }
            if (quality <= max) continue;
            res[0] = x, res[1] = y, max = quality;
        }
    }
    return res;
}
