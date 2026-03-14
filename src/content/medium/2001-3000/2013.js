// 2013 - Detect Squares

class DetectSquares {
    constructor() {
        this.B = new Map();
    }
    add(point) {
        const B = this.B, r = point[0], c = point[1];
        if (!B.has(r)) B.set(r, new Map());
        B.get(r).set(c, (B.get(r).get(c) ?? 0) + 1);
    }
    count(point) {
        const B = this.B, r = point[0], c = point[1];
        if (!B.has(r)) return 0;
        let res = 0, rr;
        for (const cc of B.get(r).keys()) {
            if (cc === c) continue;
            const a = B.get(r).get(cc);
            rr = r + c - cc;
            res += a * B.get(rr)?.get(c) * B.get(rr)?.get(cc) || 0;
            rr = r + cc - c;
            res += a * B.get(rr)?.get(c) * B.get(rr)?.get(cc) || 0;
        }
        return res;
    }
}
