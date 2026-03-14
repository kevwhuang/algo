// 1926 - Nearest Exit From Entrance in Maze

function nearestExit(maze, entrance) {
    const isExit = (r, c) => r === 0 || r === rr || c === 0 || c === cc;
    const rr = maze.length - 1, cc = maze[0].length - 1;
    const rrr = entrance[0], ccc = entrance[1];
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    maze[rrr][ccc] = '+';
    let steps = 0, queue = [entrance];
    while (queue.length) {
        steps++;
        const newQueue = [];
        for (let i = 0; i < queue.length; i++) {
            const r = queue[i][0], c = queue[i][1];
            for (let j = 0; j < 4; j++) {
                const dr = r + dirs[j][0], dc = c + dirs[j][1];
                if (maze[dr]?.[dc] !== '.') continue;
                maze[dr][dc] = '+';
                newQueue.push([dr, dc]);
                if (isExit(dr, dc)) return steps;
            }
        }
        queue = newQueue;
    }
    return -1;
}
