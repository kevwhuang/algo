// 3362 - Zero Array Transformation III

function maxRemoval(nums, queries) {
    let acc = 0, i = -1, j = 0;
    const M = queries.sort((a, b) => a[0] - b[0]);
    const arr = new Int32Array(nums.length + 1);
    const pq = new PriorityQueue({ compare: (a, b) => b - a });
    while (++i < nums.length) {
        acc += arr[i];
        while (j < M.length && M[j][0] <= i) pq.enqueue(M[j++][1]);
        while (acc < nums[i] && pq.size() && i <= pq.front()) {
            acc++, arr[pq.dequeue() + 1]--;
        }
        if (acc < nums[i]) return -1;
    }
    return pq.size();
}
