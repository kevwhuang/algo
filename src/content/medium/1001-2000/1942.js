// 1942 - The Number of the Smallest Unoccupied Chair

function smallestChair(times, targetFriend) {
    const obj = {};
    const available = new PriorityQueue({ compare: (a, b) => a - b });
    let bound = times[targetFriend][0];
    for (let i = 0, n = 0; i < times.length; i++) {
        if (times[i][0] > bound) continue;
        obj[times[i][0]] = [times[i][1], i];
        available.enqueue(n++);
    }
    bound = String(bound);
    const unavailable = new PriorityQueue({ compare: (a, b) => a[0] - b[0] });
    for (const arrival in obj) {
        while (unavailable.size() && unavailable.front()[0] <= arrival) {
            available.enqueue(unavailable.dequeue()[1]);
        }
        if (arrival === bound) return available.front();
        unavailable.enqueue([obj[arrival][0], available.dequeue()]);
    }
}
