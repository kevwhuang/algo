// 2306 - Naming a Company

function distinctNames(ideas) {
    const arr = Array.from({ length: 26 }, () => new Set());
    ideas.forEach(e => arr[e.charCodeAt() - 97].add(e.slice(1)));
    let res = 0;
    for (let i = 0; i < 25; i++) {
        for (let j = i + 1; j < 26; j++) {
            let acc = 0;
            for (const s of arr[i]) {
                if (arr[j].has(s)) acc++;
            }
            res += (arr[i].size - acc) * (arr[j].size - acc);
        }
    }
    return 2 * res;
}
