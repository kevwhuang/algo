// 447 - Number of Boomerangs

function numberOfBoomerangs(points) {
    let boomerangs = 0;
    for (let i = 0; i < points.length; i++) {
        const map = new Map();
        const x = points[i][0], y = points[i][1];
        for (let j = 0; j < points.length; j++) {
            let dist = (x - points[j][0]) ** 2;
            dist += (y - points[j][1]) ** 2;
            map.set(dist, (map.get(dist) ?? 0) + 1);
        }
        for (const freq of map.values()) {
            boomerangs += freq * (freq - 1);
        }
    }
    return boomerangs;
}
