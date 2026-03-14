// 1778 - Shortest Path in a Hidden Grid

function findShortestPath(master) {
    function dfs(r, c) {
        if (grid[r][c] > 0) return;
        if (master.isTarget()) {
            grid[r][c] = 3;
            hasPath = true;
        } else {
            grid[r][c] = 2;
        }
        for (let i = 0; i < 4; i++) {
            if (master.canMove(dir1[i])) {
                master.move(dir1[i]);
                dfs(r + dr[i], c + dc[i]);
                master.move(dir2[i]);
            } else {
                grid[r + dr[i]][c + dc[i]] = 1;
            }
        }
    }
    const grid = Array.from({ length: 1001 }, () => new Uint8Array(1001));
    const dir1 = ['U', 'D', 'L', 'R'];
    const dir2 = ['D', 'U', 'R', 'L'];
    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];
    let hasPath = false;
    dfs(500, 500);
    if (hasPath === false) return -1;
    let dist = 0;
    let queue = [[500, 500]];
    while (queue.length) {
        const nextQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const r = queue[i][0], c = queue[i][1];
            if (grid[r][c] === 3) return dist;
            if (grid[r][c] === 1) continue;
            grid[r][c] = 1;
            for (let i = 0; i < 4; i++) {
                nextQueue.push([r + dr[i], c + dc[i]]);
            }
        }
        queue = nextQueue;
        dist++;
    }
}
