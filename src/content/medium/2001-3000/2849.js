// 2849 - Determine If a Cell Is Reachable at a Given Time

function isReachableAtTime(sx, sy, fx, fy, t) {
    if (sx === fx && sy === fy) return t !== 1;
    return Math.abs(sx - fx) <= t && Math.abs(sy - fy) <= t;
}
