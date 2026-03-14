// 3422 - Minimum Operations to Make Subarray Elements Equal

function minOperations(nums, k) {
    function fn1(heap) {
        const B = heap === heap1 ? B1 : B2;
        while (B.get(heap.front())) {
            B.set(heap.front(), B.get(heap.dequeue()) - 1);
        }
        return heap.front();
    }
    function fn2() {
        if (m < n) {
            heap1.enqueue(fn1(heap2));
            acc1 += heap2.front(), acc2 -= heap2.dequeue(), m++, n--;
        } else if (m > n + 1) {
            heap2.enqueue(fn1(heap1));
            acc1 -= heap2.front(), acc2 += heap1.dequeue(), m--, n++;
        }
    }
    k--;
    let res = Infinity, acc1 = 0, acc2 = 0, m = 0, n = 0, i = -1;
    const heap1 = new PriorityQueue((a, b) => b - a);
    const heap2 = new PriorityQueue((a, b) => a - b);
    const B1 = new Map();
    const B2 = new Map();
    while (++i < nums.length) {
        const cur = nums[i];
        (fn1(heap1) >= cur ? heap1 : heap2).enqueue(cur);
        if (heap1.front() >= cur) acc1 += cur, m++;
        else acc2 += cur, n++;
        fn2();
        if (i < k) continue;
        const a = m === n ? fn1(heap1) + fn1(heap2) >> 1 : fn1(heap1);
        res = Math.min((m - n) * a + acc2 - acc1, res);
        const prev = nums[i - k];
        if (fn1(heap1) >= prev) B1.set(prev, (B1.get(prev) ?? 0) + 1);
        else B2.set(prev, (B2.get(prev) ?? 0) + 1);
        if (heap1.front() >= prev) acc1 -= prev, m--;
        else acc2 -= prev, n--;
        fn2();
    }
    return res;
}
