// 207 - Course Schedule

function canFinish(numCourses, prerequisites) {
    const adj = Array.from({ length: numCourses }, () => []);
    const deg = new Uint16Array(numCourses);
    prerequisites.forEach(e => adj[e[1]].push(e[0]) && deg[e[0]]++);
    let Q = [];
    deg.forEach((e, v) => e === 0 && Q.push(v));
    while (Q.length && (numCourses -= Q.length)) {
        const N = [];
        Q.forEach(u => adj[u].forEach(v => --deg[v] === 0 && N.push(v)));
        Q = N;
    }
    return numCourses === 0;
}
