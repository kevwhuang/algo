// 1882 - Process Tasks Using Servers

function assignTasks(servers, tasks) {
    const comparator1 = (a, b) => servers[a] - servers[b] || a - b;
    const comparator2 = (a, b) => a[0] - b[0];
    const available = new PriorityQueue({ compare: comparator1 });
    const unavailable = new PriorityQueue({ compare: comparator2 });
    servers.forEach((_, i) => available.enqueue(i));
    for (let j = 0, t = 0; j < tasks.length; j++) {
        t = available.isEmpty() ? unavailable.front()[0] : Math.max(j, t);
        while (unavailable.size() && unavailable.front()[0] <= t) {
            available.enqueue(unavailable.dequeue()[1]);
        }
        unavailable.enqueue([t + tasks[j], available.front()]);
        tasks[j] = available.dequeue();
    }
    return tasks;
}
