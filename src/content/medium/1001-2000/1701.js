// 1701 - Average Waiting Time

function averageWaitingTime(customers) {
    let wait = 0, next = customers[0][0];
    for (let i = 0; i < customers.length; i++) {
        const arrival = customers[i][0], time = customers[i][1];
        if (next > arrival) wait += next - arrival;
        else next = arrival;
        wait += time;
        next += time;
    }
    return wait / customers.length;
}
