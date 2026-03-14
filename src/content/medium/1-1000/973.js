// 973 - K Closest Points to Origin

function kClosest(points, k) {
    const M = points;
    let l = M.length, r, ll = 0, rr = l - 1, m, cur;
    while (l !== k) {
        l = ll, r = rr, m = l + r >> 1;
        const tgt = M[m][0] ** 2 + M[m][1] ** 2;
        while (l <= r) {
            if (M[l][0] ** 2 + M[l][1] ** 2 < tgt) l++;
            else cur = M[l], M[l] = M[r], M[r--] = cur;
        }
        if (l < k) ll = l;
        else rr = l - 1;
    }
    return M.slice(0, k);
}
