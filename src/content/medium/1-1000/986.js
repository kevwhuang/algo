// 986 - Interval List Intersections

function intervalIntersection(firstList, secondList) {
    const intersections = [];
    let i = 0, j = 0;
    while (i < firstList.length && j < secondList.length) {
        const l1 = firstList[i][0], r1 = firstList[i][1];
        const l2 = secondList[j][0], r2 = secondList[j][1];
        if (r1 < l2) ++i;
        else if (r2 < l1) ++j;
        else if (l1 < l2 && r1 < r2 && ++i) intersections.push([l2, r1]);
        else if (l2 < l1 && r2 < r1 && ++j) intersections.push([l1, r2]);
        else if (l2 <= l1 && r1 <= r2 && ++i) intersections.push([l1, r1]);
        else if (++j) intersections.push([l2, r2]);
    }
    return intersections;
}
