// 1834 - Single-Threaded CPU

function getOrder(tasks) {
    const comparator = (a, b) => a[2] - b[2] || a[0] - b[0];
    const pq = new PriorityQueue({ compare: comparator });
    for (let i = 0; i < tasks.length; i++) {
        tasks[i] = [i, tasks[i][0], tasks[i][1]];
    }
    tasks.sort((a, b) => a[1] - b[1]);
    let time = 0, i = 0, j = 0;
    const order = new Array(tasks.length);
    while (i < tasks.length) {
        while (j < tasks.length && tasks[j][1] <= time) {
            pq.enqueue(tasks[j++]);
        }
        if (pq.size()) {
            const task = pq.dequeue();
            order[i++] = task[0];
            time += task[2];
        } else if (j < tasks.length) {
            time = tasks[j][1];
        }
    }
    return order;
}
