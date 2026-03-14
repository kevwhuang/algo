// 210 - Course Schedule II

function findOrder(numCourses, prerequisites) {
    const adj = Array.from({ length: numCourses }, () => []);
    const deg = new Uint16Array(numCourses);
    prerequisites.forEach(e => adj[e[1]].push(e[0]) && deg[e[0]]++);
    let Q = [];
    deg.forEach((e, v) => e === 0 && Q.push(v));
    const res = [];
    while (Q.length) {
        const N = [];
        Q.forEach(u => adj[u].forEach(v => --deg[v] === 0 && N.push(v)));
        Q.forEach(v => res.push(v));
        Q = N;
    }
    return res.length === numCourses ? res : [];
}
