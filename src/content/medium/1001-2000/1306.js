// 1306 - Jump Game III

function canReach(arr, start) {
    let queue = [start];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const pos = queue[i];
            if (arr[pos] === null) continue;
            if (arr[pos] === 0) return true;
            let next = pos - arr[pos];
            if (next >= 0) nextQueue.push(next);
            next = pos + arr[pos];
            if (next < arr.length) nextQueue.push(next);
            arr[pos] = null;
        }
        queue = nextQueue;
    }
    return false;
}
