// 752 - Open the Lock

function openLock(deadends, target) {
    function getNext(cur, pos, inc) {
        const digit = (Number(cur[pos]) + inc + 10) % 10;
        return `${cur.slice(0, pos)}${digit}${cur.slice(pos + 1)}`;
    }
    if (target === '0000') return 0;
    deadends = new Set(deadends);
    if (deadends.has('0000')) return -1;
    let queue = ['0000'], turns = 1;
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const cur = queue[i];
            for (let pos = 0; pos <= 3; pos++) {
                for (let inc = -1; inc <= 1; inc += 2) {
                    const next = getNext(cur, pos, inc);
                    if (next === target) return turns;
                    if (deadends.has(next)) continue;
                    deadends.add(next);
                    nextQueue.push(next);
                }
            }
        }
        queue = nextQueue;
        turns++;
    }
    return -1;
}
