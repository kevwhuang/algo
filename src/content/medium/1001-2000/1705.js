// 1705 - Maximum Number of Eaten Apples

function eatenApples(apples, days) {
    let res = 0;
    const pq = new PriorityQueue({ compare: (a, b) => a[1] - b[1] });
    for (let day = 0; day <= 40000; day++) {
        if (day < days.length) pq.enqueue([apples[day], day + days[day]]);
        if (pq.isEmpty()) break;
        while (pq.size() && pq.front()[1] <= day) pq.dequeue();
        if (pq.isEmpty()) continue;
        if (!--pq.front()[0]) pq.dequeue();
        res++;
    }
    return res;
}
