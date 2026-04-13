// 3899. Angles of a Triangle

function internalAngles(sides) {
    sides.sort((a, b) => a - b);
    const a = sides[0], b = sides[1], c = sides[2], k = 180 / Math.PI;
    const d = k * Math.acos((b * b + c * c - a * a) / (2 * b * c));
    const e = k * Math.acos((a * a + c * c - b * b) / (2 * a * c));
    const f = k * Math.acos((a * a + b * b - c * c) / (2 * a * b));
    return d ? [d, e, f] : [];
}
