// 2093 - Minimum Cost to Reach City With Discounts

function minimumCost(n, highways, discounts) {
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < highways.length; i++) {
        adj[highways[i][0]].push([highways[i][1], highways[i][2]]);
        adj[highways[i][1]].push([highways[i][0], highways[i][2]]);
    }
    if (adj[n - 1].length === 0) return -1;
    let min = Infinity, queue = [[0, 0, []]], costs = new Array(n);
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            if (queue[i][0] === n - 1) {
                const path = new Uint32Array(queue[i][2]).sort();
                let sum = 0, rem = discounts, j = path.length - 1;
                while (rem--) sum += path[j--] / 2 >> 0;
                while (j >= 0) sum += path[j--];
                if (sum < min) min = sum;
                continue;
            }
            const next = adj[queue[i][0]];
            for (let j = 0; j < next.length; j++) {
                const nextCost = next[j][1] + queue[i][1];
                if (nextCost >= costs[next[j][0]]) continue;
                costs[next[j][0]] = nextCost;
                const nextPath = queue[i][2].concat(next[j][1]);
                nextQueue.push([next[j][0], nextCost, nextPath]);
            }
        }
        queue = nextQueue;
    }
    return min === Infinity ? -1 : min;
}
