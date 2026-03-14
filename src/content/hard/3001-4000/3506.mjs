// 3506 - Find Time Required to Eliminate Bacterial Strains

function minEliminationTime(timeReq, splitTime) {
    const heap = new PriorityQueue((a, b) => a - b);
    timeReq.forEach(e => heap.enqueue(e));
    while (heap.size() > 1) {
        heap.dequeue();
        heap.enqueue(heap.dequeue() + splitTime);
    }
    return heap.front();
}
