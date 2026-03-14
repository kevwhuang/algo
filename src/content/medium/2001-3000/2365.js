// 2365 - Task Scheduler II

function taskSchedulerII(tasks, space) {
    let days = 0;
    const map = new Map();
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (!map.has(task) || map.get(task) <= days) days++;
        else days += map.get(task) - days;
        map.set(task, days + space + 1);
    }
    return days;
}
