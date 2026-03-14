// 2651 - Calculate Delayed Arrival Time

function findDelayedArrivalTime(arrivalTime, delayedTime) {
    return (arrivalTime + delayedTime) % 24;
}
