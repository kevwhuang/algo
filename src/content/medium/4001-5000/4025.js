// 4025. Minimize the Maximum Waiting Time at Synchronized Traffic Lights

function minPenalty(period, lights, arrivalTime) {
    let res = 0;
    const max = Math.max(...lights);
    for (let i = 0; i < arrivalTime.length; i++) {
        const mod = arrivalTime[i] % period;
        if (mod >= max) res = Math.max(period - mod, res);
    }
    return res;
}
