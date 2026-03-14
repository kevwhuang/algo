// 547 - Number of Provinces

function findCircleNum(isConnected) {
    let provinces = 0;
    const seen = new Set();
    const len = isConnected.length;
    for (let i = 0; i < len; i++) {
        if (seen.has(i)) continue;
        provinces++;
        seen.add(i);
        let queue = [i];
        while (queue.length) {
            const newQueue = [];
            for (let j = 0; j < queue.length; j++) {
                const city = isConnected[queue[j]];
                for (let k = 0; k < len; k++) {
                    if (city[k] === 0) continue;
                    if (seen.has(k)) continue;
                    seen.add(k);
                    newQueue.push(k);
                }
            }
            queue = newQueue;
        }
    }
    return provinces;
}
