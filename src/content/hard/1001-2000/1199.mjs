// 1199 - Minimum Time to Build Blocks

function minBuildTime(blocks, split) {
    const heap = new PriorityQueue((a, b) => a - b);
    blocks.forEach(e => heap.enqueue(e));
    while (heap.size() > 1) {
        heap.dequeue();
        heap.enqueue(heap.dequeue() + split);
    }
    return heap.front();
}
