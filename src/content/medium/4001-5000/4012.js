// 4012. Count of Unfinished Tasks After Each Shift

function countTasks(tasks, shifts) {
    const n = tasks.length;
    for (let i = 1; i < n; i++) {
        tasks[i] += tasks[i - 1];
    }
    for (let acc = 0, i = 0, l = 0; i < shifts.length; i++) {
        acc += shifts[i];
        let r = n - 1;
        while (l <= r) {
            const m = l + r >> 1;
            if (tasks[m] <= acc) l = m + 1;
            else r = m - 1;
        }
        if (l === n) shifts[i] = acc = l = 0;
        else shifts[i] = n - l;
    }
    return shifts;
}
