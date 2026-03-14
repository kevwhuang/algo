// 490 - The Maze

function hasPath(maze, start, destination) {
    function move(dr, dc, fn) {
        if (validate(r + dr, c + dc) && maze[r + dr][c + dc] > 0) return;
        if (dr) while (validate(r + dr, c) && maze[r + dr][c] <= 0) r += dr;
        else while (validate(r, c + dc) && maze[r][c + dc] <= 0) c += dc;
        if (r === rr && c === cc) return true;
        if (maze[r][c] !== -1) nextQueue.push([r, c]);
        maze[r][c] = -1;
        if (fn === 0) r = queue[i][0];
        else if (fn === 1) c = queue[i][1];
    }
    const validate = (r, c) => r >= 0 && r < m && c >= 0 && c < n;
    maze[start[0]][start[1]] = -1;
    let i, r, c, queue = [start], nextQueue;
    const m = maze.length, n = maze[0].length;
    const rr = destination[0], cc = destination[1];
    while (queue.length) {
        i = -1, nextQueue = [];
        while (++i < queue.length) {
            r = queue[i][0], c = queue[i][1];
            if (move(-1, 0, 0)) return true;
            if (move(1, 0, 0)) return true;
            if (move(0, -1, 1)) return true;
            if (move(0, 1, null)) return true;
        }
        queue = nextQueue;
    }
    return false;
}
