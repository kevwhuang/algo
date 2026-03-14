// 2073 - Time Needed to Buy Tickets

function timeRequiredToBuy(tickets, k) {
    let time = tickets[k];
    for (let i = 0; i < k; i++) {
        time += Math.min(tickets[i], tickets[k]);
    }
    for (let i = k + 1; i < tickets.length; i++) {
        time += Math.min(tickets[i], tickets[k] - 1);
    }
    return time;
}
