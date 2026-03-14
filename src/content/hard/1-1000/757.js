// 757. Set Intersection Size at Least Two

function intersectionSizeTwo(intervals) {
    const M = intervals.sort((a, b) => a[1] - b[1]);
    let res = 2, a = M[0][1], b = a, i = 0;
    while (++i < M.length) {
        const l = M[i][0], r = M[i][1];
        if (l > b) res += 2, a = b = r;
        else if (l > a || l === b) res++, a = b, b = r;
    }
    return res;
}
