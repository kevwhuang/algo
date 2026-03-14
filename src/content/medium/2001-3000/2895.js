// 2895 - Minimum Processing Time

function minProcessingTime(processorTime, tasks) {
    processorTime.sort((a, b) => a - b);
    tasks.sort((a, b) => b - a);
    let time = 0;
    for (let i = 0; i < processorTime.length; i++) {
        time = Math.max(processorTime[i] + tasks[4 * i], time);
    }
    return time;
}
