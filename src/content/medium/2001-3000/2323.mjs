// 2323 - Find Minimum Time to Finish All Jobs II

function minimumTime(jobs, workers) {
    jobs.sort((a, b) => b - a);
    workers.sort((a, b) => b - a);
    let days = 1;
    for (let i = 0; i < jobs.length; i++) {
        days = Math.max(Math.ceil(jobs[i] / workers[i]), days);
    }
    return days;
}
