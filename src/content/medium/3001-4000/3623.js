// 3623 - Count Number of Trapezoids I

function countTrapezoids(points) {
    const map = new Map();
    points.forEach(e => map.set(e[1], (map.get(e[1]) ?? 0) + 1));
    let res = 0n, acc = 0n;
    for (const e of map.values()) {
        const cur = BigInt((e * e - e) / 2);
        res = (res + acc * cur) % 1000000007n;
        acc = (acc + cur) % 1000000007n;
    }
    return Number(res);
}
