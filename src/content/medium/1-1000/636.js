// 636 - Exclusive Time of Functions

function exclusiveTime(n, logs) {
    const times = new Array(n).fill(0);
    const stack = [];
    for (let i = 0, prev; i < logs.length; i++) {
        const [id, mode, time] = logs[i].split(':');
        if (mode === 'start') {
            if (stack.length) times[stack[stack.length - 1]] += time - prev;
            stack.push(id);
            prev = time;
        } else {
            times[stack.pop()] += time - prev + 1;
            prev = Number(time) + 1;
        }
    }
    return times;
}
