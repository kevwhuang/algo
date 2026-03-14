// 2092 - Find All People With Secret

function findAllPeople(n, meetings, firstPerson) {
    const find = v => v === uf[v] ? v : uf[v] = find(uf[v]);
    const uf = Array.from({ length: n }, (_, v) => v);
    uf[0] = firstPerson;
    const B = {};
    meetings.forEach(e => B[e[2]] ? B[e[2]].push(e) : B[e[2]] = [e]);
    for (const arr of Object.values(B)) {
        arr.forEach(e => uf[find(e[0])] = find(e[1]));
        const tgt = find(0);
        arr.forEach(e => find(e[0]) !== tgt && (uf[e[0]] = e[0]));
        arr.forEach(e => find(e[1]) !== tgt && (uf[e[1]] = e[1]));
    }
    const res = [], tgt = uf[0];
    uf.forEach((_, v) => find(v) === tgt && res.push(v));
    return res;
}
