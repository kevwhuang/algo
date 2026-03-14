// 3275 - Kth Nearest Obstacle Queries

function resultsArray(queries, k) {
    k--;
    const heap = new PriorityQueue({ compare: (a, b) => b - a });
    for (let i = 0; i < queries.length; i++) {
        const dist = Math.abs(queries[i][0]) + Math.abs(queries[i][1]);
        heap.enqueue(dist);
        if (i > k) heap.dequeue();
        queries[i] = i < k ? -1 : heap.front();
    }
    return queries;
}
