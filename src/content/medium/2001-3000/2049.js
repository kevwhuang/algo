// 2049 - Count Nodes With the Highest Score

function countHighestScoreNodes(parents) {
    function dfs(node) {
        let count = 1, score = 1;
        if (left[node]) {
            const subcount = dfs(left[node]);
            count += subcount;
            score *= subcount;
        }
        if (right[node]) {
            const subcount = dfs(right[node]);
            count += subcount;
            score *= subcount;
        }
        score *= parents.length - count || 1;
        if (score === max) res++;
        else if (score > max) {
            res = 1;
            max = score;
        }
        return count;
    }
    const left = new Uint32Array(parents.length);
    const right = new Uint32Array(parents.length);
    for (let i = 1; i < parents.length; i++) {
        if (left[parents[i]]) right[parents[i]] = i;
        else left[parents[i]] = i;
    }
    let res = 0, max = 1;
    dfs(0);
    return res;
}
