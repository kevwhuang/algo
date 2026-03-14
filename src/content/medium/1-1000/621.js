// 621 - Task Scheduler

function leastInterval(tasks, n) {
    const B = new Uint16Array(26);
    tasks.forEach(e => B[e.charCodeAt() - 65]++);
    const max = B.reduce((s, e) => Math.max(e, s));
    const sum = B.reduce((s, e) => s + (e === max), 0);
    return Math.max((n + 1) * (max - 1) + sum, tasks.length);
}
