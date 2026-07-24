// 780. Reaching Points

function reachingPoints(sx, sy, tx, ty) {
    while (tx > sx && ty > sy) {
        if (tx > ty) tx %= ty;
        else ty %= tx;
    }
    if (tx === sx) return ty >= sy && (ty - sy) % sx === 0;
    if (ty === sy) return tx >= sx && (tx - sx) % sy === 0;
    return false;
}
