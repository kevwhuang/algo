// 1152 - Analyze User Website Visit Pattern

function mostVisitedPattern(username, timestamp, website) {
    const users = {};
    for (let i = 0; i < username.length; i++) {
        users[username[i]] ??= [];
        users[username[i]].push([timestamp[i], website[i]]);
    }
    const patterns = {};
    for (const user in users) {
        const sites = users[user].sort((a, b) => a[0] - b[0]);
        const n = sites.length;
        for (let i = 0; i < n; i++) {
            const a = sites[i][1];
            for (let j = i + 1; j < n; j++) {
                const b = sites[j][1];
                for (let k = j + 1; k < n; k++) {
                    const pattern = `${a}-${b}-${sites[k][1]}`;
                    patterns[pattern] ??= new Set();
                    patterns[pattern].add(user);
                }
            }
        }
    }
    let res, max = 0;
    for (const pattern in patterns) {
        const count = patterns[pattern].size;
        if (count < max) continue;
        if (count > max) res = pattern, max = count;
        else if (pattern < res) res = pattern;
    }
    return res.split('-');
}
