// 1986 - Minimum Number of Work Sessions to Finish the Tasks

function minSessions(tasks, sessionTime) {
    function backtrack(i) {
        const n = cur.length;
        if (n >= res) return;
        if (i === tasks.length) return res = Math.min(n, res);
        const next = tasks[i];
        for (let j = 0; j < n; j++) {
            if (cur[j] + next > sessionTime) continue;
            cur[j] += next;
            backtrack(i + 1);
            cur[j] -= next;
        }
        cur.push(next);
        backtrack(i + 1);
        cur.pop();
    }
    let res = tasks.sort((a, b) => b - a).length;
    const cur = [];
    backtrack(0);
    return res;
}
