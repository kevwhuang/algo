// 444 - Sequence Reconstruction

function sequenceReconstruction(nums, sequences) {
    const adj = {};
    const indegree = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < sequences.length; i++) {
        const cur = sequences[i];
        for (let j = 1; j < cur.length; j++) {
            const u = cur[j - 1], v = cur[j];
            adj[u] ? adj[u].push(v) : adj[u] = [v];
            indegree[v]++;
        }
    }
    let cur;
    for (let v = 1; v < indegree.length; v++) {
        if (indegree[v]) continue;
        if (cur) return false;
        cur = v;
    }
    let i = 0;
    while (cur === nums[i++] && adj[cur]) {
        const next = adj[cur];
        cur = null;
        for (let i = 0; i < next.length; i++) {
            const v = next[i];
            if (--indegree[v]) continue;
            if (cur) return false;
            cur = v;
        }
    }
    return i === nums.length;
}
