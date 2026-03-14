// 505 - The Maze II

function shortestDistance(maze, start, destination) {
    const validate = (r, c) => 0 <= r && r < m && 0 <= c && c < n;
    const m = maze.length, n = maze[0].length;
    const dists = Array.from({ length: m }, () => new Array(n).fill(Infinity));
    dists[start[0]][start[1]] = 0;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let queue = [start];
    while (queue.length) {
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const r0 = queue[i][0], c0 = queue[i][1];
            for (let j = 0; j < 4; j++) {
                const dr = dirs[j][0], dc = dirs[j][1];
                let r = r0, c = c0, dist = 0;
                while (validate(r + dr, c + dc) && maze[r + dr][c + dc] === 0) {
                    r += dr, c += dc, dist++;
                }
                if (dists[r][c] <= dists[r0][c0] + dist) continue;
                dists[r][c] = dists[r0][c0] + dist;
                newQueue.push([r, c]);
            }
        }
        queue = newQueue;
    }
    const r = destination[0], c = destination[1];
    return dists[r][c] === Infinity ? -1 : dists[r][c];
}
