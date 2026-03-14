// 1792 - Maximum Average Pass Ratio

function maxAverageRatio(classes, extraStudents) {
    function comparator(a, b) {
        const diffA = (a[1] - a[0]) / (a[1] * a[1] + a[1]);
        const diffB = (b[1] - b[0]) / (b[1] * b[1] + b[1]);
        return diffB - diffA;
    }
    let sum = 0;
    const pq = new PriorityQueue({ compare: comparator });
    for (let i = 0; i < classes.length; i++) {
        sum += classes[i][0] / classes[i][1];
        pq.enqueue(classes[i]);
    }
    while (extraStudents--) {
        const cur = pq.dequeue();
        sum = sum - cur[0] / cur[1] + ++cur[0] / ++cur[1];
        pq.enqueue(cur);
    }
    return sum / classes.length;
}
