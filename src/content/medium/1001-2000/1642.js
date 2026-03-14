// 1642 - Furthest Building You Can Reach

function furthestBuilding(heights, bricks, ladders) {
    let i = 0;
    const heap = new PriorityQueue({ compare: (a, b) => b - a });
    while (++i < heights.length) {
        const diff = heights[i] - heights[i - 1];
        if (diff <= 0) continue;
        bricks -= diff;
        heap.enqueue(diff);
        if (bricks >= 0) continue;
        bricks += heap.dequeue();
        if (--ladders < 0) break;
    }
    return i - 1;
}
