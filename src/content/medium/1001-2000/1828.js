// 1828 - Queries on Number of Points Inside a Circle

function countPoints(points, queries) {
    const count = new Array(queries.length).fill(0);
    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < points.length; j++) {
            const t1 = (queries[i][0] - points[j][0]) ** 2;
            const t2 = (queries[i][1] - points[j][1]) ** 2;
            Math.sqrt(t1 + t2) <= queries[i][2] && count[i]++;
        }
    }
    return count;
}
