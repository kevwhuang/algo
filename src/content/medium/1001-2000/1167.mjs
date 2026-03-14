// 1167 - Minimum Cost to Connect Sticks

function connectSticks(sticks) {
    const heap = new PriorityQueue({ compare: (a, b) => a - b });
    for (let i = 0; i < sticks.length; i++) {
        heap.enqueue(sticks[i]);
    }
    let res = 0;
    while (true) {
        const a = heap.dequeue(), b = heap.dequeue();
        if (!b) break;
        res += a + b;
        heap.enqueue(a + b);
    }
    return res;
}
