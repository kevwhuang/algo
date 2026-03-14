// 3527 - Find the Most Common Response

function findCommonResponse(responses) {
    const map = new Map();
    for (let i = 0; i < responses.length; i++) {
        const set = new Set(responses[i]);
        for (const e of set) {
            map.set(e, (map.get(e) ?? 0) + 1);
        }
    }
    let res, max = 0;
    for (const e of map) {
        if (e[1] > max) res = e[0], max = e[1];
        else if (e[0] < res && e[1] === max) res = e[0];
    }
    return res;
}
