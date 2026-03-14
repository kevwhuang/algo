// 433 - Minimum Genetic Mutation

function minMutation(startGene, endGene, bank) {
    bank = new Set(bank);
    const options = ['A', 'C', 'G', 'T'];
    let mutations = 0;
    const seen = new Set([startGene]);
    let queue = [startGene];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const cur = queue[i];
            if (cur === endGene) return mutations;
            for (let j = 0; j < cur.length; j++) {
                for (let k = 0; k < 4; k++) {
                    const s = cur.slice(0, j), t = cur.slice(j + 1);
                    const next = `${s}${options[k]}${t}`;
                    if (!bank.has(next) || seen.has(next)) continue;
                    seen.add(next);
                    nextQueue.push(next);
                }
            }
        }
        mutations++;
        queue = nextQueue;
    }
    return -1;
}
