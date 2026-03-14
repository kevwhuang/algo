// 2059 - Minimum Operations to Convert Number

function minimumOperations(nums, start, goal) {
    function handleNext(next) {
        if (next < 0 || next > 1000) return;
        if (seen.has(next)) return;
        seen.add(next);
        nextQueue.push(next);
    }
    let queue = [start], nextQueue, ops = 1;
    const seen = new Set(queue);
    while (queue.length) {
        nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const cur = queue[i];
            for (let j = 0; j < nums.length; j++) {
                let next = cur + nums[j];
                if (next === goal) return ops;
                handleNext(next);
                next = cur - nums[j];
                if (next === goal) return ops;
                handleNext(next);
                next = cur ^ nums[j];
                if (next === goal) return ops;
                handleNext(next);
            }
        }
        queue = nextQueue;
        ops++;
    }
    return -1;
}
