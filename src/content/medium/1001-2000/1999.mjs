// 1999 - Smallest Greater Multiple Made of Two Digits

function findInteger(k, digit1, digit2) {
    if (digit1 > digit2) [digit1, digit2] = [digit2, digit1];
    let queue = [digit1, digit2], target = 10;
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const num = queue[i];
            if (num > 2147483647) return -1;
            if (num > k && num % k === 0) return num;
            const next1 = 10 * num + digit1;
            if (next1 >= target) nextQueue.push(next1);
            const next2 = 10 * num + digit2;
            if (next2 >= target) nextQueue.push(next2);
        }
        queue = nextQueue;
        target *= 10;
    }
    return -1;
}
