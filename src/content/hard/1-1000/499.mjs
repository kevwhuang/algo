// 499 - The Maze III

function findShortestWay(maze, ball, hole) {
    const M = maze, m = M.length, n = M[0].length;
    M[hole[0]][hole[1]] = 1;
    const C = Array.from({ length: m }, () => new Uint16Array(n).fill(-1));
    C[ball[0]][ball[1]] = 0;
    const pq = new PriorityQueue({ compare: (a, b) => a[2] - b[2] });
    pq.enqueue(ball.concat(0, ''));
    const D = [[-1, 0, 'u'], [1, 0, 'd'], [0, -1, 'l'], [0, 1, 'r']];
    let res, min = Infinity;
    while (pq.front()?.[2] <= min) {
        const arr = pq.dequeue();
        for (let i = 0; i < 4; i++) {
            const dr = D[i][0], dc = D[i][1], t = arr[3] + D[i][2];
            let acc = arr[2], rr = arr[0] + dr, cc = arr[1] + dc;
            while (~rr && rr < m && ~cc && cc < n && !M[rr][cc]) {
                acc++, rr += dr, cc += dc;
            }
            if (rr === hole[0] && cc === hole[1]) {
                if (acc === min && t < res) res = t;
                else if (acc < min) res = t, min = acc;
            }
            rr -= dr, cc -= dc;
            if (acc === arr[2] || acc > C[rr][cc]) continue;
            C[rr][cc] = acc;
            pq.enqueue([rr, cc, acc, t]);
        }
    }
    return res || 'impossible';
}
