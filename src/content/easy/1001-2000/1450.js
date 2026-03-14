// 1450 - Number of Students Doing Homework at a Given Time

function busyStudent(startTime, endTime, queryTime) {
    let res = 0;
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) res++;
    }
    return res;
}
