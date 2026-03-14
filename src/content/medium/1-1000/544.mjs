// 544 - Output Contest Matches

function findContestMatch(n) {
    let queue = new Array(n / 2), i = 0;
    while (i < n) queue[i] = `(${++i},${n--})`;
    while (queue.length > 1) {
        const nextQueue = new Array(queue.length / 2);
        let l = 0, r = queue.length - 1;
        while (l < r) nextQueue[l] = `(${queue[l++]},${queue[r--]})`;
        queue = nextQueue;
    }
    return queue[0];
}
