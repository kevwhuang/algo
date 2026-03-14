// 1776 - Car Fleet II

function getCollisionTimes(cars) {
    if (!this.S) S = new Uint32Array(100000);
    const res = new Float64Array(cars.length).fill(-1);
    for (let i = cars.length - 1, j = -1; ~i; i--) {
        const a = cars[i][0], b = cars[i][1];
        while (~j) {
            const k = S[j], c = cars[k][0], d = cars[k][1];
            if (d < b && (res[k] < 0 || res[k] > (c - a) / (b - d))) break;
            j--;
        }
        if (~j) res[i] = (cars[S[j]][0] - a) / (b - cars[S[j]][1]);
        S[++j] = i;
    }
    return res;
}
