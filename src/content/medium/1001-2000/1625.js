// 1625 - Lexicographically Smallest String After Applying Operations

function findLexSmallestString(s, a, b) {
    let res = s, queue = [s];
    const seen = new Set(queue), len = s.length;
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            let cur = queue[i];
            if (cur < res) res = cur;
            cur = cur.slice(len - b) + cur.slice(0, len - b);
            if (!seen.has(cur)) {
                seen.add(cur);
                nextQueue.push(cur);
            }
            cur = queue[i].split('');
            for (let j = 1; j < len; j += 2) {
                cur[j] = (Number(cur[j]) + a) % 10;
            }
            cur = cur.join('');
            if (seen.has(cur)) continue;
            seen.add(cur);
            nextQueue.push(cur);
        }
        queue = nextQueue;
    }
    return res;
}
